import { notFound } from "next/navigation";

import { servicesContent } from "@/lib/service-content";
import { locations } from "@/lib/locations";

type Props = {
  params: Promise<{
    service: string;
    location: string;
  }>;
};

export default async function LocalServicePage({ params }: Props) {
  const { service, location } = await params;

  const serviceData = servicesContent[service];

  const locationData = locations.find(
    (item) => item.slug === location
  );

  if (!serviceData || !locationData) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl p-10">

      <h1 className="text-4xl font-bold">
        {serviceData.name} en {locationData.name}
      </h1>

      <p className="mt-4 text-xl text-slate-600">
        {serviceData.hero.description}
      </p>

      <div className="mt-10 rounded-2xl border border-slate-200 p-6">

        <h2 className="text-2xl font-bold">
          Información de la localidad
        </h2>

        <ul className="mt-4 space-y-2">

          <li>
            <strong>Provincia:</strong> {locationData.province}
          </li>

          <li>
            <strong>Comunidad:</strong> {locationData.autonomousCommunity}
          </li>

          <li>
            <strong>Tipo:</strong> {locationData.type}
          </li>

          {locationData.population && (
            <li>
              <strong>Población:</strong>{" "}
              {locationData.population.toLocaleString("es-ES")}
            </li>
          )}

        </ul>

      </div>

    </main>
  );
}