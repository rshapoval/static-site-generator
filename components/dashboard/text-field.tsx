interface TextFieldProps {
  label: string;
  id: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function TextField({
  label,
  id,
  value,
  handleChange,
  placeholder = "Enter some text...",
}: TextFieldProps) {
  return (
    <>
      <label className="block mb-2 cursor-pointer" htmlFor={id}>
        {label}
      </label>
      <input
        className="block mb-4 w-full p-2 rounded-md border border-sky-300 focus:border-sky-500 outline-0 transition-colors"
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </>
  );
}
