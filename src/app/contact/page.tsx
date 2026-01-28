"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import MagneticButton from "@/components/MagneticButton";
import CustomCursor from "@/components/CustomCursor";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, CheckCircle, Loader2, Clock, Zap, Shield, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "demo",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Hero Section - Elevated */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-arc-primary via-arc-primary to-arc-primary/95">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Subtle animated gradient orbs */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(193,113,75,0.8) 0%, transparent 70%)",
              left: "-10%",
              top: "10%",
            }}
            animate={{
              y: [0, 40, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(91,137,213,0.5) 0%, transparent 70%)",
              right: "-5%",
              bottom: "10%",
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                               linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.p
              className="text-arc-accent font-semibold mb-6 tracking-widest uppercase text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let&apos;s Connect
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Let's Build
              <br />
              <span className="text-arc-accent">Something Exceptional.</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We respond to every inquiry within one business day. Let's discuss how Arc can transform your project management.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-arc-charcoal/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <TrustIndicator
              icon={Clock}
              label="Quick Response"
              description="Replies within 24 hours"
              index={0}
            />
            <TrustIndicator
              icon={Zap}
              label="Expert Support"
              description="Construction-focused guidance"
              index={1}
            />
            <TrustIndicator
              icon={Shield}
              label="No Obligations"
              description="Explore at your own pace"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Info & Details */}
            <AnimatedSection>
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Get in touch with our team.
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Whether you&apos;re exploring the platform, have specific questions about features, or need pricing details, our construction-focused team is here to help.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <ContactMethod
                    icon={Mail}
                    label="Email"
                    value="hello@arc.build"
                    href="mailto:hello@arc.build"
                  />
                  <ContactMethod
                    icon={Phone}
                    label="Phone"
                    value="(239) 555-1234"
                    href="tel:+12395551234"
                  />
                  <ContactMethod
                    icon={MapPin}
                    label="Location"
                    value="Naples, Florida"
                    description="Serving Southwest Florida"
                  />
                </div>

                {/* Response Time Note */}
                <motion.div
                  className="mt-12 p-4 bg-arc-accent/5 border border-arc-accent/20 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-sm text-arc-accent font-medium">
                    ✓ All inquiries answered within one business day
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right: Contact Form */}
            <AnimatedSection direction="right" delay={0.2}>
              {isSubmitted ? (
                <SuccessMessage />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-arc-charcoal/[0.02] rounded-2xl p-12 md:p-16 shadow-lg"
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <FloatingLabelField
                        label="Name"
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        isFocused={focusedField === "name"}
                        required
                      />
                      <FloatingLabelField
                        label="Email"
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        isFocused={focusedField === "email"}
                        required
                      />
                    </div>

                    {/* Company & Phone Row */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <FloatingLabelField
                        label="Company"
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        isFocused={focusedField === "company"}
                      />
                      <FloatingLabelField
                        label="Phone"
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        isFocused={focusedField === "phone"}
                      />
                    </div>

                    {/* Interest Select */}
                    <FloatingLabelSelect
                      label="I'm interested in"
                      value={formState.interest}
                      onValueChange={(value) =>
                        setFormState((prev) => ({ ...prev, interest: value }))
                      }
                      onFocus={() => setFocusedField("interest")}
                      onBlur={() => setFocusedField(null)}
                      isFocused={focusedField === "interest"}
                    >
                      <SelectItem value="demo">Scheduling a demo</SelectItem>
                      <SelectItem value="pricing">Pricing information</SelectItem>
                      <SelectItem value="features">Feature questions</SelectItem>
                      <SelectItem value="other">Other inquiry</SelectItem>
                    </FloatingLabelSelect>

                    {/* Message Textarea */}
                    <FloatingLabelTextarea
                      label="Message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      isFocused={focusedField === "message"}
                      required
                    />

                    {/* Submit Button */}
                    <motion.div
                      className="pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 }}
                    >
                      <MagneticSubmitButton
                        type="submit"
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </MagneticSubmitButton>
                    </motion.div>
                  </form>
                </motion.div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-arc-primary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(193,113,75,0.4) 0%, transparent 70%)",
              right: "10%",
              top: "20%",
            }}
            animate={{
              y: [0, 50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to explore Arc?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              From initial questions to scheduled demonstrations, we're here to help you understand how Arc transforms residential construction project management.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MagneticButton
                href="/product"
                variant="outline"
                size="lg"
                magneticStrength={0.25}
              >
                Explore Platform
              </MagneticButton>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

/* Helper Components */

function TrustIndicator({
  icon: Icon,
  label,
  description,
  index,
}: {
  icon: React.ElementType;
  label: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-arc-accent/10 rounded-full mb-4">
        <Icon className="w-6 h-6 text-arc-accent" />
      </div>
      <h3 className="font-semibold text-foreground mb-1">{label}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}

function ContactMethod({
  icon: Icon,
  label,
  value,
  href,
  description,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex items-start gap-4 group cursor-pointer"
    >
      <div className="w-12 h-12 bg-arc-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-arc-accent/10 transition-colors duration-300">
        <Icon className="w-5 h-5 text-arc-primary group-hover:text-arc-accent transition-colors duration-300" />
      </div>
      <div>
        <p className="text-xs font-semibold text-arc-charcoal/60 uppercase tracking-wider mb-1">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-lg font-semibold text-foreground hover:text-arc-accent transition-colors duration-300"
          >
            {value}
          </a>
        ) : (
          <p className="text-lg font-semibold text-foreground">{value}</p>
        )}
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

/* Floating Label Components */

interface FloatingLabelFieldProps {
  label: string;
  type?: "text" | "email" | "tel";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  required?: boolean;
  placeholder?: string;
}

function FloatingLabelField({
  label,
  type = "text",
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  required = false,
  placeholder = "",
}: FloatingLabelFieldProps) {
  const hasValue = value.length > 0;
  const isFloated = isFocused || hasValue;

  return (
    <div className="relative">
      <motion.label
        animate={{
          y: isFloated ? -28 : 0,
          scale: isFloated ? 0.7 : 1,
          color: isFocused ? "#C1714B" : "#6B7280",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="absolute left-4 top-4 origin-left pointer-events-none font-medium text-base"
      >
        {label}
        {required && <span className="text-arc-accent ml-1">*</span>}
      </motion.label>

      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={isFocused ? placeholder : ""}
        className="h-14 pt-6 pb-3 px-4 bg-white border-1 border-gray-200 focus:border-gray-300 focus:border-b-2 focus:border-b-arc-accent rounded-lg transition-all duration-300 hover:bg-gray-50/50"
      />

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-arc-accent rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ originX: 0.5 }}
      />
    </div>
  );
}

interface FloatingLabelTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  required?: boolean;
  placeholder?: string;
}

function FloatingLabelTextarea({
  label,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  required = false,
  placeholder = "",
}: FloatingLabelTextareaProps) {
  const hasValue = value.length > 0;
  const isFloated = isFocused || hasValue;

  return (
    <div className="relative">
      <motion.label
        animate={{
          y: isFloated ? -28 : 0,
          scale: isFloated ? 0.7 : 1,
          color: isFocused ? "#C1714B" : "#6B7280",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="absolute left-4 top-4 origin-left pointer-events-none font-medium text-base z-10"
      >
        {label}
        {required && <span className="text-arc-accent ml-1">*</span>}
      </motion.label>

      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={isFocused ? placeholder : ""}
        className="min-h-32 pt-8 pb-4 px-4 bg-white border-1 border-gray-200 focus:border-gray-300 focus:border-b-2 focus:border-b-arc-accent rounded-lg transition-all duration-300 hover:bg-gray-50/50 resize-none"
      />

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-arc-accent rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ originX: 0.5 }}
      />
    </div>
  );
}

interface FloatingLabelSelectProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  children: React.ReactNode;
}

function FloatingLabelSelect({
  label,
  value,
  onValueChange,
  onFocus,
  onBlur,
  isFocused,
  children,
}: FloatingLabelSelectProps) {
  const hasValue = value && value.length > 0;
  const isFloated = isFocused || hasValue;

  return (
    <div className="relative">
      <motion.label
        animate={{
          y: isFloated ? -28 : 0,
          scale: isFloated ? 0.7 : 1,
          color: isFocused ? "#C1714B" : "#6B7280",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="absolute left-4 top-4 origin-left pointer-events-none font-medium text-base z-10"
      >
        {label}
      </motion.label>

      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          className="h-14 pt-6 pb-3 px-4 bg-white border-1 border-gray-200 focus:border-gray-300 focus:border-b-2 focus:border-b-arc-accent rounded-lg transition-all duration-300 hover:bg-gray-50/50"
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-arc-accent rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ originX: 0.5 }}
      />
    </div>
  );
}

/* Magnetic Submit Button */
interface MagneticSubmitButtonProps {
  type: "submit" | "button";
  disabled: boolean;
  isLoading: boolean;
  children: React.ReactNode;
}

function MagneticSubmitButton({
  type,
  disabled,
  isLoading,
  children,
}: MagneticSubmitButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * 0.3,
      y: distanceY * 0.3,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <button
        ref={buttonRef}
        type={type}
        disabled={disabled}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-14 px-8 bg-gradient-to-r from-arc-accent to-arc-accent/90 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-arc-accent/40 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {/* Animated background shine */}
        <span className="absolute inset-0 overflow-hidden">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </span>

        {/* Content */}
        <span className="relative flex items-center justify-center gap-2">
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          {children}
          {!isLoading && (
            <motion.span
              className="inline-flex"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          )}
        </span>
      </button>
    </motion.div>
  );
}

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="text-center py-20"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        className="w-16 h-16 rounded-full bg-arc-accent/10 flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle className="w-8 h-8 text-arc-accent" />
      </motion.div>
      <h3 className="text-2xl font-bold text-foreground mb-3">
        Message Sent Successfully!
      </h3>
      <p className="text-muted-foreground mb-2">
        Thank you for your inquiry. We&apos;ll review your message and get back to you within one business day.
      </p>
      <p className="text-sm text-muted-foreground/70">
        In the meantime, feel free to explore our platform or schedule a demo.
      </p>
    </motion.div>
  );
}
