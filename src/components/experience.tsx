const experiences = [
  {
    role: "SDE Intern",
    company: "Nissan Digital India",
    date: "July 2025 - Present",
    description:
      "Automated frontend testing with Playwright in TypeScript, integrated tests with Jenkins for CI/CD, enabled AI features via MCP server, and collaborated in Agile sprints.",
  },
  {
    role: "Web Development Intern",
    company: "Raise Digital",
    date: "March 2025 - May 2025",
    description:
      "Developed and optimized web application UIs with React.js, collaborating with mentors to enhance design, performance, and accessibility.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center font-headline text-3xl font-bold md:text-4xl">
          Experience
        </h2>
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border" />
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 pl-12">
              <div className="absolute -translate-x-1/2 left-4 top-1 h-4 w-4 rounded-full border-4 border-background bg-primary" />
              <p className="text-sm text-muted-foreground">{exp.date}</p>
              <h3 className="mt-1 font-headline text-xl font-bold">
                {exp.role}
              </h3>
              <p className="font-semibold text-primary">{exp.company}</p>
              <p className="mt-2 text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
