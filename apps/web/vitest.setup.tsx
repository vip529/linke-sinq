import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { afterEach } from 'vitest';

// Configure React 19 act environment
// React 19 moved act from react-dom/test-utils to react package
// This flag tells React Testing Library we're in an act environment
if (typeof globalThis.IS_REACT_ACT_ENVIRONMENT === 'undefined') {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
}

// Make React globally available for testing library
globalThis.React = React;

// Cleanup after each test
afterEach(() => {
  cleanup();
});
