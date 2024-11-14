'use client'
import { useState } from 'react';

export default function ContactForm() {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  // State for form status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Prepare the data to send
    const formData = { name, email, phone, message };

    try {
      const response = await fetch('https://roofer-website-5r75wh5t4-leorev01s-projects.vercel.app//api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear the form
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        // Display success message
        setSuccessMessage('Your message was sent successfully!');
      } else {
        // Display error message if something goes wrong
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || 'Something went wrong. Please try again later.'
        );
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative isolate bg-gray-900 w-full max-w-3xl mx-auto rounded-lg p-4">
      <div className="grid grid-cols-1 gap-y-4">
        <div className="relative px-4 pt-6 pb-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Get a Quote
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="px-4 pb-4">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
            {/* Full Name Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-white"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md bg-white/10 px-2 py-1 text-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md bg-white/10 px-2 py-1 text-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-white"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full rounded-md bg-white/10 px-2 py-1 text-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Message Field */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full rounded-md bg-white/10 px-2 py-1 text-white text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </form>

        {/* Success/Error Messages */}
        {successMessage && (
          <p className="text-green-500 text-sm font-semibold text-center mt-4">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm font-semibold text-center mt-4">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
