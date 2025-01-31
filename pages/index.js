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
    // { name: "Photography", link: "/photography" }
  ];

  return (
    <BackgroundLines
      className="relative min-h-screen overflow-hidden"
      svgOptions={{ duration: 15 }} 
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
                maxWidth: "1240px", // Adjust container width
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
                    src="/images/profile.jpg" 
                    alt="Profile Picture"
                    width={400} // Adjust width for portrait
                    height={800} // Adjust height for portrait
                    style={{
                    objectFit: "cover",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 1)",
                    borderRadius: "10px",
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
                    fontSize: "1.2rem",
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
                    border: "none",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    marginTop: "10rem",
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
                        textAlign: "justify",
                        }}
                    >
                        I&apos;m a{" "}
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
         
        <section id="work" style={{ padding: "2rem", marginTop: "10rem" }}>
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
        <div
            className="frosted-container"
            style={{
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            maxWidth: "1200px",
            margin: "0 auto",
            border: "none",
            marginBottom: "10rem",
            }}
        >
            <h2
            style={{
                fontSize: "2rem",
                color: "#82b1ff",
                textAlign: "center",
                marginBottom: "2rem",
            }}
            >
            Projects
            </h2>
            <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
            }}
            >
            {/* Menuscanorder */}
            <div
                style={{
                textAlign: "center",
                padding: "1rem",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h3 style={{ color: "#82b1ff", fontSize: "1.5rem", marginBottom: "1rem" }}>Menuscanorder</h3>
                <Image
                src="/images/menuscanorder.png"
                alt="Menuscanorder Project"
                width={400}
                height={200}
                style={{ borderRadius: "8px", objectFit: "cover", marginBottom: "1rem" }}
                />
                <p style={{ color: "#b0c4de", fontSize: "1rem" }}>
                A restaurant service app for menu scanning, ordering, and payment.
                </p>
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                }}
                >
                {/* Tech Stack Icons */}
                <Image src="/images/codeigniter-icon.png" alt="CodeIgniter" width={30} height={30} />
                <Image src="/images/php-icon.png" alt="PHP" width={30} height={30} />
                <Image src="/images/javascript-icon.png" alt="JavaScript" width={30} height={30} />
                <Image src="/images/mysql-icon.png" alt="MySQL" width={30} height={30} />
                </div>
                <a
                href="https://github.com/faransyari/menuscanorder"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    marginTop: "1rem",
                    display: "inline-block",
                    color: "#4facfe",
                    textDecoration: "none",
                }}
                >
                View Repository
                </a>
            </div>

            {/* Collectiv */}
            <div
                style={{
                textAlign: "center",
                padding: "1rem",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h3 style={{ color: "#82b1ff", fontSize: "1.5rem", marginBottom: "1rem" }}>Collectiv</h3>
                <iframe
                    src="https://www.youtube.com/embed/oqvEPiTc-5s?controls=1&modestbranding=1&rel=0"
                    width="100%"
                    height="200"
                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        borderRadius: "8px",
                        border: "none",
                        marginBottom: "1rem",
                    }}
                ></iframe>

                <p style={{ color: "#b0c4de", fontSize: "1rem" }}>
                A crowd-sourced app connecting users with local events and volunteer opportunities.
                </p>
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                }}
                >
                {/* Tech Stack Icons */}
                <Image src="/images/django-icon.png" alt="Django" width={30} height={30} />
                <Image src="/images/react-icon.png" alt="React" width={30} height={30} />
                <Image src="/images/nextjs-icon.png" alt="Next.js" width={30} height={30} />
                </div>
                <a
                href="https://github.com/The-Mud-Koalas/collectiv-fe-mobile"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    marginTop: "1rem",
                    display: "inline-block",
                    color: "#4facfe",
                    textDecoration: "none",
                }}
                >
                View Repository
                </a><br />
                <a
                href="https://collectiv-fe-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    marginTop: "1rem",
                    display: "inline-block",
                    color: "#4facfe",
                    textDecoration: "none",
                }}
                >
                Website
                </a>
            </div>

            {/* iSaveIt */}
            <div
                style={{
                textAlign: "center",
                padding: "1rem",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h3 style={{ color: "#82b1ff", fontSize: "1.5rem", marginBottom: "1rem" }}>iSaveIt</h3>
                <iframe
                    src="https://www.youtube.com/embed/ECg8z9c7sK0?controls=1&modestbranding=1&rel=0"
                    width="100%"
                    height="200"
                    allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        borderRadius: "8px",
                        border: "none",
                        marginBottom: "1rem",
                    }}
                ></iframe>
                <p style={{ color: "#b0c4de", fontSize: "1rem" }}>
                A financial management app for budgeting and expense tracking.
                </p>
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                }}
                >
                {/* Tech Stack Icons */}
                <Image src="/images/django-icon.png" alt="Django" width={30} height={30} />
                <Image src="/images/flutter-icon.png" alt="Flutter" width={30} height={30} />
                <Image src="/images/dart-icon.png" alt="Dart" width={30} height={30} />
                </div>
                <a
                href="https://github.com/PPL-Waffar/iSaveIt?tab=readme-ov-file" // Replace with actual repo link
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    marginTop: "1rem",
                    display: "inline-block",
                    color: "#4facfe",
                    textDecoration: "none",
                }}
                >
                View Repository
                </a>
            </div>
            </div>
        </div>
        </section>


        <footer id="contact" style={{ padding: "2rem", background: "rgba(255, 255, 255, 0.05)" }}>
        <div
            style={{
            padding: "2rem",
            background: "rgba(255, 255, 255, 0)",
            borderRadius: "16px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            }}
        >
            <h2 style={{ fontSize: "2rem", color: "#82b1ff", marginBottom: "1rem" }}>Contact Me</h2>
            <p style={{ color: "#b0c4de", marginBottom: "1.5rem" }}>
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me:
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
                <strong>Email:</strong>{" "}
                <a
                href="mailto:firlandi.althaf@gmail.com"
                style={{ color: "#82b1ff", textDecoration: "none" }}
                >
                firlandi.althaf@gmail.com
                </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
                <strong>LinkedIn:</strong>{" "}
                <a
                href="https://linkedin.com/in/firlandi"
                style={{ color: "#82b1ff", textDecoration: "none" }}
                >
                linkedin.com/in/firlandi
                </a>
            </li>
            <li>
                <strong>Phone:</strong> +61423704207
            </li>
            </ul>
        </div>
    </footer>

      </main>
    </BackgroundLines>
  );
}
