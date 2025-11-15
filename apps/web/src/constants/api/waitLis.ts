export const WAIT_LIST_TABLE = 'waitlist';
export const DEFAULT_WAIT_LIST_SOURCE = 'landing_page';
export const WAIT_LIST_DUPLICATE_RECORD_CODE = '23505';

export const WAIT_LIST_ERROR_CODES = {
  MISSING_EMAIL: 'MISSING_EMAIL',
  INVALID_EMAIL: 'INVALID_EMAIL',
  DUPLICATE_EMAIL: 'DUPLICATE_EMAIL',
  DATABASE_ERROR: 'DATABASE_ERROR',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

export const WAIT_LIST_MESSAGES = {
  SUCCESS: 'Successfully joined the waitlist!',
  MISSING_EMAIL: 'Email is required',
  INVALID_EMAIL: 'Please enter a valid email address',
  DUPLICATE_EMAIL: 'This email is already on the waitlist',
  DATABASE_ERROR: 'Failed to join waitlist. Please try again.',
  INTERNAL_ERROR: 'An unexpected error occurred. Please try again.',
} as const;

export const WAIT_LIST_LOG_MESSAGES = {
  DATABASE_ERROR: 'WaitList database error:',
  API_ERROR: 'WaitList API error:',
  SUBMISSION_ERROR: 'WaitList submission error:',
} as const;

export const WAIT_LIST_FORM_MESSAGES = {
  INPUT_REQUIRED: 'Please enter your email address',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
  BUTTON_SUCCESS: 'Joined!',
  BUTTON_DEFAULT: 'Join WaitList',
} as const;

export type WaitListErrorCode = (typeof WAIT_LIST_ERROR_CODES)[keyof typeof WAIT_LIST_ERROR_CODES];
