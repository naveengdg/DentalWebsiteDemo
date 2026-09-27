import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, X, Clock, User, Phone, MessageSquare } from 'lucide-react';
import { treatmentOptions } from '../data/siteData';
import { useInView } from '../utils/hooks';

export default function AppointmentForm() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.treatment) newErrors.treatment = 'Please select a treatment';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setShowSuccess(true);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const closeModal = () => {
    setShowSuccess(false);
    setFormData({ name: '', phone: '', date: '', time: '', treatment: '', message: '' });
  };

  return (
    <>
      <section id="appointment" className="section-padding bg-white">
        <div ref={ref} className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
            {/* Left Column — Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32"
            >
              <span className="inline-block text-sm font-medium text-primary tracking-wide uppercase mb-3">
                Appointment
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-bold text-text-primary mb-5 leading-tight">
                Ready to take the next step?
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Tell us what you need and our team can help you plan your visit.
              </p>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border-light">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Quick Response</div>
                    <div className="text-xs text-text-tertiary">We typically respond within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border-light">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">No Commitment</div>
                    <div className="text-xs text-text-tertiary">First consultation to understand your needs</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-border shadow-elevated" noValidate>
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="apt-name" className="block text-sm font-semibold text-text-primary mb-2">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
                      <input
                        id="apt-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                        className={`w-full h-13 pl-12 pr-4 bg-surface rounded-xl border text-base sm:text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white ${
                          errors.name ? 'border-error' : 'border-border'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-error mt-1.5 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="apt-phone" className="block text-sm font-semibold text-text-primary mb-2">
                      Phone Number <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary pointer-events-none" />
                      <input
                        id="apt-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="Your phone number"
                        className={`w-full h-13 pl-12 pr-4 bg-surface rounded-xl border text-base sm:text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white ${
                          errors.phone ? 'border-error' : 'border-border'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-error mt-1.5 font-medium">{errors.phone}</p>}
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="apt-date" className="block text-sm font-semibold text-text-primary mb-2">
                        Preferred Date
                      </label>
                      <input
                        id="apt-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                        className="w-full h-13 px-4 bg-surface rounded-xl border border-border text-base sm:text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="apt-time" className="block text-sm font-semibold text-text-primary mb-2">
                        Preferred Time
                      </label>
                      <input
                        id="apt-time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleChange('time', e.target.value)}
                        className="w-full h-13 px-4 bg-surface rounded-xl border border-border text-base sm:text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Treatment */}
                  <div>
                    <label htmlFor="apt-treatment" className="block text-sm font-semibold text-text-primary mb-2">
                      Treatment <span className="text-error">*</span>
                    </label>
                    <select
                      id="apt-treatment"
                      value={formData.treatment}
                      onChange={(e) => handleChange('treatment', e.target.value)}
                      className={`w-full h-13 px-4 bg-surface rounded-xl border text-base sm:text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white appearance-none ${
                        errors.treatment ? 'border-error' : 'border-border'
                      } ${!formData.treatment ? 'text-text-tertiary' : 'text-text-primary'}`}
                    >
                      <option value="">Select a treatment</option>
                      {treatmentOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.treatment && <p className="text-xs text-error mt-1.5 font-medium">{errors.treatment}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="apt-message" className="block text-sm font-semibold text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="apt-message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your dental concerns or goals..."
                      rows={3}
                      className="w-full p-4 bg-surface rounded-xl border border-border text-base sm:text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full h-14 flex items-center justify-center gap-2.5 px-6 bg-primary text-white font-bold rounded-xl hover:bg-primary-light transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-primary/35 active:scale-[0.98] text-base"
                  >
                    <span>Request an Appointment</span>
                    <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="text-xs text-text-tertiary text-center pt-1">
                    This is a demo form. No data is sent or stored.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-5"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={closeModal} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white rounded-2xl p-8 md:p-10 max-w-md w-full shadow-2xl"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-surface-warm transition-colors"
                aria-label="Close"
              >
                <X size={18} className="text-text-tertiary" />
              </button>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-50 flex items-center justify-center"
                >
                  <CheckCircle size={32} className="text-primary" />
                </motion.div>

                <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                  Demo Appointment Request
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Your request has been received in this demonstration. In a production website, this form can be connected to WhatsApp, email, a booking platform or a custom backend.
                </p>
                <button
                  onClick={closeModal}
                  className="px-8 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-light transition-colors duration-300"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
