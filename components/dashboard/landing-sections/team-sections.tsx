import { SectionProps } from "@/interfaces/section";
import { handleChangeField } from "@/utils/handle-change-field";
import { handleChangeMultipleFields } from "@/utils/handle-change-multiple-fields";
import TextField from "../text-field";
import TripleTextField from "../triple-text-field";

export default function TeamSection({ data, setData }: SectionProps) {
  const handleChange = handleChangeField("team", data, setData);
  const handleMultipleFields = handleChangeMultipleFields(
    "team",
    data,
    setData,
  );

  return (
    <div className="mt-5">
      <h2 className="mb-4 text-2xl">Team section</h2>
      <TextField
        label="Title"
        id="team-title"
        value={data["team"]["title"]}
        handleChange={handleChange("title")}
      />
      <TextField
        label="Subtitle"
        id="team-subtitle"
        value={data["team"]["subtitle"]}
        handleChange={handleChange("subtitle")}
      />
      <TripleTextField
        idPrefix="team"
        label1="Img"
        label2="Title"
        label3="Text"
        data={data["team"]["team"]}
        onChange={handleMultipleFields("team")}
      />
      <hr />
    </div>
  );
}
