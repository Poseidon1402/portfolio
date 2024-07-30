"use client";

import { AnimatedSpinner } from "@/assets/icons/animated_spinner";
import { sendData } from "@/utils/handlers/contact_form_handler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export type FormFields = z.infer<typeof schema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormFields) => {
    await sendData(data, reset);
  };

  return (
    <div>
      <form
        className="flex flex-col gap-2 py-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-2 border-b border-b-[#C5C5C5] py-3 dark:border-b-white/10">
          <label
            htmlFor="name"
            className="text-sm font-medium text-onyx dark:text-white"
          >
            Name:
          </label>
          <input
            {...register("name")}
            placeholder="Enter your name"
            className="w-full border-none bg-transparent text-xs focus:ring-0"
          />
        </div>
        {errors.name && (
          <div className="text-xs text-red">{errors.name.message}</div>
        )}
        <div className="flex items-center gap-2 border-b border-b-[#C5C5C5] py-3 dark:border-b-white/10">
          <label
            htmlFor="email"
            className="text-sm font-medium text-onyx dark:text-white"
          >
            Email:
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full border-none bg-transparent text-xs text-white focus:ring-0"
          />
        </div>
        {errors.email && (
          <div className="text-xs text-red">{errors.email.message}</div>
        )}
        <div className="flex items-center gap-2 border-b border-b-[#C5C5C5] py-3 dark:border-b-white/10">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-onyx dark:text-white"
          >
            Subject:
          </label>
          <input
            {...register("subject")}
            id="subject"
            type="text"
            placeholder="Enter subject"
            className="w-full border-none bg-transparent text-xs text-white focus:ring-0"
          />
        </div>
        {errors.subject && (
          <div className="text-xs text-red">{errors.subject.message}</div>
        )}
        <textarea
          {...register("message")}
          name="message"
          id="message"
          placeholder="Write your message here"
          rows={15}
          className="my-5 w-full resize-none rounded-2xl border-none bg-faintWhite p-4 text-sm text-darkGray focus:ring-0 dark:bg-black"
        ></textarea>
        {errors.message && (
          <div className="text-xs text-red">{errors.message.message}</div>
        )}
        <div
          className={`flex ${isSubmitting ? "justify-center desktop:justify-end" : "justify-end"}`}
        >
          {isSubmitting ? (
            <AnimatedSpinner />
          ) : (
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-b from-[#1A1A1A] to-[#131313] p-4 text-white desktop:w-40 desktop:self-end"
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
