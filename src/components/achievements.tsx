import { Award } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const achievements = [
  {
    title: "Anthropic Model Context Protocol",
    issuer: "Anthropic",
    year: "2025",
  },
  {
    title: "Java Full Stack Development",
    issuer: "Eduskills-AICTE",
    year: "2025",
  },
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    issuer: "Oracle",
    year: "2024",
  },
  {
    title: "AWS Academy Machine Learning Foundations",
    issuer: "AWS Academy",
    year: "2024",
  },
  {
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    year: "2025",
  },
  {
    title: "Cisco Operating Systems Basics",
    issuer: "Cisco",
    year: "2025",
  },
  {
    title: "HackerRank Java Basics",
    issuer: "HackerRank",
    year: "2025",
  },
  {
    title: "Scaler Database Management Course",
    issuer: "Scaler",
    year: "2024",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold md:text-4xl">
          Achievements & Certifications
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((ach) => (
            <Card
              key={ach.title}
              className="flex transform items-center p-6 transition-transform duration-300 hover:scale-105"
            >
              <Award className="mr-6 h-10 w-10 text-primary" />
              <div className="flex-grow">
                <CardTitle className="font-headline text-lg">
                  {ach.title}
                </CardTitle>
                <CardDescription>{ach.issuer}</CardDescription>
              </div>
              <Badge variant="outline">{ach.year}</Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
