import type { WaitListErrorCode } from "~/constants/api/waitLis";

export interface WaitListEntry {
  id: string;
  email: string;
  source: string;
  referrer: string | null;
  userAgent: string | null;
  ipAddress: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface WaitListInsertPayload {
  email: string;
  source: string;
  referrer: string | null;
  user_agent: string | null;
  ip_address: string | null;
}

export interface WaitListRecord extends WaitListInsertPayload {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface WaitListSubmission {
  email: string;
  source?: string;
  referrer?: string;
}

export interface WaitListApiResponse {
  success: boolean;
  message: string;
  data?: WaitListEntry;
  error?: WaitListErrorCode;
}
