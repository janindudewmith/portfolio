import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  Check,
} from "lucide-react";

// Replace with your actual Formspree form ID
const FORM_ID = "mwpblpay";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm(FORM_ID);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "janindudewmith@gmail.com",
      href: "mailto:janindudewmith@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 70 244 6778",
      href: "tel:+94702446778",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "169/A, Godakanda, Galle. 80000",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/janindudewmith",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/janindudewmith",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/janindudewmith",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations and
            exciting engineering projects. Let's connect and create something
            amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Let's Connect
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {info.label}
                    </p>
                    <p className="text-white text-sm sm:text-base font-medium">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Follow Me
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-slate-700`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-slate-700/50"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-lg flex flex-col items-center gap-4 bg-green-500/10 text-green-300 border border-green-500/30"
              >
                <Check
                  size={32}
                  className="sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-400"
                />
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Thank You!
                </h3>
                <p className="text-center text-gray-300 text-sm sm:text-base">
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm sm:text-base font-medium mb-1 sm:mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="Your name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm sm:text-base font-medium mb-1 sm:mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 text-sm sm:text-base font-medium mb-1 sm:mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm sm:text-base font-medium mb-1 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1"
                  />
                </div>

                {/* Show errors if any */}
                <ValidationError
                  errors={state.errors}
                  className="text-red-400 text-sm p-3 bg-red-500/20 rounded-lg border border-red-500/30"
                />

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-2.5 sm:py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    state.submitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {state.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm sm:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
