'use client';

import { Button } from '@/app/components/ui/button';
import { Icons } from '@/app/components/icons';
import { useRouter } from 'next/navigation';

export function NavigateBack() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      onClick={() => router.back()}
    >
      <Icons.chevronBack className="h-5 w-5" />
    </Button>
  );
}