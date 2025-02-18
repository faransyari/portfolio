import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "2rem", height: "100vh" }}>
            <HeroHighlight containerClassName="bg-transparent text-white">
                <div
                className="frosted-container"
                style={{
                    padding: "2rem 3rem",
                    background: "rgba(255, 255, 255, 0.05)", // Transparent frosted effect
                    borderRadius: "16px",
                    border: "none",
                    maxWidth: "1200px",
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
                        { name: "C++", src: "/images/cpp-icon.png", background: "rgba(0, 122, 204, 0.2)" },
                        { name: "Java", src: "/images/java-icon.png", background: "rgba(244, 68, 58, 0.2)" },
                        { name: "Python", src: "/images/python-icon.png", background: "rgba(53, 114, 165, 0.2)" },
                        { name: "PHP", src: "/images/php-icon.png", background: "rgba(79, 93, 149, 0.2)" },
                        { name: "JavaScript", src: "/images/javascript-icon.png", background: "rgba(247, 223, 30, 0.2)" },
                        { name: "TypeScript", src: "/images/typescript-icon.png", background: "rgba(0, 122, 204, 0.2)" },
                        { name: "Dart", src: "/images/dart-icon.png", background: "rgba(0, 180, 255, 0.2)" },
                        { name: "GO", src: "/images/go-icon.png", background: "rgba(0, 173, 216, 0.2)" },
                        { name: "Swift", src: "/images/swift-icon.png", background: "rgba(255, 69, 58, 0.2)" },
                        ].map((lang, index) => (
                        <div
                            key={index}
                            className="tech-item"

                            style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%", // Full width of parent
                            padding: "1rem",
                            borderRadius: "12px",
                            background: lang.background,
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
                        { name: "React", src: "/images/react-icon.png", background: "rgba(97, 218, 251, 0.2)" },
                        { name: "Next.js", src: "/images/nextjs-icon.png", background: "rgba(156, 154, 154, 0.2)" },
                        { name: "Node.js", src: "/images/nodejs-icon.png", background: "rgba(104, 160, 99, 0.2)" },
                        { name: "Spring Boot", src: "/images/springboot-icon.png", background: "rgba(109, 179, 63, 0.2)" },
                        { name: "Django", src: "/images/django-icon.png", background: "#092e20" },
                        { name: "Laravel", src: "/images/laravel-icon.png", background: "rgba(255, 45, 32, 0.2)" },
                        { name: "CodeIgniter", src: "/images/codeigniter-icon.png", background: "rgba(221, 72, 20, 0.2)" },
                        { name: "Flutter", src: "/images/flutter-icon.png", background: "rgba(2, 86, 155, 0.2)" },
                        ].map((framework, index) => (
                        <div
                            key={index}
                            className="tech-item"

                            style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            padding: "1rem",
                            borderRadius: "12px",
                            background: framework.background,
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
                        { name: "CSS", src: "/images/css-icon.png", background: "rgba(0, 122, 204, 0.2)" },
                        { name: "HTML", src: "/images/html-icon.png", background: "rgba(255, 87, 34, 0.2)" },
                        { name: "Bootstrap", src: "/images/bootstrap-icon.png", background: "rgba(86, 61, 124, 0.2)" },
                        { name: "Tailwind CSS", src: "/images/tailwind-icon.png", background: "rgba(56, 189, 248, 0.2)" },
                        { name: "PostgreSQL", src: "/images/postgresql-icon.png", background: "rgba(49, 99, 149, 0.2)" },
                        { name: "MySQL", src: "/images/mysql-icon.png", background: "rgba(0, 123, 255, 0.2)" },
                        ].map((tech, index) => (
                        <div
                            key={index}
                            className="tech-item"
                            style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            padding: "1rem",
                            borderRadius: "12px",
                            background: tech.background,
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
            <style jsx>{`
                .tech-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    padding: 1rem;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.1);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    text-align: center;
                    aspect-ratio: 1 / 1;
                    transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;
                }

                .tech-item:hover {
                    transform: scale(1.2); /* Slightly expands */
                    background: rgba(130, 177, 255, 0.2); /* Light blue tint on hover */
                }

                .tech-item img {
                    transition: transform 0.2s ease-in-out;
                }

                .tech-item:hover img {
                    transform: scale(1.05); /* Slightly enlarge icon */
                }
            `}</style>

        </section>
  );
}
