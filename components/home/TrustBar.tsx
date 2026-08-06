import { Leaf, Truck, ShieldCheck, BadgeCheck } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: Leaf,
      text: "Productos ecológicos",
    },
    {
      icon: Truck,
      text: "Servicio a domicilio",
    },
    {
      icon: BadgeCheck,
      text: "Presupuesto gratuito",
    },
    {
      icon: ShieldCheck,
      text: "Resultados profesionales",
    },
  ];

  return (
    <div className="bg-[#0D1B3D] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-3">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Icon size={18} className="text-[#84CC16]" />
              <span>{item.text}</span>
            </div>
          );
        })}

      </div>
    </div>
  );
}