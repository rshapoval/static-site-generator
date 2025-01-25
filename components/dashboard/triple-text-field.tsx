import React from "react";
import TextField from "./text-field";

interface TextFieldData {
  id: number;
  value1: string;
  value2: string;
  value3: string;
}

export type TripleTextFieldsData = TextFieldData[];

interface TripleTextFieldProps {
  idPrefix: string;
  label1: string;
  label2: string;
  label3: string;
  data: TextFieldData[];
  onChange: (updatedData: TextFieldData[]) => void;
}

export default function TripleTextField({
  idPrefix,
  label1,
  label2,
  label3,
  data,
  onChange,
}: TripleTextFieldProps) {
  const handleChange = (
    id: number,
    field: "value1" | "value2" | "value3",
    newValue: string,
  ) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: newValue } : item,
    );
    onChange(updatedData);
  };

  const handleAddField = () => {
    const newField = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
      value1: "",
      value2: "",
      value3: "",
    };
    onChange([...data, newField]);
  };

  const handleRemoveField = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    onChange(updatedData);
  };

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="lg:flex items-center gap-4">
          <TextField
            label={label1}
            id={`${idPrefix}-value1-${item.id}`}
            value={item.value1}
            handleChange={(e) =>
              handleChange(item.id, "value1", e.target.value)
            }
          />
          <TextField
            label={label2}
            id={`${idPrefix}-value2-${item.id}`}
            value={item.value2}
            handleChange={(e) =>
              handleChange(item.id, "value2", e.target.value)
            }
          />
          <TextField
            label={label3}
            id={`${idPrefix}-value3-${item.id}`}
            value={item.value3}
            handleChange={(e) =>
              handleChange(item.id, "value3", e.target.value)
            }
          />
          <button
            type="button"
            className="button bg-red-600"
            onClick={() => handleRemoveField(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      ))}
      <div className="flex items-center mb-6">
        <button
          type="button"
          className="button mb-0 bg-sky-600"
          onClick={handleAddField}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <p className="ml-3">Add fields</p>
      </div>
    </>
  );
}
