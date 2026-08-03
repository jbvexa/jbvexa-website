import { ServiceData } from "./servicesData";

interface ServiceHeaderProps {
  data: Pick<ServiceData, "badge" | "title" | "description">;
}

export default function ServiceHeader({
  data,
}: ServiceHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">

      {/* Badge */}
      <span className="inline-flex items-center rounded-full bg-[#19D3B4]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#19D3B4]">
        {data.badge}
      </span>

      {/* Title */}
      <h2 className="mt-6 text-4xl font-bold leading-tight text-[#071B4D] md:text-5xl lg:text-6xl">
        {data.title}
      </h2>

      {/* Description */}
      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
        {data.description}
      </p>

    </div>
  );
}