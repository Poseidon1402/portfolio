import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = {
  label: string;
  id: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
};

export const Input = ({
  type,
  label,
  id,
  placeholder,
  register,
}: InputProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-b-[#C5C5C5] py-3">
      <label htmlFor={id} className="text-sm font-medium text-onyx">
        {label}:
      </label>
      <input
        {...register}
        type={type}
        name={label}
        id={id}
        placeholder={placeholder}
        className="w-full border-none text-xs focus:ring-0"
      />
    </div>
  );
};
