import { SectionProps } from "@/interfaces/section";
import { handleChangeField } from "@/utils/handle-change-field";
import { handleChangeDualField } from "@/utils/handle-change-dual-field";
import TextField from "../text-field";
import DualTextField from "../dual-text-field";

export default function FeatureSection({ data, setData }: SectionProps) {
  const handleChange = handleChangeField("feature", data, setData);
  const handleDualTextField = handleChangeDualField("feature", data, setData);

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
      <h3 className="mb-4 text-lg">Features</h3>
      <DualTextField
        idPrefix="feature"
        label1="Title"
        label2="Text"
        data={data["feature"]["features"]}
        onChange={handleDualTextField("features")}
      />
      <hr />
    </div>
  );
}
