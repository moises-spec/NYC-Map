export default function PopUp() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[13px] items-start p-[30px] relative rounded-[14.5px] size-full" data-name="Pop Up">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[14.5px]" />
      <p className="font-['Gotham:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black tracking-[3.24px] w-full whitespace-pre-wrap">DISTRICT 1</p>
      <p className="font-['Gotham:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#858585] text-[18px] tracking-[3.24px] w-full whitespace-pre-wrap">Council Member Name</p>
      <p className="font-['Gotham:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#858585] text-[18px] tracking-[3.24px] w-full whitespace-pre-wrap">100 Properties</p>
    </div>
  );
}