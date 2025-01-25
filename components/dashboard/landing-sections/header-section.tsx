import { SectionProps } from "@/interfaces/section";
import { handleChangeMultipleFields } from "@/utils/handle-change-multiple-fields";
import { handleChangeField } from "@/utils/handle-change-field";
import TextField from "../text-field";
import DualTextField from "../dual-text-field";

export default function HeaderSection({ data, setData }: SectionProps) {
  const handleChange = handleChangeField("header", data, setData);
  const handleMultipleFields = handleChangeMultipleFields(
    "header",
    data,
    setData,
  );

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
      <h3 className="mb-4 text-lg">Links</h3>
      <DualTextField
        idPrefix="header-links"
        label1="Text"
        label2="url"
        data={data["header"]["links"]}
        onChange={handleMultipleFields("links")}
      />
      <h3 className="mb-4 text-lg">Stats</h3>
      <DualTextField
        idPrefix="header-stats"
        label1="Title"
        label2="Text"
        data={data["header"]["stats"]}
        onChange={handleMultipleFields("stats")}
      />
      <hr />
    </div>
  );
}
