import ServiceBenefits from "@/components/service/ServiceBenefits";
import ServiceGallery from "@/components/service/ServiceGallery";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceProblems from "@/components/service/ServiceProblems";

import { ServiceContent } from "@/lib/service-content";

type ServicePageProps = {
  content: ServiceContent;
};

export default function ServicePage({
  content,
}: ServicePageProps) {
  return (
    <>
      <ServiceHero
        badge={content.hero.badge}
        title={content.hero.title}
        description={content.hero.description}
        image={content.hero.image}
      />

      <ServiceProblems
        problems={content.problems}
      />

      <ServiceBenefits
        benefits={content.benefits}
      />

      {content.gallery.length > 0 && (
        <ServiceGallery
          images={content.gallery}
        />
      )}
    </>
  );
}