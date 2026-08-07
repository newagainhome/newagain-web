import Image from "next/image";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

type GalleryImage = {
  before: string;
  after: string;
  title: string;
};

type ServiceGalleryProps = {
  images: GalleryImage[];
};

export default function ServiceGallery({
  images,
}: ServiceGalleryProps) {
  return (
    <Section>

      <Container>

        <SectionTitle
          badge="Antes y Después"
          title="Resultados reales"
          description="Estas imágenes muestran algunos de los resultados obtenidos por nuestro equipo tras una limpieza profesional."
        />

        <div className="mt-16 space-y-12">

          {images.map((image) => (

            <Card
              key={image.title}
              className="overflow-hidden"
            >

              <div className="grid lg:grid-cols-2">

                <div className="relative">

                  <Image
                    src={image.before}
                    alt={`${image.title} antes`}
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-6 top-6 rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white shadow-lg">

                    ANTES

                  </div>

                </div>

                <div className="relative">

                  <Image
                    src={image.after}
                    alt={`${image.title} después`}
                    width={900}
                    height={700}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-6 top-6 rounded-full bg-green-600 px-5 py-2 text-sm font-bold text-white shadow-lg">

                    DESPUÉS

                  </div>

                </div>

              </div>

              <div className="border-t border-slate-100 p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {image.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Resultado conseguido mediante limpieza profesional y productos ecológicos de alta eficacia.
                </p>

              </div>

            </Card>

          ))}

        </div>

      </Container>

    </Section>
  );
}