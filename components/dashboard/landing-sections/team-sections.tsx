import { SectionProps } from "@/interfaces/section";
import { handleChangeField } from "@/utils/handle-change-field";
import TextField from "../text-field";

export default function TeamSection({ data, setData }: SectionProps) {
  const handleChange = handleChangeField("team", data, setData);

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
    </div>
  );
}
