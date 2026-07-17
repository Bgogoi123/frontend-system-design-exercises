import Button from "./ui/Button";

const About = () => {
  return (
    <div className="flex flex-col gap-12">
      <span className="text-large leading-24" role="heading">
        Frontend System Design Exercises
      </span>

      <div className="text-body-lg max-w-2/3">
        {/* <p>
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
        </p> */}

        <p>
          Frontend System Design Playground A hands-on collection of real-world
          frontend components, built to practice and demonstrate core Frontend
          System Design principles: scalability, reusability, performance, and
          clean architecture.
        </p>
        <p>
          Each exercise here tackles a common UI challenge you'd encounter in
          production apps, following along with{" "}
          <a
            className="text-primary underline"
            href="https://www.youtube.com/watch?v=UtI-MyijX00"
          >
            Roadside Coder's Frontend System Design playlist
          </a>
          . Every component is designed ith extensibility in mind, thinking
          through edge cases, state management, and data persistence, rather
          than just building a quick demo. This is as much about the thinking
          process behind good frontend architecture as it is about the code
          itself.
        </p>
        <p>
          Built with <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>TailwindCSS</strong>, powered by Vite for a fast development
          experience.
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
