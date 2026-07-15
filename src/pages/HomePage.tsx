import Card from "../components/ui/Card";
import Navbar from "../components/Navbar";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="bg-background text-primary">
      <Navbar />

      <div className="flex flex-col gap-12 p-8 h-full">
        <About />

        {/* min-h-140 */}

        <div className="py-4 flex flex-row gap-2 flex-wrap">
          <Card
            title="Poll Widget"
            description="Use the self-baseline-last utility to align an item along the container's cross axis pneumonoultramicroscopicsilicovolcanoconiosis such that its baseline aligns with the last baseline in the container. Prefix an align-self utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above. Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis."
            requirements={[
              { id: "1", title: "Vote" },
              { id: "2", title: "Multi Select" },
              { id: "3", title: "Vote Persistency" },
            ]}
          />
          <Card
            title="Poll Widget"
            description="Use the self-baseline-last utility to align an item along the container's cross axis such that its baseline aligns with the last baseline in the container. Prefix an align-self utility with a breakpoint variant like md."
            requirements={[
              { id: "1", title: "Vote" },
              { id: "2", title: "Multi Select" },
              { id: "3", title: "Vote Persistency" },
            ]}
          />
          <Card
            title="Poll Widget"
            description="Use the self-baseline-last utility to align an item along the container's cross axis."
            requirements={[
              { id: "1", title: "Vote" },
              { id: "2", title: "Multi Select" },
              { id: "3", title: "Vote Persistency" },
            ]}
          />
        </div>

        <About />
      </div>
    </div>
  );
};

export default HomePage;
