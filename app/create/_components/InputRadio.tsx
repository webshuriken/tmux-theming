import { ChangeEvent, useState } from "react";


export default function InputRadio({
  label = "Radio",
  name = "radio",
  value = "radio",
  checked = false,
}): JSX.Element {
  const [radio, setRadio] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };

  return (
    <label>
      <input
        type="radio"
        name={name}
        value={radio}
        checked={radio === "radio"}
        defaultChecked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
}