'use client';

import { useFormStatus } from 'react-dom';

import React from 'react';

export default function FormSubmit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p >Creating post...</p>;
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}
