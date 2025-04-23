import React, { useState } from "react";
import axios from "axios";

const Templates = () => {
  const [prompt, setPrompt] = useState("");
  const [template, setTemplate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setTemplate("");
    setError(null);  // Reset error state on new request

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/generate-email/", {
        prompt: prompt,
      });

      if (res.data?.email_template) {
        setTemplate(res.data.email_template);
      } else {
        setError("No email template generated.");
      }
    } catch (error: any) {
      console.error("Error generating email:", error);
      if (error.response) {
        setError(`Error: ${error.response.data.error || "Failed to generate email."}`);
      } else {
        setError("Failed to generate email. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0c29] text-white p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-neon-green">🎯 AI Email Generator</h1>

      <textarea
        className="w-full p-4 bg-gray-900 rounded-lg border border-green-400 text-white mb-4"
        rows={5}
        placeholder="Enter your email prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-neon-green text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-300 transition"
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>

      {/* Display Error if Exists */}
      {error && (
        <div className="mt-4 text-red-500 font-semibold">{error}</div>
      )}

      {/* Display Generated Template */}
      {template && (
        <div className="mt-8 bg-gray-800 p-6 rounded-lg border border-green-400">
          <h2 className="text-xl font-semibold mb-2">Generated Email:</h2>
          <pre className="whitespace-pre-wrap">{template}</pre>
        </div>
      )}
    </div>
  );
};

export default Templates;
