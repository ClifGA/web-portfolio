import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Email sent successfully
        console.log("Email sent!");
        // Clear form data
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Error sending email
        console.error("Error sending email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form
      className="flex flex-col w-full max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="w-full h-10 p-2 border border-black rounded-md"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="w-full h-10 p-2 border border-black rounded-md"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label className="block mb-2 " htmlFor="message">
          Message:
        </label>
        <textarea
          className="w-full h-24 p-2 border border-black rounded-md"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
