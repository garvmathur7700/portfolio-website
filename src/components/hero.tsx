import { Terminal } from "./terminal";

export function Hero() {
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 font-headline text-4xl font-bold md:text-6xl">
          Garv's Gear
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Crafting code and solving problems—I'm a software engineer turning ideas into reality.
        </p>
        <Terminal />
      </div>
    </section>
  );
}
