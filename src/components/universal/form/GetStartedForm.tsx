"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import getStartedIcon from "@/assets/icons/get-sterted-icon.svg";

const schema = z.object({
  email: z.string().min(1, "Вкажи email").email("Некоректний email"),
  message: z.string().min(5, "Щонайменше 5 символів").max(1000, "До 1000 символів"),
});

type FormValues = z.infer<typeof schema>;

export default function GetStartedForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { email: "", message: "" },
  });
  const onSubmit = async (data: FormValues) => {
    // Simulate a network request
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(data);
        resolve(data);
      }, 2000);
    });
  }


  return (
    <section className="w-[612px] bg-[#222938] text-white flex flex-col items-center justify-center px-[86px] 
    pt-[40px] pb-[66px] rounded-[20px] shadow-[0_4px_9px_0_rgba(0,0,0,0.05)]">
      <div className="w-full max-w-[440px]">
        <div className="mx-auto items-center justify-center flex">
          <Image 
            src={getStartedIcon} 
            alt="Get Started"  
            width={168} 
            height={132}/>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" mt-[10px] gap-5 flex flex-col">
          <div className="flex flex-col gap-5">
            <label htmlFor="email" className="text-lg">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              aria-invalid={!!errors.email}
              className={`h-[50px] w-full rounded-xl bg-white px-5 text-text-secondary-grey font-medium
                 placeholder:text-text-secondary-grey shadow-sm outline-none ring-1 ring-white/15 focus:ring-2 ${
                    errors.email ? "ring-rose-400 focus:ring-rose-400" : "focus:ring-emerald-400"
              }`}
            />
            {errors.email && <p className="text-sm text-rose-400">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-5">
            <label htmlFor="message" className="text-lg">Message</label>

            <textarea
              id="message"
              rows={2}
              placeholder="What are you say ?"
              {...register("message")}
              aria-invalid={!!errors.message}
              className={`w-full rounded-xl bg-white px-5 py-5 text-text-secondary-grey placeholder:text-text-secondary-grey shadow-sm outline-none ring-1 ring-white/15 focus:ring-2 ${
                errors.message ? "ring-rose-400 focus:ring-rose-400" : "focus:ring-emerald-400"
              }`}
            />
            {errors.message && <p className="text-sm text-rose-400">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-14 w-full rounded-xl bg-emerald-500 text-lg font-semibold text-white shadow hover:bg-emerald-600 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
          >
            {isSubmitting ? "Sending..." : "Request Demo"}
          </button>

          <p className="text-right text-bg">
            or{" "}
            <a href="#" className="font-medium text-white  hover:underline">
              Start Free Trial
            </a>
          </p>

          {isSubmitSuccessful && (
            <div className="rounded-lg border border-emerald-400/40 bg-emerald-500/10 px-4 py-3 text-bg-button">
              Дякую! Ми зв’яжемося з Вами найближчим часом.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}