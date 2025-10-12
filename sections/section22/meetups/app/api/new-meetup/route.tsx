import { NextResponse } from 'next/server';

import { insertMeetup } from '@/libs/db';
import type MeetupData from '@/types/MeetupData';

export async function POST(request: Request) {
  try {
    const body: MeetupData = await request.json();

    // Validate required fields
    if (!body.title || !body.image || !body.address || !body.description) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: title, image, address, description',
        },
        { status: 400 }
      );
    }

    const result = await insertMeetup(body);

    return NextResponse.json(
      {
        success: true,
        id: result.insertedId,
        message: 'Meetup created successfully',
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create meetup',
      },
      { status: 400 }
    );
  }
}
