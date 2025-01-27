import { FloatingNav } from "../components/ui/floating-navbar";
import { BackgroundLines } from "../components/ui/background-lines";
import { FlipWords } from "../components/ui/flip-words";
import Image from "next/image";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Work Experiences", link: "#work" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <BackgroundLines
      className="relative min-h-screen overflow-hidden"
      svgOptions={{ duration: 15 }} // Customize animation duration as needed
    >
      <FloatingNav navItems={navItems} />
      <main className="relative z-10" style={{ padding: "2rem" }}>
        {/* Hero Section */}
        ;
        <section
            id="home"
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left", // Align text to the left
                padding: "2rem",
            }}
            >
            <div
                className="frosted-container"
                style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0)", // Transparent frosted effect
                borderRadius: "16px",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Shadow
                maxWidth: "1210px", // Adjust container width
                width: "100%",
                padding: "2rem",
                backdropFilter: "blur(2px)", // Frosted glass effect
                WebkitBackdropFilter: "blur(2px)", // Safari support
                border: "none",
                }}
            >
                {/* Profile Picture */}
                <div style={{ marginRight: "2rem", flexShrink: 0 }}>
                <Image
                    src="/images/profile.jpg" // Path to your image
                    alt="Profile Picture"
                    width={400} // Adjust width for portrait
                    height={800} // Adjust height for portrait
                    style={{
                    objectFit: "cover", // Ensure the image fits well
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 1)", // Optional shadow
                    //round corners
                    borderRadius: "10px",
                    }}
                />
                </div>

                {/* Text Section */}
                <div>
                <p
                    style={{
                    color: "#b0c4de",
                    fontSize: "2.5rem", // Increased font size
                    lineHeight: "4rem", // Improved readability
                    }}
                >
                    My name is{" "}
                    <span
                    style={{
                        fontWeight: "bold",
                        color: "#82b1ff",
                        fontSize: "2.8rem", // Larger for emphasis
                    }}
                    >
                    Firlandi Althaf Ansyari
                    </span>
                    . I am a{" "}
                    <span style={{ display: "inline-block" }}>
                    <FlipWords
                        words={["Full Stack Developer", "Tech Enthusiast", "Data Engineer"]}
                        duration={3000} // 3 seconds per flip
                        className="font-bold text-blue-400"                        
                    />
                    </span>
                </p>

                {/* Button */}
                <button
                    style={{
                    marginTop: "2rem",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "12px",
                    background: "linear-gradient(90deg, #4facfe, #00f2fe)",
                    color: "#fff",
                    border: "none",
                    fontSize: "1.2rem", // Slightly larger button text
                    cursor: "pointer",
                    }}
                >
                    <a href="#contact" style={{ textDecoration: "none", color: "#fff" }}>
                    Get In Touch
                    </a>
                </button>
                </div>
            </div>
            </section>



        {/* About Section */}
        <section id="about" style={{ padding: "2rem" }}>
            <HeroHighlight containerClassName="bg-neutral-900 text-white">
                <div
                className="frosted-container"
                style={{
                    padding: "2rem 3rem",
                    background: "rgba(255, 255, 255, 0.05)", // Transparent frosted effect
                    borderRadius: "16px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Shadow
                    border: "none",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
                >
                <h2 style={{ fontSize: "2.5rem", color: "#82b1ff", textAlign: "center" }}>
                    About Me
                </h2>
                <p
                    style={{
                    color: "#b0c4de",
                    fontSize: "1.5rem",
                    lineHeight: "2.2rem",
                    marginTop: "1rem",
                    textAlign: "center",
                    }}
                >
                    I'm a{" "}
                    <Highlight>
                        Software Engineer
                    </Highlight>{" "}
                    with a strong foundation in computer science and a deep passion for designing innovative solutions. 
                    I hold a degree in IT from the{" "}
                    <Highlight>
                        University of Queensland
                    </Highlight>{" "}
                    and a Computer Science degree from the{" "}
                    <Highlight>
                        University of Indonesia
                    </Highlight>
                    . With extensive experience in developing robust applications, optimizing performance, and delivering 
                    seamless user experiences, I am committed to achieving excellence in every project I undertake.
                </p>

                {/* Grid Section */}
                <div
                    style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2rem",
                    marginTop: "2rem",
                    }}
                >
                    {/* Programming Languages */}
                    <div style={{ textAlign: "center" }}>
                    <h3
                        style={{
                        marginBottom: "1rem",
                        color: "#82b1ff",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        }}
                    >
                        Programming Languages
                    </h3>
                    <div
                        style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)", // 3 icons per row
                        gap: "1rem",
                        }}
                    >
                        {[
                        { name: "C++", src: "/images/cpp-icon.png" },
                        { name: "Java", src: "/images/java-icon.png" },
                        { name: "Python", src: "/images/python-icon.png" },
                        { name: "PHP", src: "/images/php-icon.png" },
                        { name: "JavaScript", src: "/images/javascript-icon.png" },
                        { name: "TypeScript", src: "/images/typescript-icon.png" },
                        { name: "Dart", src: "/images/dart-icon.png" },
                        { name: "GO", src: "/images/go-icon.png" },
                        { name: "Swift", src: "/images/swift-icon.png" },
                        ].map((lang, index) => (
                        <div
                            key={index}
                            style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%", // Full width of parent
                            padding: "1rem",
                            borderRadius: "12px",
                            background: "rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            textAlign: "center",
                            aspectRatio: "1 / 1", // Ensures 1:1 aspect ratio
                            }}
                        >
                            <Image
                            src={lang.src}
                            alt={lang.name}
                            width={90}
                            height={90}
                            style={{
                                objectFit: "contain",
                                borderRadius: "8px",
                            }}
                            />
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Frameworks & Libraries */}
                    <div style={{ textAlign: "center" }}>
                    <h3
                        style={{
                        marginBottom: "1rem",
                        color: "#82b1ff",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        }}
                    >
                        Frameworks & Libraries
                    </h3>
                    <div
                        style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)", // 3 icons per row
                        gap: "1rem",
                        }}
                    >
                        {[
                        { name: "React", src: "/images/react-icon.png" },
                        { name: "Next.js", src: "/images/nextjs-icon.png" },
                        { name: "Node.js", src: "/images/nodejs-icon.png" },
                        { name: "Spring Boot", src: "/images/springboot-icon.png" },
                        { name: "Django", src: "/images/django-icon.png" },
                        { name: "Laravel", src: "/images/laravel-icon.png" },
                        { name: "CodeIgniter", src: "/images/codeigniter-icon.png" },
                        { name: "Flutter", src: "/images/flutter-icon.png" },
                        ].map((framework, index) => (
                        <div
                            key={index}
                            style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            padding: "1rem",
                            borderRadius: "12px",
                            background: "rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            textAlign: "center",
                            aspectRatio: "1 / 1",
                            }}
                        >
                            <Image
                            src={framework.src}
                            alt={framework.name}
                            width={65}
                            height={65}
                            style={{
                                objectFit: "contain",
                                borderRadius: "8px",
                            }}
                            />
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Web and Databases */}
                    <div style={{ textAlign: "center" }}>
                    <h3
                        style={{
                        marginBottom: "1rem",
                        color: "#82b1ff",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        }}
                    >
                        Web & Databases
                    </h3>
                    <div
                        style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)", // 3 icons per row
                        gap: "1rem",
                        }}
                    >
                        {[
                        { name: "CSS", src: "/images/css-icon.png" },
                        { name: "HTML", src: "/images/html-icon.png" },
                        { name: "Bootstrap", src: "/images/bootstrap-icon.png" },
                        { name: "Tailwind CSS", src: "/images/tailwind-icon.png" },
                        { name: "PostgreSQL", src: "/images/postgresql-icon.png" },
                        { name: "MySQL", src: "/images/mysql-icon.png" },
                        ].map((tech, index) => (
                        <div
                            key={index}
                            style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            padding: "1rem",
                            borderRadius: "12px",
                            background: "rgba(255, 255, 255, 0.1)",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            textAlign: "center",
                            aspectRatio: "1 / 1",
                            }}
                        >
                            <Image
                            src={tech.src}
                            alt={tech.name}
                            width={90}
                            height={90}
                            style={{
                                objectFit: "contain",
                                borderRadius: "8px",
                            }}
                            />
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>
            </HeroHighlight>
        </section>
         
        <section id="work-experience" style={{ padding: "2rem", marginTop: "10rem" }}>
            <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#82b1ff", marginBottom: "2rem" }}>Work Experience</h2>
            <div class="timeline">
                <div class="timeline-entry">
                <div class="timeline-dot">
                    <span class="timeline-date">Oct 2024 - Present</span>
                </div>
                <div class="timeline-content">
                    <h3>Full Stack Developer Intern</h3>
                    <span>Purple Patch Consulting, Brisbane, Australia</span>
                    <p>
                    • Developed front-end interfaces using <strong>WordPress</strong>, <strong>React</strong>, and <strong>Next.js</strong> for an enhanced user experience.<br />
                    • Optimized back-end systems by refactoring database queries and implementing caching mechanisms.<br />
                    • Achieved a <strong>30% reduction</strong> in server response times through performance improvements.<br />
                    • This led to a <strong>15% increase</strong> in customer satisfaction ratings and boosted overall application performance.
                    </p>
                </div>
                </div>
                <div class="timeline-entry">
                <div class="timeline-dot">
                    <span class="timeline-date">Jul 2024 - Oct 2024</span>
                </div>
                <div class="timeline-content">
                    <h3>Backend Developer Intern</h3>
                    <span>Kamar Pelajar, Brisbane, Australia</span>
                    <p>
                    • Partnered with front-end developers to integrate user-facing elements into applications, enhancing the user
                    experience.<br />
                    • Contributed to a 20% increase in customer satisfaction ratings due to smoother user interactions.<br />
                    • Engineered and maintained robust backend systems with Laravel, PHP, and MySQL for reliable performance. <br />
                    • Improved database response time by 40%, benefiting over 500 daily active users with a faster experience.     
                    </p>
                </div>
                </div>
                <div class="timeline-entry">
                <div class="timeline-dot">
                    <span class="timeline-date">Feb 2022 - Dec 2022</span>
                </div>
                <div class="timeline-content">
                    <h3>Teaching Assistant</h3>
                    <span>University of Indonesia, Jakarta, Indonesia</span>
                    <p>
                    • Platform-based Development: Delivered web, mobile, and API content; mentored 30+ students, raising project grades by 25%, and organised 20+ support meetings.<br />
                    • Statistics and Probability: Led content delivery, grading, and support sessions, improving student exam scores by 20%.
                    </p>
                </div>
                </div>
            </div>
        </section>


                

        {/* Projects Section */}
        <section id="projects" style={{ padding: "2rem" }}>
          <div className="frosted-container" style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "2rem", color: "#82b1ff" }}>Projects</h2>
            <ul>
              <li style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "#82b1ff" }}>Menuscanorder:</strong> A restaurant service app for menu scanning, ordering, and payment, built with CodeIgniter, PHP, JavaScript, and MySQL.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "#82b1ff" }}>Collectiv:</strong> A crowd-sourced app connecting users with local events and volunteer opportunities, built with Django, React, and Next.js.
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong style={{ color: "#82b1ff" }}>iSaveIt:</strong> A financial management app for budgeting and expense tracking, developed using Django, Flutter, and Dart.
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: "2rem" }}>
          <div className="frosted-container" style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "2rem", color: "#82b1ff" }}>Contact Me</h2>
            <p style={{ color: "#b0c4de" }}>
              I'm always open to new opportunities and collaborations. Feel free to reach out to me:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:firlandi.althaf@gmail.com" style={{ color: "#82b1ff" }}>
                  firlandi.althaf@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href="https://linkedin.com/in/firlandi" style={{ color: "#82b1ff" }}>
                  linkedin.com/in/firlandi
                </a>
              </li>
              <li>Phone: +61423704207</li>
            </ul>
          </div>
        </section>
      </main>
    </BackgroundLines>
  );
}
