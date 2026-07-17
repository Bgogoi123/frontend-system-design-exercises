import ComponentCard from "../components/ui/ComponentCard";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 px-8 py-18 h-full">
      <About />

      <div className="py-4 flex flex-row gap-2 flex-wrap">
        <ComponentCard
          description="A scalable poll widget component with features like scalability, sinlge/multiple voting, vote addition & removal,persistent data, and more."
          src="/poll-widget"
          title="Poll Widget"
          requirements={[
            { id: "1", title: "Vote" },
            { id: "2", title: "Multi Select" },
            { id: "3", title: "Vote Persistency" },
          ]}
        />
      </div>
    </div>
  );
};

export default HomePage;
