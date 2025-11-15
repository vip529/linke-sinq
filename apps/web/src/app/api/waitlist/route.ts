import { type NextRequest, NextResponse } from 'next/server';
import type { WaitlistApiResponse, WaitlistSubmission } from '~/@types/waitlist';
import { createClient } from '~/lib/supabase/server';
import { isValidEmail, normalizeEmail, sanitizeEmail } from '~/utils/validation';

export const POST = async (request: NextRequest) => {
  try {
    const body = (await request.json()) as WaitlistSubmission;
    const { email, source = 'landing_page', referrer } = body;

    if (!email) {
      return NextResponse.json<WaitlistApiResponse>(
        {
          success: false,
          message: 'Email is required',
          error: 'MISSING_EMAIL',
        },
        { status: 400 }
      );
    }

    const sanitizedEmail = sanitizeEmail(email);

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json<WaitlistApiResponse>(
        {
          success: false,
          message: 'Please enter a valid email address',
          error: 'INVALID_EMAIL',
        },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeEmail(sanitizedEmail);
    const userAgent = request.headers.get('user-agent') || null;
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor?.split(',')[0]?.trim() || null;

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('waitlist')
      .insert({
        email: normalizedEmail,
        source,
        referrer: referrer || null,
        user_agent: userAgent,
        ip_address: ipAddress,
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json<WaitlistApiResponse>(
          {
            success: false,
            message: 'This email is already on the waitlist',
            error: 'DUPLICATE_EMAIL',
          },
          { status: 409 }
        );
      }

      console.error('Waitlist insertion error:', error);
      return NextResponse.json<WaitlistApiResponse>(
        {
          success: false,
          message: 'Failed to join waitlist. Please try again.',
          error: 'DATABASE_ERROR',
        },
        { status: 500 }
      );
    }

    return NextResponse.json<WaitlistApiResponse>(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        data: {
          id: data.id,
          email: data.email,
          source: data.source,
          referrer: data.referrer,
          userAgent: data.user_agent,
          ipAddress: data.ip_address,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json<WaitlistApiResponse>(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again.',
        error: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
};
