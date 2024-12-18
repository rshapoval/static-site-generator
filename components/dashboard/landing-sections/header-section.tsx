import { SectionProps } from "@/interfaces/section";
import { handleChangeField } from "@/utils/handle-change-field";
import TextField from "../text-field";

export default function HeaderSection({ data, setData }: SectionProps) {
  const handleChange = handleChangeField("header", data, setData);

  return (
    <div className="mt-5">
      <h2 className="mb-4 text-2xl">Header section</h2>
      <TextField
        label="Title"
        id="header-title"
        value={data["header"]["title"]}
        handleChange={handleChange("title")}
      />
      <TextField
        label="Subtitle"
        id="header-subtitle"
        value={data["header"]["subtitle"]}
        handleChange={handleChange("subtitle")}
      />
    </div>
  );
}
