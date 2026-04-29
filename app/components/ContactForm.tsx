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
          Request received
        </h3>
        <p className="text-foreground/70">
          We will get back to you within 24 business hours.
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
            Full name *
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
            Company *
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
            Title *
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
            Corporate email *
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
          Message (optional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Briefly tell us about your situation or what you'd like to explore..."
          className="w-full px-4 py-3 rounded-lg border border-foreground/15 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-4 px-8 rounded-full hover:bg-primary/90 transition cursor-pointer text-lg"
      >
        Request executive workshop
      </button>
      <p className="text-xs text-foreground/50 text-center">
        No commitment. We respond within 24 business hours.
      </p>
    </form>
  );
}
