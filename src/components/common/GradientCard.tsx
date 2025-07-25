'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useEffect, type ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  className?: string;
}

export function GradientCard({ children, className }: GradientCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className={cn('relative gradient-card rounded-lg', className)}>
      <div className="relative z-10 h-full w-full rounded-lg bg-card p-1">
        {children}
      </div>
    </div>
  );
}
