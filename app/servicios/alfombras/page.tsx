import ServicePage from "@/components/service/ServicePage";

import { servicesContent } from "@/lib/service-content";

export default function AlfombrasPage() {
  return (
    <ServicePage
      content={servicesContent.alfombras}
    />
  );
}