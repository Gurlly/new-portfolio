"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// Form types
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ClassificationResult = {
  success: boolean;
  message: string;
  classification?: string;
  confidence?: number;
  error?: string;
};

const ContactForm = () => {
  // Form default values
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const jsonDataString = JSON.stringify(data);

      const res = await fetch(
        `https://portfolio-backend-bl2o.onrender.com/api/v1/classify-message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonDataString,
        }
      );

      const result: ClassificationResult = await res.json();

      if (result.success) {
        alert("Thank you for sending me a message! Will reply as soon as possible!");
        form.reset();
      } else {
        if (result.error && result.error.includes("spam")) {
          alert("Your message was classified as spam and was not sent.");
        } else {
          alert(`Error: ${result.message || "Unknown error occurred"}`);
        }
      }
    } catch (err) {
      console.error("Submission Error:", err);
      alert("An error occured while submitting the form.");
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-9/12 mx-auto space-y-7 lg:space-y-10 bg-black-two/90 shadow shadow-dirty-white/60 p-5 lg:p-7 rounded-lg"
        >
          <div className="w-full">
            <h1 className="text-center text-3xl lg:text-4xl font-black-han bg-clip-text text-transparent bg-gradient-to-r from-dirty-white to-beige">
              Contact Form
            </h1>
            <p className="max-w-2xl mx-auto mt-1.5 lg:mt-3.5 text-sm lg:text-base text-center text-dirty-white">
              This form is powered by AI and is intended only for job offers or
              inquiries related to my areas of specialization. Messages outside
              these topics will be declined and will not be processed.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 font-poppins gap-5 items-start">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              rules={{
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z][A-Za-z\s'-]{0,48}[A-Za-z]$/,
                  message: "Invalid name format",
                },
              }}
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormLabel className="font-medium text-dirty-white lg:text-base">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="bg-dirty-white text-black-two lg:py-5 lg:text-base"
                      maxLength={50}
                      minLength={2}
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-neutral-200 italic">
                    This will appear in the email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
              }}
              render={({ field }) => (
                <FormItem className="md:col-span-1">
                  <FormLabel className="font-medium text-dirty-white lg:text-base">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="bg-dirty-white text-black-two lg:py-5 lg:text-base"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Subject */}
            <FormField
              control={form.control}
              name="subject"
              rules={{
                required: "Subject is required",
                pattern: {
                  value: /^[A-Za-z][A-Za-z\s'-]{0,30}[A-Za-z]$/,
                  message: "Invalid subject format",
                },
              }}
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-medium text-dirty-white lg:text-base">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Data Science Job Offer"
                      className="bg-dirty-white text-black-two lg:py-5 lg:text-base"
                      maxLength={30}
                      minLength={2}
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              rules={{
                required: "Message is required",
                maxLength: {
                  value: 1000,
                  message: `Messaeg cannot exceed 500 characters`,
                },
              }}
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-medium text-dirty-white lg:text-base">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      className="bg-dirty-white text-black-two h-60 lg:text-base"
                      maxLength={1000}
                      minLength={50}
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-neutral-200 italic">
                    AI powered
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-5 text-base py-3 bg-black/75 rounded-lg hover:bg-black/50 transition-[background] ease-linear duration-150 text-dirty-white"
          >
            Send
          </button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm;
