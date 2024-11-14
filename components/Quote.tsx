'use client';
import { useState } from 'react';

export default function ContactForm() {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  // State for form status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Prepare the data to send
    const formData = { name, email, phoneNumber, message };

    try {
      const response = await fetch('/api/contact', {
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
        setSuccessMessage('Your message was sent successfully!');
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || 'Something went wrong. Please try again later.'
        );
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrorMessage('Failed to send message. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative isolate bg-gray-900 w-full max-w-3xl mx-auto rounded-lg p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">
        Get a Quote
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-white/10 px-3 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-white/10 px-3 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-semibold text-white">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full rounded-md bg-white/10 px-3 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-white/10 px-3 py-2 text-white text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-indigo-600 hover:bg-indigo-500 px-4 py-2 text-sm font-semibold text-white"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {successMessage && (
        <p className="text-green-500 text-sm font-semibold mt-4 text-center">
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p className="text-red-500 text-sm font-semibold mt-4 text-center">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
