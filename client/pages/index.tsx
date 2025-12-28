import { createRoot } from "react-dom/client";
import PageWrapper from "@/components/PageWrapper";
import Index from "./Index";

const root = createRoot(document.getElementById("root")!);
root.render(
  <PageWrapper>
    <Index />
  </PageWrapper>
);
