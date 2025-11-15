const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') {
    return false;
  }

  const trimmedEmail = email.trim();

  if (trimmedEmail.length === 0 || trimmedEmail.length > 254) {
    return false;
  }

  return EMAIL_REGEX.test(trimmedEmail);
};

export const normalizeEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

export const sanitizeEmail = (email: string): string => {
  return email.replace(/[<>]/g, '');
};
