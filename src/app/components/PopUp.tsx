import React from 'react';

interface PopUpProps {
  title?: string;
  subtitle?: string;
  footer?: string;
  className?: string;
}

export default function PopUp({ 
  title = "DISTRICT 1", 
  subtitle = "Council Member Name", 
  footer = "100 Properties",
  className = ""
}: PopUpProps) {
  return (
    <div className={`bg-white content-stretch flex flex-col gap-[13px] items-start p-[30px] relative rounded-[14.5px] w-max max-w-sm shadow-xl ${className}`} data-name="Pop Up">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[14.5px]" />
      <p className="font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-black tracking-[3.24px] w-full whitespace-pre-wrap uppercase">
        {title}
      </p>
      <p className="font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#858585] text-[18px] tracking-[3.24px] w-full whitespace-pre-wrap">
        {subtitle}
      </p>
      <p className="font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#858585] text-[18px] tracking-[3.24px] w-full whitespace-pre-wrap">
        {footer}
      </p>
    </div>
  );
}
