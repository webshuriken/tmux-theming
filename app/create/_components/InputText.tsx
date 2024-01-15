import { ChangeEvent, useState } from "react";


export default function InputText({
  label = "Text",
  value = ""
}): JSX.Element {
  const [textValue, setTextValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <section>
      <label>
        {label}
        <input type="text" defaultValue={textValue} />
      </label>
    </section>
  );
}