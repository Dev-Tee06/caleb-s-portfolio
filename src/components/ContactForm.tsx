"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
    };

    try {
      // Simulate API call for now (can be replaced with Next.js Server Action or API Route)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (!data.name || !data.email || !data.message) {
        throw new Error("Please fill out all required fields.");
      }

      setStatus("success");
      e.currentTarget.reset();
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto text-left space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Full Name *</label>
          <input required type="text" id="name" name="name" className="w-full bg-black border-2 border-gray-700 rounded-none px-5 py-4 text-white focus:outline-none focus:border-white transition-colors" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Email Address *</label>
          <input required type="email" id="email" name="email" className="w-full bg-black border-2 border-gray-700 rounded-none px-5 py-4 text-white focus:outline-none focus:border-white transition-colors" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="projectType" className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Project Type</label>
          <select id="projectType" name="projectType" className="w-full bg-black border-2 border-gray-700 rounded-none px-5 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
            <option value="">Select an option</option>
            <option value="marketing">Marketing Strategy</option>
            <option value="web">Web Development</option>
            <option value="branding">Brand Positioning</option>
            <option value="video">Video Editing</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Budget Range (Optional)</label>
          <input type="text" id="budget" name="budget" placeholder="e.g. $5k - $10k" className="w-full bg-black border-2 border-gray-700 rounded-none px-5 py-4 text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-600" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Message *</label>
        <textarea required id="message" name="message" rows={5} className="w-full bg-black border-2 border-gray-700 rounded-none px-5 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
      </div>

      {status === "error" && (
        <div className="p-5 bg-black border-2 border-red-500 text-red-500 font-bold tracking-wide">
          {errorMessage}
        </div>
      )}

      {status === "success" && (
        <div className="p-5 bg-white text-black font-bold tracking-wide">
          MESSAGE SENT SUCCESSFULLY. I&apos;LL GET BACK TO YOU SOON.
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === "loading" || status === "success"}
        className="w-full bg-white text-black text-lg font-bold tracking-widest uppercase py-5 px-10 rounded-none hover:bg-gray-200 transition-colors border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "SENDING..." : status === "success" ? "SENT" : "SEND MESSAGE"}
      </button>
    </form>
  );
}
