"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-lg">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-primary mb-2">
          Solicitud recibida
        </h3>
        <p className="text-foreground/70">
          Nos pondremos en contacto contigo en las próximas 24 horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-lg space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-foreground/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
        <div>
          <label
            htmlFor="empresa"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Empresa *
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            required
            value={formData.empresa}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-foreground/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="cargo"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Cargo *
          </label>
          <input
            type="text"
            id="cargo"
            name="cargo"
            required
            value={formData.cargo}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-foreground/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground/70 mb-1.5"
          >
            Email corporativo *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-foreground/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-medium text-foreground/70 mb-1.5"
        >
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos brevemente tu situación o qué te interesa explorar..."
          className="w-full px-4 py-3 rounded-lg border border-foreground/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-primary/90 transition cursor-pointer text-lg"
      >
        Solicitar workshop ejecutivo
      </button>
      <p className="text-xs text-foreground/50 text-center">
        Sin compromiso. Respondemos en menos de 24 horas hábiles.
      </p>
    </form>
  );
}
