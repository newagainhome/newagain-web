import ServicePage from "@/components/service/ServicePage";

import { servicesContent } from "@/lib/service-content";

export default function SofasPage() {
  return (
    <ServicePage
      content={servicesContent.sofas}
    />
  );
}