import Image from "next/image";
import useAos from "../hooks/useAos";
import { FlipWords } from "../ui/flip-words";
import "../../styles/globals.css";

export default function HeroSection() {
  useAos();

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      {/* Animated Background Blobs */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500 opacity-30 rounded-full blur-3xl animate-pulse-slow top-[-150px] left-[-200px] z-0" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 rounded-full blur-2xl animate-ping top-[50%] right-[-150px] z-0" />
      <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-20 rounded-full blur-2xl animate-bounce-slow bottom-[-100px] left-[30%] z-0" />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Picture */}
        <div
          data-aos="fade-up"
          className="flex-shrink-0 w-60 h-60 rounded-full overflow-hidden border-none shadow-xl relative"
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            width={240}
            height={240}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background:
                "radial-gradient(circle, transparent 60%, rgba(17,24,39,0.8) 100%)",
            }}
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <div
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl leading-tight text-slate-300"
          >
            <p className="font-light tracking-wide">My name is</p>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-extrabold text-3xl md:text-6xl">
              Firlandi Althaf Ansyari
            </h1>
            <FlipWords
              words={["Full Stack Developer", "Tech Enthusiast", "Data Engineer"]}
              duration={3000}
              className="font-bold text-blue-400 text-xl md:text-2xl mt-2"
            />
          </div>

          {/* Social Media Buttons */}
          <div
            data-aos="fade-up"
            className="flex justify-center md:justify-start gap-6 mt-8"
          >
            {[
              { href: "https://linkedin.com/in/firlandi", icon: "/images/linkedin-icon.png", bg: "bg-[#0077b5]" },
              { href: "https://github.com/faransyari", icon: "/images/github-icon.png", bg: "bg-[#333333]" },
              { href: "https://instagram.com/firlandiansyari", icon: "/images/instagram-icon.png", bg: "bg-[#E1306C]" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md hover:scale-110 transform transition-transform duration-200 ${social.bg}`}
              >
                <Image src={social.icon} alt="social" width={30} height={30} className="object-contain" />
              </a>
            ))}
          </div>

            <div
            data-aos="fade-up">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="mt-6 inline-block px-6 py-3 border-2 border-blue-400 bg-transparent text-blue-400 font-bold rounded-xl shadow-lg hover:bg-blue-400 hover:text-white hover:scale-105 transform transition duration-300"
            >
              Resume
            </a>
            </div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-[-20px] left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[100px] fill-gray-950"
        >
          <path d="M321.39 56.44C177.73 86.27 81.39 101.6 0 99.6V0h1200v27.35c-61.55 22.73-141.58 35.59-243.93 35.59-109.62 0-217.12-23.42-334.91-35.59-92.35-9.65-183.33-7.77-299.77 28.69z"></path>
        </svg>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
