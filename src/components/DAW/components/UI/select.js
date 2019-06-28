import React, {
  useState,
  useEffect,
} from 'react';

export const Select = ({options, defaultValue}) => {
  const [option, setOption] = useState('');
  useEffect(() => {
  })
  return (
    <div>
      <select onChange={e => setOption(e.target.value)}>
        <option> -- {defaultValue} -- </option>
          {options.map((option, i) => (
            <option
              key={i}
              value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  )
}
