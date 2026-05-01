"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";

// Components
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

// Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiSend } from "react-icons/fi"; // Added a send icon for the default state

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

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const jsonDataString = JSON.stringify(data);

      const res = await fetch(
        `https://gurlly-job-offer-classifier.hf.space/api/v1/classify-message`,
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
        alert(
          "Thank you for sending me a message! Will reply as soon as possible!"
        );
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
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full md:w-10/12 lg:w-9/12 mx-auto"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 lg:space-y-10 bg-black-two/60 backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/50 p-6 sm:p-8 lg:p-12 rounded-2xl"
        >
          <div className="w-full flex flex-col items-center">
            <h1 className="text-center text-3xl lg:text-5xl font-black-han bg-clip-text text-transparent bg-gradient-to-r from-dirty-white via-gray-300 to-beige tracking-wide">
              Contact Form <span className="text-xl lg:text-2xl text-green-gray/80 align-top">[Beta]</span>
            </h1>
            <p className="max-w-xl mx-auto mt-3 lg:mt-5 text-sm lg:text-base text-center text-gray-400 leading-relaxed">
              This form is powered by AI and is intended only for job offers or
              inquiries related to my areas of specialization. Messages outside
              these topics will be classified and declined.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 font-poppins gap-6 lg:gap-8 items-start">
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
                  <FormLabel className="font-medium text-dirty-white lg:text-base ml-1">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Your name"
                      className="bg-white/90 focus:bg-white text-black-two lg:py-6 lg:text-base rounded-xl border-2 border-transparent focus:border-green-gray/50 transition-all shadow-inner"
                      maxLength={50}
                      minLength={2}
                      required
                      readOnly={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500 italic ml-1">
                    This will appear in the email.
                  </FormDescription>
                  <FormMessage className="ml-1" />
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
                  <FormLabel className="font-medium text-dirty-white lg:text-base ml-1">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="bg-white/90 focus:bg-white text-black-two lg:py-6 lg:text-base rounded-xl border-2 border-transparent focus:border-green-gray/50 transition-all shadow-inner"
                      required
                      readOnly={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="ml-1" />
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
                  <FormLabel className="font-medium text-dirty-white lg:text-base ml-1">
                    Subject
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Data Science Job Offer"
                      className="bg-white/90 focus:bg-white text-black-two lg:py-6 lg:text-base rounded-xl border-2 border-transparent focus:border-green-gray/50 transition-all shadow-inner"
                      maxLength={30}
                      minLength={2}
                      required
                      readOnly={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="ml-1" />
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
                  message: "Message cannot exceed 1000 characters",
                },
              }}
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="font-medium text-dirty-white lg:text-base ml-1 flex justify-between">
                    Message
                    <span className="text-xs text-gray-500 font-normal mt-1">
                      {field.value.length} / 1000
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      className="bg-white/90 focus:bg-white text-black-two h-48 lg:h-60 lg:text-base rounded-xl border-2 border-transparent focus:border-green-gray/50 transition-all shadow-inner resize-none p-4"
                      maxLength={1000}
                      minLength={50}
                      required
                      readOnly={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500 italic ml-1">
                    Analyzed by custom ML Classifier.
                  </FormDescription>
                  <FormMessage className="ml-1" />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full pt-4">
            <button
              type="submit"
              className={`group w-full text-base py-3.5 lg:py-4 rounded-xl transition-all ease-in-out duration-300 text-white font-medium flex items-center gap-x-3 justify-center shadow-lg border border-white/10 ${
                loading
                  ? "bg-black-two cursor-not-allowed opacity-80"
                  : "bg-gradient-to-r from-black-two via-green-gray/80 to-green-gray hover:scale-[1.02] hover:border-white/30"
              }`}
              disabled={loading}
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters
                    size={22}
                    className="animate-spin text-dirty-white"
                  />
                  Processing Analysis...
                </>
              ) : (
                <>
                  <FiSend
                    size={20}
                    className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform text-dirty-white"
                  />
                  Send Message
                </>
              )}
            </button>
            {loading && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-sm lg:text-base text-gray-400 italic text-center"
              >
                Running through NLP pipeline. Please wait...
              </motion.p>
            )}
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;