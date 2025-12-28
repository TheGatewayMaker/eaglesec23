import { createRoot } from "react-dom/client";
import PageWrapper from "@/components/PageWrapper";
import Services from "./Services";

const root = createRoot(document.getElementById("root")!);
root.render(
  <PageWrapper>
    <Services />
  </PageWrapper>,
);
