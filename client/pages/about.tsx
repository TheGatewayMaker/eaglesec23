import { createRoot } from "react-dom/client";
import PageWrapper from "@/components/PageWrapper";
import About from "./About";

const root = createRoot(document.getElementById("root")!);
root.render(
  <PageWrapper>
    <About />
  </PageWrapper>,
);
