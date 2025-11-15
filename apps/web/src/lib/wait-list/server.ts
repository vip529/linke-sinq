import type { PostgrestError } from '@supabase/supabase-js';
import type { NextRequest } from 'next/server';
import type {
  WaitListEntry,
  WaitListErrorCode,
  WaitListInsertPayload,
  WaitListRecord,
  WaitListSubmission,
} from '~/@types/api/waitList';
import {
  DEFAULT_WAIT_LIST_SOURCE,
  WAIT_LIST_DUPLICATE_RECORD_CODE,
  WAIT_LIST_ERROR_CODES,
  WAIT_LIST_MESSAGES,
  WAIT_LIST_TABLE,
} from '~/constants/api/waitLis';
import { createSupabaseServerClient } from '~/lib/supabase/server';
import { isValidEmail, normalizeEmail, sanitizeEmail } from '~/utils/validation';

export class WaitListRouteError extends Error {
  readonly status: number;
  readonly code: WaitListErrorCode;

  constructor({
    message,
    status,
    code,
  }: {
    message: string;
    status: number;
    code: WaitListErrorCode;
  }) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

const extractRequestMetadata = (request: NextRequest) => {
  const userAgent = request.headers.get('user-agent') || null;
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ipAddress = forwardedFor?.split(',')[0]?.trim() || null;

  return { userAgent, ipAddress };
};

const normalizeRequestEmail = (email?: string | null) => {
  if (!email) {
    throw new WaitListRouteError({
      status: 400,
      code: WAIT_LIST_ERROR_CODES.MISSING_EMAIL,
      message: WAIT_LIST_MESSAGES.MISSING_EMAIL,
    });
  }

  const sanitized = sanitizeEmail(email);

  if (!isValidEmail(sanitized)) {
    throw new WaitListRouteError({
      status: 400,
      code: WAIT_LIST_ERROR_CODES.INVALID_EMAIL,
      message: WAIT_LIST_MESSAGES.INVALID_EMAIL,
    });
  }

  return normalizeEmail(sanitized);
};

const toRouteError = (error: PostgrestError) => {
  if (error.code === WAIT_LIST_DUPLICATE_RECORD_CODE) {
    return new WaitListRouteError({
      status: 409,
      code: WAIT_LIST_ERROR_CODES.DUPLICATE_EMAIL,
      message: WAIT_LIST_MESSAGES.DUPLICATE_EMAIL,
    });
  }

  return new WaitListRouteError({
    status: 500,
    code: WAIT_LIST_ERROR_CODES.DATABASE_ERROR,
    message: WAIT_LIST_MESSAGES.DATABASE_ERROR,
  });
};

export const buildWaitListInsertPayload = (
  submission: WaitListSubmission,
  request: NextRequest
): WaitListInsertPayload => {
  const normalizedEmail = normalizeRequestEmail(submission.email);
  const source = submission.source ?? DEFAULT_WAIT_LIST_SOURCE;
  const referrer = submission.referrer ?? null;
  const { userAgent, ipAddress } = extractRequestMetadata(request);

  return {
    email: normalizedEmail,
    source,
    referrer,
    user_agent: userAgent,
    ip_address: ipAddress,
  };
};

export const persistWaitListEntry = async (
  payload: WaitListInsertPayload
): Promise<WaitListRecord> => {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from(WAIT_LIST_TABLE)
    .insert(payload)
    .select()
    .single<WaitListRecord>();

  if (error) {
    throw toRouteError(error);
  }

  if (!data) {
    throw new WaitListRouteError({
      status: 500,
      code: WAIT_LIST_ERROR_CODES.DATABASE_ERROR,
      message: WAIT_LIST_MESSAGES.DATABASE_ERROR,
    });
  }

  return data;
};

export const formatWaitListResponseData = (
  record: WaitListRecord
): WaitListEntry => ({
  id: record.id,
  email: record.email,
  source: record.source,
  referrer: record.referrer,
  userAgent: record.user_agent,
  ipAddress: record.ip_address,
  createdAt: record.created_at,
  updatedAt: record.updated_at,
});
