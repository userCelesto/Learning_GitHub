import { Select, FormControl, MenuItem } from "@mui/material"
import { useState } from "react";

const CalendarDropDown = ({Classes}) => {
    const [selectedOption, setSelectedOption] = useState(0);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value)
    };
  return (
    <FormControl className="sm:w-full md:w-85" variant="outlined">
        <Select
        labelId="dropdown-label"
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        >
        {Classes.map((Class, Class_code) => (
            <MenuItem value={Class_code}>{Class}</MenuItem>
        ))}
        </Select>
    </FormControl>
  )
}

export default CalendarDropDown