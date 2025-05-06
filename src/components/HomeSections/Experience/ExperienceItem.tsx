import React from 'react';

interface Props {
  title: string;
  startDate: string;
  endDate?: string;
  children: React.ReactNode;
}

export default function ExperienceItem({ title, startDate, endDate, children }: Props) {
  return (
    <div className="mb-8 min-h-30">
      <div className="text-[13px] text-textContrastColor tracking-[4px]">{title}</div>
      <div className="relative text-textColor text-left mb-2">
        <span className="px-2 text-[10px] py-1 bg-tertiary">
          {startDate} {endDate ? `- ${endDate}` : ''}
        </span>
        <div className="w-4 h-4 bg-tertiary rounded-full absolute top-[18%] left-[-30px]"></div>
      </div>
      <div className="text-xs leading-[22px] opacity-90 tracking-[2px]">{children}</div>
    </div>
  );
}
