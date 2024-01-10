import { ChangeEvent, useState } from "react";


// This component sets a default value for the settings prop, but this is as a backup only.
// Always expect the settings prop to be passed in.
export default function Clock({settings = {colour: "#ff00ff", format: "24"}}): JSX.Element {
  const [clockFormat, setClockFormat] = useState(settings.format);
  const [clockColour, setClockColour] = useState(settings.colour);

  const handleColourChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setClockColour(e.target.value);
  }

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setClockFormat(e.target.value);
  }

  return (
    <section>
      <h3>Clock (displayed inside a pane)</h3>
      <ul>
        <li>
          Text colour: <input type="color" value={clockColour} onChange={handleColourChange} />
        </li>
        <li>
          Clock format:
          <p>
            <label>
              <input 
                type="radio" 
                name="clockFormat" 
                readOnly 
                value="12" 
                defaultChecked={clockFormat === "12" ? true : false}
                onChange={handleRadioChange}
              />12 hour
            </label>
            <label>
              <input 
                type="radio" 
                name="clockFormat" 
                readOnly 
                value="24" 
                defaultChecked={clockFormat === "24" ? true : false} 
                onChange={handleRadioChange}
              />24 hour
            </label>
          </p>
        </li>
      </ul>
    </section>
  )
}