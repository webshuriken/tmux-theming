import { ChangeEvent, useState } from 'react';


export default function InputColour({
  label = 'Colour',
  value = '#000000'
}): JSX.Element {
  const [colour, setColour] = useState(value);

  function handleColourChange(e: ChangeEvent<HTMLInputElement>): void {
    setColour(e.target.value);
  }

  return (
    <label>
      {label}
      <input type="color" value={colour} />
    </label>
  )
}