import { useState } from "react";


export default function Clock({defaultClockFormat = 24, defaultClockColour = "#ff00ff"}) {
  const [clockFormat, setClockFormat] = useState(defaultClockFormat);
  const [clockColour, setClockColour] = useState(defaultClockColour);

  function handleColourChange(e) {
    setClockColour(e.target.value);
  }

  // TODO: Add a function to handle the radio button change event
  // Function should update a prop passed from the parent component
  function handleRadioChange(e) {
    console.log("Radio Event: ", e.target.value);
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
                defaultChecked={clockFormat === 12 ? true : false}
                onChange={handleRadioChange}
              />12 hour
            </label>
            <label>
              <input 
                type="radio" 
                name="clockFormat" 
                readOnly 
                value="24" 
                defaultChecked={clockFormat === 24 ? true : false} 
                onChange={handleRadioChange}
              />24 hour
            </label>
          </p>
        </li>
      </ul>
    </section>
  )
}