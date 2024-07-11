import { NextJS } from "@/assets";

type StackProps = {
  icon: JSX.Element;
  label: string;
  type: string;
};

export const Stack = ({ label, icon, type }: StackProps) => {
  return (
    <div className="flex h-24 w-full items-center gap-4 rounded-3xl border border-[#EBEBEB] px-2 py-5">
      {icon}
      <div className="flex w-full items-center justify-between">
        <p className="font-semibold">{label}</p>
        <p className="text-end text-xs text-darkGray">{type}</p>
      </div>
    </div>
  );
};
