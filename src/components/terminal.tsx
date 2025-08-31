
"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { Terminal as TerminalIcon } from "lucide-react";
import { projects } from "./projects";
import { skills } from "./skills";

type Line = {
  type: "input" | "output";
  content: string | React.ReactNode;
};

const HELP_OUTPUT = (
  <div>
    <p>Available commands:</p>
    <ul className="list-inside list-disc">
      <li>
        <span className="font-semibold text-primary">help</span> - Show this
        help message
      </li>
      <li>
        <span className="font-semibold text-primary">projects</span> - Display a
        summary of my projects
      </li>
      <li>
        <span className="font-semibold text-primary">skills</span> - List my
        technical skills
      </li>
      <li>
        <span className="font-semibold text-primary">binary-search</span> - Run
        a binary search simulation
      </li>
      <li>
        <span className="font-semibold text-primary">clear</span> - Clear the
        terminal
      </li>
    </ul>
  </div>
);

const PROJECTS_OUTPUT = (
  <div>
    <p>Here are my projects:</p>
    <ul className="list-inside list-disc">
      {projects.map((project) => (
        <li key={project.title}>
          <span className="font-semibold text-primary">{project.title}</span>
        </li>
      ))}
    </ul>
    <p className="mt-2">Scroll down to see them in detail!</p>
  </div>
);

const SKILLS_OUTPUT = (
  <div>
    <p>Here are my skills:</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill) => (
        <span key={skill.name} className="px-2 py-1 bg-muted rounded-md text-sm">{skill.name}</span>
      ))}
    </div>
    <p className="mt-2">Scroll down for a full list.</p>
  </div>
);

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    {
      type: "output",
      content: "Welcome to Garv's Gear. Type 'help' to see available commands.",
    },
  ]);
  const [input, setInput] = useState("");
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = terminalBodyRef.current;
      // Only scroll if user is near the bottom
      if (scrollHeight - scrollTop - clientHeight < 50) {
        terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
      }
    }
  }, [lines]);


  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runBinarySearch = async (target: number) => {
    const arr = Array.from({ length: 20 }, (_, i) => i + 1);
    let low = 0;
    let high = arr.length - 1;
    let mid : number;
    let found = false;

    const addOutputLine = (content: string) => {
      setLines((prev) => [...prev, { type: "output", content }]);
    };

    addOutputLine(`Searching for ${target} in [${arr.join(", ")}]`);
    await new Promise((res) => setTimeout(res, 500));

    while (low <= high) {
      mid = Math.floor((low + high) / 2);
      const searchVis = arr
        .map((val, i) => {
          if (i < low || i > high)
            return `<span class="opacity-50">${val}</span>`;
          if (i === mid)
            return `<span class="bg-primary text-primary-foreground px-1 rounded">${val}</span>`;
          return val;
        })
        .join(", ");

      addOutputLine(`[${searchVis}] | Mid: ${arr[mid]}`);
      await new Promise((res) => setTimeout(res, 800));

      if (arr[mid] === target) {
        addOutputLine(`Found ${target} at index ${mid}.`);
        found = true;
        break;
      } else if (arr[mid] < target) {
        addOutputLine(`${arr[mid]} < ${target}. Searching right half.`);
        low = mid + 1;
      } else {
        addOutputLine(`${arr[mid]} > ${target}. Searching left half.`);
        high = mid - 1;
      }
      await new Promise((res) => setTimeout(res, 800));
    }

    if (!found) {
      addOutputLine(`${target} not found in the array.`);
    }
  };

  const handleCommand = async (command: string) => {
    let output: string | React.ReactNode = `command not found: ${command}`;
    const newLines: Line[] = [...lines, { type: "input", content: command }];
    setLines(newLines);

    switch (command.toLowerCase()) {
      case "help":
        output = HELP_OUTPUT;
        break;
      case "projects":
        output = PROJECTS_OUTPUT;
        break;
      case "skills":
        output = SKILLS_OUTPUT;
        break;
      case "binary-search":
        setLines((prev) => [...prev, { type: "input", content: command }]);
        await runBinarySearch(Math.floor(Math.random() * 20) + 1);
        return;
      case "clear":
        setLines([]);
        return;
    }
    setLines((prev) => [...prev, { type: "output", content: output }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim()) {
        void handleCommand(input.trim());
        setInput("");
      }
    }
  };

  return (
    <div
      className="mx-auto h-96 w-full max-w-3xl rounded-lg border bg-card text-card-foreground shadow-lg"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 rounded-t-lg bg-muted p-2">
        <TerminalIcon className="h-4 w-4" />
        <p className="text-sm font-semibold">/bin/bash</p>
      </div>
      <div
        ref={terminalBodyRef}
        className="h-[calc(100%-2.5rem)] overflow-y-auto p-4 font-code text-sm"
      >
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === "input" && (
              <div className="flex items-center">
                <span className="mr-2 font-bold text-primary">$</span>
                <span>{line.content}</span>
              </div>
            )}
            {line.type === "output" &&
              (typeof line.content === "string" ? (
                <p dangerouslySetInnerHTML={{ __html: line.content }} />
              ) : (
                <div>{line.content}</div>
              ))}
          </div>
        ))}

        <div className="flex items-center">
          <span className="mr-2 font-bold text-primary">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full border-none bg-transparent p-0 focus:ring-0"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
