"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder?: string;
  id: string;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  type?: string;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  required,
  register,
  errors,
  id,
  placeholder,
  type,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        className="text-black text-base font-normal py-2 px-4 bg-neutral-100 focus:outline-none rounded-full w-full"
      />
    </div>
  );
};
