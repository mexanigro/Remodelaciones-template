import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
        className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-0">
            <h3 className="text-xl font-bold text-[#1A1A1A]">
              Pedí tu consulta gratuita
            </h3>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
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
              <p className="text-lg font-semibold text-[#1A1A1A]">
                ¡Consulta enviada!
              </p>
              <p className="text-[#6B7280] mt-2">
                Te respondemos en menos de 24 horas.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20 outline-none transition-all text-sm"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="+54 11 1234-5678"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20 outline-none transition-all text-sm"
                />
              </div>

              {/* Tipo de negocio */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Tipo de negocio
                </label>
                <select
                  name="tipo"
                  required
                  value={form.tipo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20 outline-none transition-all text-sm bg-white"
                >
                  <option value="">Seleccionar...</option>
                  <option value="bar">Bar</option>
                  <option value="cafeteria">Cafetería</option>
                  <option value="restaurante">Restaurante</option>
                  <option value="retail">Retail</option>
                  <option value="oficina">Oficina</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Remodelación o apertura */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  ¿Es remodelación o apertura?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="servicio"
                      value="remodelacion"
                      checked={form.servicio === "remodelacion"}
                      onChange={handleChange}
                      className="accent-[#E07A5F]"
                    />
                    <span className="text-sm">Remodelación</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="servicio"
                      value="apertura"
                      checked={form.servicio === "apertura"}
                      onChange={handleChange}
                      className="accent-[#E07A5F]"
                    />
                    <span className="text-sm">Apertura</span>
                  </label>
                </div>
              </div>

              {/* Zona */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Zona / Barrio
                </label>
                <input
                  type="text"
                  name="zona"
                  required
                  value={form.zona}
                  onChange={handleChange}
                  placeholder="Ej: Palermo, Buenos Aires"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/20 outline-none transition-all text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#E07A5F] text-white py-3.5 rounded-lg font-medium hover:bg-[#c96a50] transition-colors mt-2"
              >
                Enviar consulta
              </button>

              <p className="text-center text-xs text-[#6B7280] mt-3">
                Te respondemos en menos de 24 horas
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
