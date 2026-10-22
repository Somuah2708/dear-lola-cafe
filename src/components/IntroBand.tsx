import { site } from "@/lib/site";

const tags = ["Small-Batch Bakes", "Courtyard Garden", "Café + Shop", site.hours.short];

export default function IntroBand() {
  return (
    <div className="intro-band">
      <div className="container-x intro-band-inner">
        {tags.map((t) => (
          <span key={t} className="intro-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
