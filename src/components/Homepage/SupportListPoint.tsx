type SupportListPointProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function SupportListPoint({
  icon,
  title,
  description,
}: SupportListPointProps) {
  return (
    <li className="flex flex-row items-start gap-3 lg:gap-5 mt-5">
      <div className="relative flex items-center w-20 lg:w-[60px] h-13 lg:h-[60px] justify-center gap-3 lg:gap-[21px]">
        <div className="absolute inset-0 bg-white z-0 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)]" />
       
        <div className="relative z-10 shrink-0 w-6 lg:w-10 h-6 lg:h-10 overflow-hidden">
          {icon}
        </div>
      </div>

       <div>
        <h3 className="text-xl lg:text-[28px] font-bold">
          {title}
        </h3>

        <p className="text-base lg:text-lg font-medium leading-[30px] text-text-secondary-grey max-w-[428px]">
          {description}
        </p>
      </div>
    </li>
  );
}
