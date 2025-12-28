import { createRoot } from "react-dom/client";
import PageWrapper from "@/components/PageWrapper";
import WhyChooseUs from "./WhyChooseUs";

const root = createRoot(document.getElementById("root")!);
root.render(
  <PageWrapper>
    <WhyChooseUs />
  </PageWrapper>
);
