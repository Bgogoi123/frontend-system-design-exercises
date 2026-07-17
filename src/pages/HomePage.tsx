import Card from "../components/ui/Card";
import About from "../components/About";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 px-8 py-18 h-full">
      <About />

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

      {/* Dummy Text */}
      <>
        <h3 className="p-0 text-h3">Dummy Text</h3>

        <p>
          Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
          occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
          occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu
          dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut
          cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure
          quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint
          voluptate sunt elit mollit officia ad enim sit consectetur enim.
        </p>

        <p>
          Ship faster: Over 2,500 open-source contributors have poured countless
          hours into these components. Focus on your core business logic instead
          of reinventing the wheel—we've got your UI covered. Beautiful by
          default: We're meticulous about our implementation of Material Design,
          ensuring that every Material UI component meets the highest standards
          of form and function, but diverge from the official spec where
          necessary to provide multiple great options. Customizability: The
          library includes an extensive set of intuitive customizability
          features. The templates in our store demonstrate how far you can go
          with customization. Cross-team collaboration: Material UI's intuitive
          developer experience reduces the barrier to entry for back-end
          developers and less technical designers, empowering teams to
          collaborate more effectively. The design kits streamline your workflow
          and boost consistency between designers and developers. Trusted by
          thousands of organizations: Material UI has the largest UI community
          in the React ecosystem. It's almost as old as React itself—its history
          stretches back to 2014—and we're in this for the long haul. You can
          count on the community's support for years to come (for example Stack
          Overflow).
        </p>
      </>
    </div>
  );
};

export default HomePage;
