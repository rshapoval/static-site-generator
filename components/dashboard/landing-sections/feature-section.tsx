import { SectionProps } from "@/interfaces/section";
import { handleChangeField } from "@/utils/handle-change-field";
import TextField from "../text-field";

export default function FeatureSection({ data, setData }: SectionProps) {
  const handleChange = handleChangeField("feature", data, setData);

  return (
    <div className="mt-5">
      <h2 className="mb-4 text-2xl">Feature section</h2>
      <TextField
        label="Label"
        id="feature-label"
        value={data["feature"]["label"]}
        handleChange={handleChange("label")}
      />
      <TextField
        label="Title"
        id="feature-title"
        value={data["feature"]["title"]}
        handleChange={handleChange("title")}
      />
      <TextField
        label="Subtitle"
        id="feature-subtitle"
        value={data["feature"]["subtitle"]}
        handleChange={handleChange("subtitle")}
      />
    </div>
  );
}
