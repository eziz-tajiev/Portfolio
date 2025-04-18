"use client";
import { Button } from "@/ui/Button";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

type Form = {
  fullName: string;
  contact: string;
  content: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>();

  const {
    mutate,
    isPending,
    error: mutateError,
  } = useMutation({
    mutationFn: handleSubmit(async (data) => {
      const response = (await fetch("api/send-email", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((data) => data.json())) as { success: boolean; message?: string };

      if (response.success) reset();
      else throw new Error("Failed to send email! Please try again.");

      return response;
    }),
  });

  const error = mutateError || errors.fullName || errors.contact;
  return (
    <div className="md:flex md:justify-center lg:pt-12">
      <div className="flex flex-col gap-4 pb-10 md:w-[400px]">
        <input
          type="text"
          placeholder="Full name"
          className="contact-input"
          {...register("fullName", {
            required: "Full name field is required!",
          })}
        />
        <input
          type="text"
          placeholder="How to contact you?"
          className="contact-input"
          {...register("contact", {
            required: "Contact field is required!",
          })}
        />
        <textarea
          placeholder="Description"
          className="contact-input resize-none h-[150px]"
          {...register("content")}
        />

        {error?.message && <p className="text-red-500">{error?.message}</p>}
        <Button
          loadingText={isPending ? "Sending..." : undefined}
          onClick={mutate}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
