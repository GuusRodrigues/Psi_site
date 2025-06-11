// components/shared/SectionWrapper.tsx
import { ReactNode } from 'react';

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'light' | 'dark';
  hasPadding?: boolean;
};

export const SectionWrapper = ({
  children,
  className = '',
  id,
  variant = 'default',
  hasPadding = true,
}: SectionWrapperProps) => {
  const variants = {
    default: 'bg-background',
    light: 'bg-soft',
    dark: 'bg-primary text-textbranco',
  };

  return (
    <section 
      id={id}
      className={`
        ${hasPadding ? 'py-12 px-6 sm:px-12' : ''}
        ${variants[variant]}
        ${className}
        relative
        mb-12
      `}
    >
      {children}
    </section>
  );
};