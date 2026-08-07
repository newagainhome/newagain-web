import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

import { locations } from "@/lib/locations";

export default function ServiceCoverage() {
  const featuredLocations = locations.filter(
    (location) => location.featured
  );

  return (
    <Section>
      <Container>

        <SectionTitle
          badge="📍 Cobertura"
          title="Trabajamos en toda la Comunidad de Madrid"
          description="Nos desplazamos a domicilio para realizar limpiezas profesionales en toda la Comunidad de Madrid."
        />

        <div className="mt-12 flex flex-wrap gap-3">

          {featuredLocations.map((location) => (
            <span
              key={location.slug}
              className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700"
            >
              {location.name}
            </span>
          ))}

        </div>

        <p className="mt-10 text-center text-slate-600">
          ¿Tu municipio no aparece? También prestamos servicio en el resto de localidades de la Comunidad de Madrid.
        </p>

      </Container>
    </Section>
  );
}