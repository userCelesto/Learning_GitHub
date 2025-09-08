import { Switch } from "@mui/material"

const ToggleRow = ({label, checked, onChange}) => {
  return (
    <label className="flex justify-between items-center mb-6 cursor-pointer">
        <div className="font-semibold text-sm leading-5">{label}</div>
        <Switch checked={checked} onChange={onChange} color="primary" />
    </label>
  )
}

export default ToggleRow