import { FlipWords } from "../ui/flip-words";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        padding: "2rem",
      }}
    >
      <div
        className="frosted-container"
        style={{
          display: "flex",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0)",
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          maxWidth: "1240px",
          width: "100%",
          padding: "2rem",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          border: "none",
        }}
      >
        {/* Profile Picture */}
        <div style={{ 
            marginRight: "2rem", 
            flexShrink: 0, 
            width: "400px", 
            height: "750px", 
            position: "relative" // Ensure positioning works correctly
        }}>
        <Image
            src="/images/profile1.png"
            alt="Profile Picture"
            width={350}
            height={750} // Ensure the height matches the div
            style={{
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
            }}
        />
        </div>


        {/* Text Section */}
        <div>
          <p
            style={{
              color: "#b0c4de",
              fontSize: "2.5rem",
              lineHeight: "4rem",
            }}
          >
            My name is{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "#82b1ff",
                fontSize: "2.8rem",
              }}
            >
              Firlandi Althaf Ansyari
            </span>
            .
            <span style={{ display: "inline-block" }}>
              <FlipWords
                words={["Full Stack Developer", "Tech Enthusiast", "Data Engineer"]}
                duration={3000}
                className="font-bold text-blue-400"
              />
            </span>
          </p>

          {/* Social Media Buttons */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <a
              href="https://linkedin.com/in/firlandi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              style={{ backgroundColor: "#0077b5" }} // LinkedIn blue background color
            >
              <img src="/images/linkedin-icon.png" alt="LinkedIn" width={30} height={30} />
            </a>

            <a
              href="https://github.com/faransyari"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              style={{ backgroundColor: "#333" }} // GitHub dark background color
            >
              <img src="/images/github-icon.png" alt="GitHub" width={30} height={30} />
            </a>

            <a
              href="https://instagram.com/firlandiansyari"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
              style={{ backgroundColor: "#E1306C" }} // Instagram pink background color
            >
              <img src="/images/instagram-icon.png" alt="Instagram" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>

      {/* CSS for Monochrome Buttons */}
      <style jsx>{`
        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: white;
          text-decoration: none;
          transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
        }

        .social-button:hover {
          transform: scale(1.1); 
          background: rgba(130, 177, 255, 0.2); 
        }

        img {
            height: 30px;
            width: 30px;
          transition: filter 0.2s ease-in-out;
        }

        .social-button:hover img {
          filter: grayscale(0%) brightness(100%); 
        }

        
      `}</style>
    </section>
  );
}
