import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      "service_wxprgn8",       
      "template_43894iq",      
      formRef.current,
      "k03kmCt458hZRm1WK"        
    )
    .then(() => {
      setStatus("success");
      formRef.current.reset();
    })
    .catch(() => {
      setStatus("error");
    });
  };

  return (
    <section id="contact" className="h-screen py-20 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>

        {/* Liens sociaux et CV */}
        <div className="flex items-center gap-6 mb-6 text-3xl text-purple-700">
            <a
            href="https://www.linkedin.com/in/elyas-maloum-6466181b5/" // 🔁 à remplacer
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-900 transition"
            aria-label="LinkedIn"
            title="Mon LinkedIn"
            >
            <i className="fab fa-linkedin"></i>
            </a>
            <a
            href="https://github.com/elyasmlm" // 🔁 à remplacer
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-900 transition"
            aria-label="GitHub"
            title="Mon GitHub"
            >
            <i className="fab fa-github"></i>
            </a>
            <a
            href="/CV_2025-02-15_Elyas_Maloum.pdf" // Ton CV placé dans le dossier /public
            download
            className="hover:text-purple-900 transition"
            title="Télécharger mon CV"
            >
            <i className="fas fa-file"></i>
            </a>
        </div>

        {/* Formulaire */}
        <form ref={formRef} onSubmit={sendEmail} className="w-full shadow-xl rounded-lg p-6 space-y-4 bg-purple-300/40">
            <input
            type="text"
            name="name"
            placeholder="Votre nom"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <input
            type="text"
            name="title"
            placeholder="Sujet"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <input
            type="email"
            name="email"
            placeholder="Votre email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <textarea
            name="message"
            rows="5"
            placeholder="Votre message"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            />
            <button
            type="submit"
            className="w-full bg-purple-400 text-white py-2 rounded-md hover:bg-purple-600 cursor-pointer transition"
            >
            Envoyer
            </button>
            {status === "success" && <p className="text-green-600 text-center mt-2">Message envoyé !</p>}
            {status === "error" && <p className="text-red-600 text-center mt-2">Une erreur est survenue... Contactez moi directement par mail via elyasmaloum@gmail.com</p>}
            {status === "sending" && <p className="text-gray-500 text-center mt-2">Envoi en cours...</p>}
        </form>
    </section>

  );
};

export default ContactSection;
