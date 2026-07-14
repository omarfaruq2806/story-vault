export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Your Message" className="w-full border p-2 rounded h-32" />
        <button className="bg-indigo-600 text-white px-6 py-2 rounded">Send Message</button>
      </form>
    </div>
  );
}