import { ChangeEvent, useState } from "react";


export default function InputSelect({
  label = "Select",
  name = "select",
  options = {list: ["one", "two"], selected: "one"}
}): JSX.Element {
  const [selectOptions, setSelectOptions] = useState(options);

  // uses the React.ChangeEvent type but we are using onInput instead of onChange
  function handleInput(e: ChangeEvent<HTMLSelectElement>) {
    setSelectOptions(() => ({
      ...selectOptions,
      selected: e.target.value
    
    }));
  }

  return (
    <label>{label}
      <select
        name={name}
        onInput={handleInput}
      >
        {
          options.list.map((option) => {
            return (
              <option
                key={option}
                value={option}
                selected={option === options.selected}
              >
                {option}
              </option>
            )
          })
        }
      </select>
    </label>
  )
}