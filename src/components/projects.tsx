import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const projects = [
  {
    title: "Library Management System with MCP Server",
    description:
      "Built a RESTful library management app with AI-driven API access using MCP server, featuring robust CRUD operations and thorough endpoint testing.",
    stack: ["React.js", "TypeScript", "MCP", "REST API"],
    github: "https://github.com/garvmathur7700/library-mgmt-app",
    live: "#",
  },
  {
    title: "Secure Task Manager API",
    description:
      "Created a secure REST API for task management with JWT authentication, modular MVC architecture, and MongoDB integration.",
    stack: ["Java", "Spring Boot", "JWT", "MongoDB", "MVC"],
    github: "#",
    live: "#",
  },
  {
    title: "Dog Breed Classification using Deep Learning",
    description:
      "Developed a CNN-based model with TensorFlow for dog breed classification, using transfer learning and data augmentation for high accuracy.",
    stack: ["TensorFlow", "CNN", "Python", "Transfer Learning"],
    github: "#",
    live: "#",
  },
  {
    title: "Hotel Management Network Design",
    description:
      "Led a team to design a secure, scalable hotel network in Cisco Packet Tracer with VLANs, OSPF, DHCP, SSH, and enhanced security measures.",
    stack: ["Cisco Packet Tracer", "VLAN", "OSPF", "DHCP", "SSH", "Network Security"],
    github: "https://github.com/garvmathur7700/Hotel-Network-Computer-Networks",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-muted/50 py-20 dark:bg-card md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button asChild variant="outline" size="icon">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
