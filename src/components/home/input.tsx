import { HTMLInputTypeAttribute } from "react";

type InputProps = {
  label: string;
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
};

export const Input = ({ type, label, id, placeholder }: InputProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-b-[#C5C5C5] py-3">
      <label htmlFor={id} className="text-sm font-medium text-onyx">
        {label}:
      </label>
      <input
        type={type}
        name={label}
        id={id}
        placeholder={placeholder}
        className="w-full border-none text-xs focus:ring-0"
      />
    </div>
  );
};
