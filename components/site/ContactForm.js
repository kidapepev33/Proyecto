import { useState } from "react";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  message: ""
};

export default function ContactForm() {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send your request");
      }

      setFormState(initialState);
      setStatus({ type: "success", message: "Thanks! Your consultation request has been sent." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label htmlFor="fullName">Full name</label>
      <input id="fullName" name="fullName" type="text" value={formState.fullName} onChange={onChange} required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" value={formState.email} onChange={onChange} required />

      <label htmlFor="phone">Phone</label>
      <input id="phone" name="phone" type="tel" value={formState.phone} onChange={onChange} />

      <label htmlFor="message">How can we help?</label>
      <textarea id="message" name="message" rows="4" value={formState.message} onChange={onChange} required />

      <button className="button-solid" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request Consultation"}
      </button>

      {status.type === "success" ? <p className="form-success">{status.message}</p> : null}
      {status.type === "error" ? <p className="form-error">{status.message}</p> : null}
    </form>
  );
}
