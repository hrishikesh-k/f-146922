import type { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  index: number;
  hasAnimation: boolean;
}
export default function TechTag({ children, index, hasAnimation }: Props) {
  return (
    <div
      style={{ animationDelay: `${index * 300}ms` }}
      className={`text-contrastColor ${hasAnimation && 'floating'} bg-tertiary py-2 border-3 border-borderColor px-3 text-xs mt-2`}
    >
      {children}
    </div>
  );
}
