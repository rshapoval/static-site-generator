import { SectionProps } from "@/interfaces/section";
import { handleChangeDualField } from "@/utils/handle-change-dual-field";
import DualTextField from "../dual-text-field";

export default function StatsSection({ data, setData }: SectionProps) {
  const handleDualTextField = handleChangeDualField("stats", data, setData);

  return (
    <div className="mt-5">
      <h2 className="mb-4 text-2xl">Stats section</h2>
      <DualTextField
        idPrefix="stats"
        label1="Title"
        label2="Text"
        data={data["stats"]["stats"]}
        onChange={handleDualTextField("stats")}
      />
      <hr />
    </div>
  );
}
