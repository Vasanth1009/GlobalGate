'use client';

import { Button } from '@nextui-org/react';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-16 flex max-w-xl flex-col gap-2">
      <h2 className="text-xl font-bold text-veryDarkPurple">Error!</h2>
      <p className="my-2 text-darkPurple">
        There was an issue with our website. This could be a temporary issue,
        please try your action again.
      </p>
      <Button onClick={() => reset()} color="primary">
        Try Again
      </Button>
    </div>
  );
}
