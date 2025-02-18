export default function WorkSection() {
    return (
      <section id="work" style={{ padding: "2rem", height:"100vh" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            color: "#82b1ff",
            marginTop: "3rem",
          }}
        >
          Work Experience
        </h2>
        <div className="timeline">
          {/* Full Stack Developer Intern */}
          <div className="timeline-entry">
            <div className="timeline-dot">
              <span className="timeline-date">Oct 2024 - Present</span>
            </div>
            <div className="timeline-content">
              <h3>Full Stack Developer Intern</h3>
              <span>Purple Patch Consulting, Brisbane, Australia</span>
              <p>
                • Developed front-end interfaces using <strong>WordPress</strong>,{" "}
                <strong>React</strong>, and <strong>Next.js</strong> for an
                enhanced user experience.<br />
                • Optimized back-end systems by refactoring database queries and
                implementing caching mechanisms.<br />
                • Achieved a <strong>30% reduction</strong> in server response
                times through performance improvements.<br />
                • This led to a <strong>15% increase</strong> in customer
                satisfaction ratings and boosted overall application performance.
              </p>
            </div>
          </div>
  
          {/* Backend Developer Intern */}
          <div className="timeline-entry">
            <div className="timeline-dot">
              <span className="timeline-date">Jul 2024 - Oct 2024</span>
            </div>
            <div className="timeline-content">
              <h3>Backend Developer Intern</h3>
              <span>Kamar Pelajar, Brisbane, Australia</span>
              <p>
                • Partnered with front-end developers to integrate user-facing
                elements into applications, enhancing the user experience.<br />
                • Contributed to a 20% increase in customer satisfaction ratings
                due to smoother user interactions.<br />
                • Engineered and maintained robust backend systems with{" "}
                <strong>Laravel</strong>, <strong>PHP</strong>, and{" "}
                <strong>MySQL</strong> for reliable performance. <br />
                • Improved database response time by 40%, benefiting over 500
                daily active users with a faster experience.
              </p>
            </div>
          </div>
  
          {/* Teaching Assistant */}
          <div className="timeline-entry">
            <div className="timeline-dot">
              <span className="timeline-date">Feb 2022 - Dec 2022</span>
            </div>
            <div className="timeline-content">
              <h3>Teaching Assistant</h3>
              <span>University of Indonesia, Jakarta, Indonesia</span>
              <p>
                • <strong>Platform-based Development</strong>: Delivered web,
                mobile, and API content; mentored 30+ students, raising project
                grades by 25%, and organized 20+ support meetings.<br />
                • <strong>Statistics and Probability</strong>: Led content
                delivery, grading, and support sessions, improving student exam
                scores by 20%.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  