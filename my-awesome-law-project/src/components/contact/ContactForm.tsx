import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow" onSubmit={handleSubmit}>
      <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
      <input
        type="text"
        placeholder="Name"
        className="border p-2 mb-2 w-full"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2 w-full"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Message"
        className="border p-2 mb-2 w-full"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default ContactForm;
