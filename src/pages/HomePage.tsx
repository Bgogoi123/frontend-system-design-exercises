import ComponentCard from "../components/ui/ComponentCard";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 px-8 py-18 h-full">
      <About />

      <div className="py-4 flex flex-row gap-2 flex-wrap">
        <ComponentCard
          description="Use the self-baseline-last utility to align an item along the container's cross axis pneumonoultramicroscopicsilicovolcanoconiosis such that its baseline aligns with the last baseline in the container. Prefix an align-self utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above. Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis."
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
