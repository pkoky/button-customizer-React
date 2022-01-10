export function BackgoundColor(props) {
  return (
    <div>
      <label>backgroundColor</label>
      <input 
        type="color"
        onChange={(e) => 
          props.onChange(e.target.value)
        }
      />
    </div>
  )
}