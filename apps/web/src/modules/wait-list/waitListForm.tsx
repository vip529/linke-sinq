'use client';

import { type FormEvent, useState } from 'react';
import type { WaitListApiResponse } from '~/@types/api/waitList';
import {
  DEFAULT_WAIT_LIST_SOURCE,
  WAIT_LIST_FORM_MESSAGES,
  WAIT_LIST_LOG_MESSAGES,
} from '~/constants/api/waitLis';
import { LSButton } from '~/lib/components/ls/lsButton';
import { LSInput } from '~/lib/components/ls/lsInput';
import { INPUT_STATES } from '~/lib/constants/lsComponentConstants';

interface WaitListFormProps {
  source?: string;
}

export const WaitListForm = ({ source = DEFAULT_WAIT_LIST_SOURCE }: WaitListFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setState('error');
      setMessage(WAIT_LIST_FORM_MESSAGES.INPUT_REQUIRED);
      return;
    }

    setIsLoading(true);
    setState('idle');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          source,
          referrer: document.referrer || undefined,
        }),
      });

      const data = (await response.json()) as WaitListApiResponse;

      if (data.success) {
        setState('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setState('error');
        setMessage(data.message);
      }
    } catch (error) {
      setState('error');
      setMessage(WAIT_LIST_FORM_MESSAGES.GENERIC_ERROR);
      console.error(WAIT_LIST_LOG_MESSAGES.SUBMISSION_ERROR, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <LSInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            state={state === 'error' ? INPUT_STATES.ERROR : INPUT_STATES.DEFAULT}
            disabled={isLoading || state === 'success'}
            className="w-full"
            autoComplete="email"
            required
          />
        </div>
        <LSButton
          type="submit"
          isLoading={isLoading}
          disabled={state === 'success'}
          className="sm:w-auto w-full"
        >
          {state === 'success'
            ? WAIT_LIST_FORM_MESSAGES.BUTTON_SUCCESS
            : WAIT_LIST_FORM_MESSAGES.BUTTON_DEFAULT}
        </LSButton>
      </div>

      {message && (
        <p
          className={`mt-3 text-sm text-center transition-all duration-300 ${
            state === 'success' ? 'text-status-success' : 'text-status-error'
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};
