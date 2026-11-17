import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = "Please enter a message of at least 10 characters.";
    }
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <PageWrapper>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-14">
          <span className="font-cursive text-2xl text-[#1B7D8C] dark:text-[#B8E3E9]">
            start a conversation
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA] mt-1">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80">
            Reach out directly via email, connect on LinkedIn or GitHub, or send a note using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Contact Links */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-4 p-5 rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 hover:border-[#1B7D8C] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B7D8C] text-[#F7FAFA] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1B7D8C] dark:text-[#B8E3E9]">
                  Email
                </p>
                <p className="font-medium text-sm sm:text-base text-[#0A1D2B] dark:text-[#F7FAFA] truncate group-hover:underline">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 hover:border-[#1B7D8C] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A1D2B] dark:bg-[#B8E3E9] text-[#F7FAFA] dark:text-[#0A1D2B] flex items-center justify-center shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1B7D8C] dark:text-[#B8E3E9]">
                  GitHub
                </p>
                <p className="font-medium text-sm sm:text-base text-[#0A1D2B] dark:text-[#F7FAFA] group-hover:underline">
                  github.com/kanikkka
                </p>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 hover:border-[#1B7D8C] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1B7D8C] text-[#F7FAFA] flex items-center justify-center shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1B7D8C] dark:text-[#B8E3E9]">
                  LinkedIn
                </p>
                <p className="font-medium text-sm sm:text-base text-[#0A1D2B] dark:text-[#F7FAFA] group-hover:underline">
                  Kanika Rajput
                </p>
              </div>
            </a>
          </div>

          {/* Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#0A1D2B]/10 dark:border-[#B8E3E9]/15 bg-[#F7FAFA] dark:bg-[#1B7D8C]/10 p-7 sm:p-9">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#1B7D8C]/15 text-[#1B7D8C] dark:text-[#B8E3E9] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#0A1D2B] dark:text-[#F7FAFA]">
                    Message Prepared
                  </h2>
                  <p className="text-sm sm:text-base text-[#0A1D2B]/80 dark:text-[#F7FAFA]/80 max-w-md mx-auto">
                    Thank you, {formData.name}. You can also send this directly to{" "}
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        `Portfolio Inquiry from ${formData.name}`
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="font-semibold text-[#1B7D8C] dark:text-[#B8E3E9] underline"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-2 px-5 py-2.5 rounded-xl border border-[#1B7D8C] text-sm font-semibold text-[#1B7D8C] dark:text-[#B8E3E9]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#0A1D2B] dark:text-[#F7FAFA] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-[#0A1D2B]/20 dark:border-[#B8E3E9]/25 bg-[#F7FAFA] dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#F7FAFA] focus:outline-none focus:border-[#1B7D8C]"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs font-medium text-[#1B7D8C] dark:text-[#B8E3E9]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-[#0A1D2B] dark:text-[#F7FAFA] mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#0A1D2B]/20 dark:border-[#B8E3E9]/25 bg-[#F7FAFA] dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#F7FAFA] focus:outline-none focus:border-[#1B7D8C]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs font-medium text-[#1B7D8C] dark:text-[#B8E3E9]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-[#0A1D2B] dark:text-[#F7FAFA] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-[#0A1D2B]/20 dark:border-[#B8E3E9]/25 bg-[#F7FAFA] dark:bg-[#0A1D2B] text-[#0A1D2B] dark:text-[#F7FAFA] focus:outline-none focus:border-[#1B7D8C]"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs font-medium text-[#1B7D8C] dark:text-[#B8E3E9]">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1B7D8C] text-[#F7FAFA] font-semibold text-sm hover:bg-[#0A1D2B] dark:hover:bg-[#B8E3E9] dark:hover:text-[#0A1D2B] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
