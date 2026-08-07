import ServicePage from "@/components/service/ServicePage";

import { servicesContent } from "@/lib/service-content";

export default function VehiculosPage() {
  return (
    <ServicePage
      content={servicesContent.vehiculos}
    />
  );
}