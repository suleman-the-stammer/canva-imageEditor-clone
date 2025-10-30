import { Banner } from "./banner";

// Guest / demo mode: no sign-in required.
//
// The Projects and Templates sections are per-user data loaded from the
// Postgres database, so they are intentionally omitted here — a public
// visitor has no saved projects. The banner's "Start creating" button opens
// a blank, database-free editor. If you later connect a database, you can
// bring those sections back:
//
//   import { ProjectsSection } from "./projects-section";
//   import { TemplatesSection } from "./templates-section";
//   ...
//   <TemplatesSection />
//   <ProjectsSection />
export default function Home() {
  return (
    <div className="flex flex-col space-y-6 max-w-screen-xl mx-auto pb-10">
      <Banner />
    </div>
  );
};
