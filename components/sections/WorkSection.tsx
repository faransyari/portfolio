import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BriefcaseIcon } from 'lucide-react';

export default function WorkSection() {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Purple Patch Consulting | Brisbane, Australia',
      date: 'Oct 2024 - Dec 2024',
      points: [
        'Developed a real-time analytics dashboard using React and Next.js for consultants to track key metrics.',
        'Optimized database queries, implemented Redis caching, and improved data visualization, reducing load times by 30% and leading to a 15% increase in customer satisfaction.'
      ]
    },
    {
      title: 'Backend Developer Intern',
      company: 'Kamar Pelajar | Brisbane, Australia',
      date: 'Jul 2024 - Oct 2024',
      points: [
        'Built a property dashboard with booking and listing management, improving occupancy tracking and reservations.',
        'Integrated front-end booking features with a Laravel and MySQL backend, enhancing accuracy and efficiency.',
        'Developed an asynchronous job processing system using Laravel Queues, handling 100+ daily transactions and improving booking request speeds by 40% for 500+ active users.'
      ]
    },
    {
      title: 'Teaching Assistant',
      company: 'University of Indonesia | Jakarta, Indonesia',
      date: 'Feb 2022 - Dec 2022',
      points: [
        'Platform-based Development: Mentored 30+ students, improved grades by 25%.',
        'Statistics and Probability: Led support and grading; raised exam scores by 20%.'
      ]
    }
  ];

  return (
    <section
      id="work"
      className="relative min-h-screen py-24 text-white bg-gray-950 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-950 to-transparent z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-blue-400 mb-10">
          Work Experience
        </h2>

        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.3)">
          {experiences.map((exp, i) => (
            <VerticalTimelineElement
              key={i}
              date={exp.date}
              iconStyle={{
          background: 'rgba(59, 130, 246, 0.15)', // more transparent
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
              }}
              icon={<BriefcaseIcon className="w-5 h-5 text-white" />}
              contentStyle={{
          background: 'rgba(17, 24, 39, 0.7)', // more transparent
          color: '#fff',
          backdropFilter: 'blur(8px)',
          borderRadius: '1rem',
          boxShadow: '0 4px 12px rgba(158, 211, 255, 0.35)', // softer shadow
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(121, 95, 95, 0)' }}
            >
              <h3 className="text-2xl font-bold text-blue-200 mb-1">{exp.title}</h3>
              <h4 className="text-md text-slate-300 mb-3">{exp.company}</h4>
              <ul className="list-disc list-inside text-slate-400 space-y-1 border-0 ">
          {exp.points.map((point, j) => (
            <li key={j}>{point}</li>
          ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 z-0" />
    </section>
  );
}
