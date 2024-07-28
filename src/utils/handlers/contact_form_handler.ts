import { FormFields } from "@/contents";
import { UseFormReset } from "react-hook-form";
import { toast } from "react-toastify";

export const sendData = async (
  data: FormFields,
  reset: UseFormReset<FormFields>,
) => {
  try {
    const response = await fetch("https://formspree.io/f/mkgwjqrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error("An error occurred while sending your message.");
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Your message has been sent successfully!");
    reset();
  } catch (error) {
    toast.error(
      "An error occurred while sending your message. Please try again later.",
    );
  }
};
