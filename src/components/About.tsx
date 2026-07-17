import Button from "./ui/Button";

const About = () => {
  return (
    <div className="flex flex-col gap-12">
      <span className="text-large leading-24" role="heading">
        Frontend System Design Exercises
      </span>

      <div className="text-body-lg max-w-2/3">
        <p>
          This is an Frontend application for practicing{" "}
          <strong>Frontend System Design</strong> from{" "}
          <a
            className="text-cyan-700 underline"
            href="https://www.youtube.com/watch?v=UtI-MyijX00"
          >
            Roadside Coder's Youtube Playlist.
          </a>
        </p>
        <p>
          The Tech Stack used here is: React, TypeScript, and TailwindCSS, along
          with Vite for build tool.
        </p>
        <p>
          Vite is a build tool that aims to provide a faster and leaner
          development experience for modern web projects. Vite is opinionated
          and comes with sensible defaults out of the box. Read about what's
          possible in the Features Guide. Support for frameworks or integration
          with other tools is possible through Plugins. The Config Section
          explains how to adapt Vite to your project if needed.
        </p>
      </div>

      <div className="flex flex-row gap-2">
        <Button variant="contained">GitHub</Button>
        <Button variant="outlined">Demo</Button>
      </div>
    </div>
  );
};

export default About;
