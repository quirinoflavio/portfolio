export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-xl mx-auto text-center">
      <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
      <p className="mb-6 text-gray-700">Interested in working together? Let’s talk!</p>
      <a
        href="mailto:flavio@example.com"
        className="inline-block px-6 py-2 bg-accent text-white rounded-xl hover:bg-indigo-600 transition"
      >
        Email Me
      </a>
    </section>
  );
}
