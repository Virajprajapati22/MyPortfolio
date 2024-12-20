import Image from "next/image";
import contact from "../../../public/contactus.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // EmailJS configuration
    const serviceID = "service_i1t7x1h"; // Replace with your Service ID
    const templateID = "template_q85gtcq"; // Replace with your Template ID
    const userID = "BDhx3VZfHfP_7ZTou"; // Replace with your Public Key

    try {
      await emailjs.send(
        serviceID,
        templateID,
        { name, email, message },
        userID
      );
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Image */}
        <div className="relative w-full h-96 lg:h-auto rounded-lg overflow-hidden">
          <Image
            src={contact}
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center lg:text-left">
            We'd love to hear from you! Please fill out the form below to get in
            touch.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-800 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-4 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-800 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-4 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-800 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="p-4 mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <p className="mt-4 text-center text-lg text-green-600">
              {formStatus}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
