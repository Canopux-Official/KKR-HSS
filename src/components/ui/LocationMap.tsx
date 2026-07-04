import { cn } from "@/lib/utils";

interface LocationMapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
  className?: string;
}

export function LocationMap({
  latitude,
  longitude,
  zoom = 17,
  title = "School location on Google Maps",
  className,
}: LocationMapProps) {
  const center = `${latitude},${longitude}`;
  const src = `https://www.google.com/maps?q=${center}&ll=${center}&z=${zoom}&output=embed`;

  return (
    <div
      className={cn(
        "w-full aspect-[16/9] overflow-hidden border border-border bg-beige-warm",
        className
      )}
    >
      <iframe
        title={title}
        src={src}
        className="h-full w-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
