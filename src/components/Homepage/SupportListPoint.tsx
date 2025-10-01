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
    <li className="flex flex-row items-start gap-5">
      <div className="relative flex items-center w-[60px] h-[60px] justify-center gap-[21px]">
        <div className="absolute inset-0 bg-white z-0 shadow-[0px_4px_9px_0px_rgba(0,0,0,0.05)]" />
       
        <div className="relative z-10">
          {icon}
        </div>
      </div>

       <div>
        <h3 className="text-[28px] font-bold">
          {title}
        </h3>

        <p className="text-lg font-medium leading-[30px] text-text-secondary-grey max-w-[428px]">
          {description}
        </p>
      </div>
    </li>
  );
}
