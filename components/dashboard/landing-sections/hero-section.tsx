import { handleChangeField } from "@/utils/handle-change-field";
import { SectionProps } from "@/interfaces/section";
import TextField from "../text-field";

export default function HeroSection({ data, setData }: SectionProps) {
  const handleChange = handleChangeField("hero", data, setData);

  return (
    <div className="mt-5">
      <h2 className="mb-4 text-2xl">Hero section</h2>
      <TextField
        label="H1"
        id="hero-h1"
        value={data["hero"]["h1"]}
        handleChange={handleChange("h1")}
      />
      <TextField
        label="Subtitle"
        id="hero-subtitle"
        value={data["hero"]["subtitle"]}
        handleChange={handleChange("subtitle")}
      />
      <div className="flex">
        <div className="shrink-0 w-1/2 pr-2">
          <TextField
            label="Primary link text"
            id="hero-primary-link-text"
            value={data["hero"]["primary-link-text"]}
            handleChange={handleChange("primary-link-text")}
          />
        </div>
        <div className="shrink-0 w-1/2 pl-2">
          <TextField
            label="Primary link url"
            id="hero-primary-link-url"
            value={data["hero"]["primary-link-url"]}
            handleChange={handleChange("primary-link-url")}
          />
        </div>
      </div>
      <div className="flex">
        <div className="shrink-0 w-1/2 pr-2">
          <TextField
            label="Secondary link text"
            id="hero-secondary-link-text"
            value={data["hero"]["secondary-link-text"]}
            handleChange={handleChange("secondary-link-text")}
          />
        </div>
        <div className="shrink-0 w-1/2 pl-2">
          <TextField
            label="Secondary link url"
            id="hero-secondary-link-url"
            value={data["hero"]["secondary-link-url"]}
            handleChange={handleChange("secondary-link-url")}
          />
        </div>
      </div>
    </div>
  );
}
