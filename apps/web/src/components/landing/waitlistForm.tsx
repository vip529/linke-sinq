'use client';

import { type FormEvent, useState } from 'react';
import type { WaitlistApiResponse } from '~/@types/waitlist';
import { LSButton } from '~/lib/components/ls/lsButton';
import { LSInput } from '~/lib/components/ls/lsInput';
import { INPUT_STATES } from '~/lib/constants/lsComponentConstants';

interface WaitlistFormProps {
  source?: string;
}

export const WaitlistForm = ({ source = 'landing_page' }: WaitlistFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setState('error');
      setMessage('Please enter your email address');
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

      const data = (await response.json()) as WaitlistApiResponse;

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
      setMessage('Something went wrong. Please try again.');
      console.error('Waitlist submission error:', error);
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
          {state === 'success' ? 'Joined!' : 'Join Waitlist'}
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
