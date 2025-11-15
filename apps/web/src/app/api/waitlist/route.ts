import { type NextRequest, NextResponse } from 'next/server';
import type {
  WaitListApiResponse,
  WaitListRecord,
  WaitListSubmission,
} from '~/@types/api/waitList';
import {
  buildWaitListInsertPayload,
  formatWaitListResponseData,
  persistWaitListEntry,
  WaitListRouteError,
} from '~/lib/wait-list/server';

const createErrorResponse = (
  status: number,
  payload: Pick<WaitListApiResponse, 'message' | 'error'>
) =>
  NextResponse.json<WaitListApiResponse>(
    {
      success: false,
      ...payload,
    },
    { status }
  );

const createSuccessResponse = (record: WaitListRecord) =>
  NextResponse.json<WaitListApiResponse>(
    {
      success: true,
      message: 'Successfully joined the waitlist!',
      data: formatWaitListResponseData(record),
    },
    { status: 201 }
  );

const handleRouteError = (error: unknown) => {
  if (error instanceof WaitListRouteError) {
    if (error.code === 'DATABASE_ERROR') {
      console.error('WaitList database error:', error);
    }

    return createErrorResponse(error.status, {
      message: error.message,
      error: error.code,
    });
  }

  console.error('WaitList API error:', error);
  return createErrorResponse(500, {
    message: 'An unexpected error occurred. Please try again.',
    error: 'INTERNAL_ERROR',
  });
};

export const POST = async (request: NextRequest) => {
  try {
    const submission = (await request.json()) as WaitListSubmission;
    const payload = buildWaitListInsertPayload(submission, request);
    const record = await persistWaitListEntry(payload);

    return createSuccessResponse(record);
  } catch (error) {
    return handleRouteError(error);
  }
};
