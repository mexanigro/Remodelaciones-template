import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { siteConfig } from "../config/site";
import { localeConfig } from "../config/locale";

export default function Portfolio() {
  const { projects, filters } = siteConfig;
  const isRtl = localeConfig.dir === "rtl";
  const [activeFilter, setActiveFilter] = useState("todos");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const filtered =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter || p.typeKey === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImage(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImage((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImage((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">
            {localeConfig.portfolio.title}
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="scrollbar-hide mb-10 flex max-w-full gap-2 overflow-x-auto overflow-y-hidden pb-4 [-webkit-overflow-scrolling:touch] overscroll-x-contain touch-pan-x"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === f.key
                  ? "bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 text-white shadow-[0_14px_40px_-28px_rgba(249,115,22,0.75)]"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/90"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
                onClick={() => openModal(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <span
                    className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      project.typeKey === "aperturas"
                        ? "bg-gradient-to-l from-orange-500 to-orange-600 text-white"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    {project.type}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/45 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-white text-sm font-medium">
                      {localeConfig.portfolio.viewProject}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 mt-2 text-xs text-slate-600">
                    <span>{project.days}</span>
                    <span>·</span>
                    <span>{project.size}</span>
                    <span>·</span>
                    <span>{project.mode}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/70 bg-white/95 shadow-[0_45px_120px_-65px_rgba(15,23,42,0.75)] backdrop-blur"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Carrusel */}
              <div className="relative aspect-[16/10] bg-gray-100">
                <img
                  src={selectedProject.images[currentImage]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-800 shadow-[0_18px_55px_-25px_rgba(15,23,42,0.45)] transition-colors hover:bg-white"
                >
                  {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                </button>
                <button
                  onClick={nextImage}
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-800 shadow-[0_18px_55px_-25px_rgba(15,23,42,0.45)] transition-colors hover:bg-white"
                >
                  {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </button>
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {selectedProject.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentImage ? "bg-white w-6" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
                {/* Close */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 left-3 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      selectedProject.typeKey === "aperturas"
                        ? "bg-gradient-to-l from-orange-500 to-orange-600 text-white"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    {selectedProject.type}
                  </span>
                  <span className="text-xs text-slate-600">
                    {selectedProject.days} · {selectedProject.size}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedProject.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
