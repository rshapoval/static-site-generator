import { SectionProps } from "@/interfaces/section";
import { handleChangeField } from "@/utils/handle-change-field";
import TextField from "../text-field";

export default function ContactSection({ data, setData }: SectionProps) {
  const handleChange = handleChangeField("contact", data, setData);

  return (
    <div className="mt-5">
      <h2 className="mb-4 text-2xl">Contact section</h2>
      <TextField
        label="Title"
        id="contact-title"
        value={data["contact"]["title"]}
        handleChange={handleChange("title")}
      />
      <TextField
        label="Subtitle"
        id="contact-subtitle"
        value={data["contact"]["subtitle"]}
        handleChange={handleChange("subtitle")}
      />
    </div>
  );
}
