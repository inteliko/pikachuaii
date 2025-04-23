import React, { useState } from "react";
import axios from "axios";

const LeadForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/leads/", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error adding lead:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: "#0f0f0f", padding: "2rem", borderRadius: "8px", color: "#00ff99" }}>
      <h2>Add New Lead</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} type="email" required />
      <input name="company" placeholder="Company" onChange={handleChange} />
      <button type="submit">Add Lead</button>
      {submitted && <p>✅ Lead added!</p>}
    </form>
  );
};

export default LeadForm;
