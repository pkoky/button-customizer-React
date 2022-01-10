export function Disabled(props) {
  return (
    <div>
      <label>disabled</label>
      <input 
        type="checkbox"
        onChange={() => 
          props.onChange()
        }
      />
    </div>
  )
}