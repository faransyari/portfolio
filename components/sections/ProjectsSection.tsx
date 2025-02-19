import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section id="projects" style={{ 
            padding: "2rem", 
            height:"100vh",
            }}>
        <div
            className="frosted-container"
            data-aos="fade-up"
            style={{
            padding: "2rem",
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "16px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            maxWidth: "1200px",
            margin: "0 auto",
            border: "none",
            
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
    );
}