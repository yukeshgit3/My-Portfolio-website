import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com'; // Ensure you have emailjs installed

function Contact() {
  // State to manage form fields
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedbackMessage, setFeedbackMessage] = useState(null); // To track feedback messages (success or failure)
  const form = useRef();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS submission
    emailjs
      .sendForm('service_hqrd1b7', 'template_n43cxsk', form.current, 'jupmZ_mBgFCFM7Ahl')
      .then(
        (result) => {
          console.log(result.text);
          setFeedbackMessage('Message sent successfully!'); // Show success message
          setFormData({ name: '', email: '', message: '' }); // Reset form data
          clearFeedbackMessage(); // Clear feedback message after 3 seconds
        },
        (error) => {
          console.log(error.text);
          setFeedbackMessage('Message not sent. Try again.'); 
          clearFeedbackMessage(); 
        }
      );
  };

  
  const clearFeedbackMessage = () => {
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 3000); 
  };

  return (
    <div className="min-h-screen bg-base-100 flex flex-col justify-start items-center pt-10">
      <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>

      
      <form ref={form} onSubmit={handleSubmit} className="bg-base-200 p-8 rounded-lg shadow-lg w-full max-w-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>

      {/* Feedback Message */}
      {feedbackMessage && (
        <p className={`mt-4 text-lg ${feedbackMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {feedbackMessage}
        </p>
      )}
    </div>
  );
}

export default Contact;
