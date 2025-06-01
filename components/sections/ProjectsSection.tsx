import Image from "next/image";

export default function ProjectsSection() {
    const projects = [
        {
            title: "PC Marketplace",
            image: "/images/pc-marketplace.png",
            description: "A modern e-commerce platform tailored for PC enthusiasts to buy and sell components.",
            stack: ["nextjs", "django", "tailwind", "postgresql"],
            repo: "https://github.com/faransyari/pc-marketplace",
            live: "https://pc-marketplace.vercel.app/"
        },
        {
            title: "Menuscanorder",
            image: "/images/menuscanorder.png",
            description: "A restaurant service app for menu scanning, ordering, and payment.",
            stack: ["codeigniter", "php", "javascript", "mysql"],
            repo: "https://github.com/faransyari/menuscanorder"
        },
        {
            title: "Collectiv",
            video: "https://www.youtube.com/embed/oqvEPiTc-5s?controls=1&modestbranding=1&rel=0",
            description: "A crowd-sourced app connecting users with local events and volunteer opportunities.",
            stack: ["django", "react", "nextjs"],
            repo: "https://github.com/The-Mud-Koalas/collectiv-fe-mobile",
            live: "https://collectiv-fe-web.vercel.app/"
        },
        {
            title: "iSaveIt",
            video: "https://www.youtube.com/embed/ECg8z9c7sK0?controls=1&modestbranding=1&rel=0",
            description: "A financial management app for budgeting and expense tracking.",
            stack: ["django", "flutter", "dart"],
            repo: "https://github.com/PPL-Waffar/iSaveIt?tab=readme-ov-file"
        }
    ];

    return (
        <section id="projects" className="bg-gray-950 text-white py-20 font-roboto">
            <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-blue-400 text-center mb-12 font-roboto">Projects</h2>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300 border-none font-roboto"
                        >
                            <h3 className="text-xl font-semibold text-blue-300 mb-4 text-center font-roboto">{project.title}</h3>

                            {project.image && (
                                <div className="w-full aspect-video relative mb-4">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="rounded-md object-cover"
                                    />
                                </div>
                            )}

                            {project.video && (
                                <div className="w-full aspect-video mb-4">
                                    <iframe
                                        src={project.video}
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full rounded-md border-none"
                                    ></iframe>
                                </div>
                            )}

                            <p className="text-slate-300 text-sm text-center mb-4 font-roboto">{project.description}</p>

                            <div className="flex justify-center gap-3 mb-4">
                                {project.stack.map((tech, t) => (
                                    <Image
                                        key={t}
                                        src={`/images/${tech}-icon.png`}
                                        alt={tech}
                                        width={30}
                                        height={30}
                                        className="object-contain"
                                    />
                                ))}
                            </div>

                            <div className="flex justify-center gap-3 mt-2">
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-sm border border-blue-400 text-blue-300 px-4 py-1 rounded-full backdrop-blur-md hover:bg-blue-600/10 transition-colors font-roboto"
                                    >
                                        View Repository
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-sm border border-blue-400 text-blue-300 px-4 py-1 rounded-full backdrop-blur-md hover:bg-blue-600/10 transition-colors font-roboto"
                                    >
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
