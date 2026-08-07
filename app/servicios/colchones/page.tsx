import ServicePage from "@/components/service/ServicePage";

import { servicesContent } from "@/lib/service-content";

export default function ColchonesPage() {
  return (
    <ServicePage
      content={servicesContent.colchones}
    />
  );
}