import { HeroData, PageData } from "@/app/interfaces/page";
import TextField from "../text-field";
import { ChangeEvent } from "react";

interface HeroSectionProps {
  data: PageData;
  setData: (newData: PageData) => void;
}

export default function HeroSection({ data, setData }: HeroSectionProps) {
  const handleChange =
    (field: keyof HeroData) => (event: ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        hero: {
          ...data.hero,
          [field]: event.target.value,
        },
      });
    };

  return (
    <div className="mt-4">
      <TextField
        label="H1"
        id="h1"
        value={data["hero"]["h1"]}
        handleChange={handleChange("h1")}
      />
      <TextField
        label="Subtitle"
        id="subtitle"
        value={data["hero"]["subtitle"]}
        handleChange={handleChange("subtitle")}
      />
      <div className="flex">
        <div className="shrink-0 w-1/2 pr-2">
          <TextField
            label="Primary link text"
            id="primary-link-text"
            value={data["hero"]["primary-link-text"]}
            handleChange={handleChange("primary-link-text")}
          />
        </div>
        <div className="shrink-0 w-1/2 pl-2">
          <TextField
            label="Primary link url"
            id="primary-link-url"
            value={data["hero"]["primary-link-url"]}
            handleChange={handleChange("primary-link-url")}
          />
        </div>
      </div>
      <div className="flex">
        <div className="shrink-0 w-1/2 pr-2">
          <TextField
            label="Secondary link text"
            id="secondary-link-text"
            value={data["hero"]["secondary-link-text"]}
            handleChange={handleChange("secondary-link-text")}
          />
        </div>
        <div className="shrink-0 w-1/2 pl-2">
          <TextField
            label="Secondary link url"
            id="secondary-link-url"
            value={data["hero"]["secondary-link-url"]}
            handleChange={handleChange("secondary-link-url")}
          />
        </div>
      </div>
    </div>
  );
}
