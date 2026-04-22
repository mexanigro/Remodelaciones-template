import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { localeConfig } from "../config/locale";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    tipo: "",
    servicio: "",
    zona: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ nombre: "", whatsapp: "", tipo: "", servicio: "", zona: "" });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/55 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-white/70 bg-white/95 shadow-[0_50px_120px_-65px_rgba(15,23,42,0.75)] backdrop-blur"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-0">
            <h3 className="text-xl font-bold text-slate-900">
              {localeConfig.contactModal.title}
            </h3>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {submitted ? (
            <motion.div
              className="p-8 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-lg font-semibold text-slate-900">
                {localeConfig.contactModal.successTitle}
              </p>
              <p className="mt-2 text-slate-600">
                {localeConfig.contactModal.successSubtitle}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-4 text-right">
              {/* Nombre */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900">
                  {localeConfig.contactModal.labels.fullName}
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder={localeConfig.contactModal.placeholders.fullName}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900">
                  {localeConfig.contactModal.labels.whatsapp}
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder={localeConfig.contactModal.placeholders.whatsapp}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25"
                />
              </div>

              {/* Tipo de negocio */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900">
                  {localeConfig.contactModal.labels.businessType}
                </label>
                <select
                  name="tipo"
                  required
                  value={form.tipo}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25"
                >
                  {localeConfig.contactModal.businessTypeOptions.map((option) => (
                    <option key={option.value || "default"} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Remodelación o apertura */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-900">
                  {localeConfig.contactModal.serviceQuestion}
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="servicio"
                      value="remodelacion"
                      checked={form.servicio === "remodelacion"}
                      onChange={handleChange}
                      className="accent-orange-500"
                    />
                    <span className="text-sm">
                      {localeConfig.contactModal.serviceOptions.remodelacion}
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="servicio"
                      value="apertura"
                      checked={form.servicio === "apertura"}
                      onChange={handleChange}
                      className="accent-orange-500"
                    />
                    <span className="text-sm">
                      {localeConfig.contactModal.serviceOptions.apertura}
                    </span>
                  </label>
                </div>
              </div>

              {/* Zona */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-900">
                  {localeConfig.contactModal.labels.area}
                </label>
                <input
                  type="text"
                  name="zona"
                  required
                  value={form.zona}
                  onChange={handleChange}
                  placeholder={localeConfig.contactModal.placeholders.area}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/25"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_22px_65px_-35px_rgba(249,115,22,0.65)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_26px_75px_-38px_rgba(249,115,22,0.72)] active:translate-y-0"
              >
                {localeConfig.contactModal.submit}
              </button>

              <p className="mt-3 text-center text-xs text-slate-600">
                {localeConfig.contactModal.note}
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
