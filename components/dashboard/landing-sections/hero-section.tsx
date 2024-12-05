import TextField from "../text-field";

export default function HeroSection() {
  return (
    <div className="mt-4">
      <TextField label="H1" id="h1" value="" handleChange={(event) => {}} />
      <TextField
        label="Subtitle"
        id="subtitle"
        value=""
        handleChange={(event) => {}}
      />
      <div className="flex">
        <div className="shrink-0 w-1/2 pr-2">
          <TextField
            label="Primary link text"
            id="primary-link-text"
            value=""
            handleChange={(event) => {}}
          />
        </div>
        <div className="shrink-0 w-1/2 pl-2">
          <TextField
            label="Primary link url"
            id="primary-link-url"
            value=""
            handleChange={(event) => {}}
          />
        </div>
      </div>
      <div className="flex">
        <div className="shrink-0 w-1/2 pr-2">
          <TextField
            label="Secondary link text"
            id="secondary-link-text"
            value=""
            handleChange={(event) => {}}
          />
        </div>
        <div className="shrink-0 w-1/2 pl-2">
          <TextField
            label="Secondary link url"
            id="secondary-link-url"
            value=""
            handleChange={(event) => {}}
          />
        </div>
      </div>
    </div>
  );
}
