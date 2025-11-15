export const API_RESPONSE_FIELDS = {
  MESSAGE: 'message',
  ERROR: 'error',
} as const;

export type ApiResponseField = (typeof API_RESPONSE_FIELDS)[keyof typeof API_RESPONSE_FIELDS];
