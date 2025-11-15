export interface WaitlistEntry {
  id: string;
  email: string;
  source: string;
  referrer: string | null;
  userAgent: string | null;
  ipAddress: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface WaitlistSubmission {
  email: string;
  source?: string;
  referrer?: string;
}

export interface WaitlistApiResponse {
  success: boolean;
  message: string;
  data?: WaitlistEntry;
  error?: string;
}
