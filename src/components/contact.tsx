import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <footer id="contact" className="bg-muted py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-headline text-3xl font-bold">Get in Touch</h2>
        <p className="mb-8 text-muted-foreground">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <div className="mb-8 flex justify-center gap-4">
          <Button asChild variant="outline" size="icon">
            <a href="mailto:garvmathur7700@email.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a
              href="https://linkedin.com/in/garvvmathur"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a
              href="https://github.com/garvmathur7700"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Garv's Gear. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
