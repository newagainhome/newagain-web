import ServicePage from "@/components/service/ServicePage";

import { servicesContent } from "@/lib/service-content";

export default function SillasPage() {
  return (
    <ServicePage
      content={servicesContent.sillas}
    />
  );
}