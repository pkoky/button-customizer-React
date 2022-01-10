export function Opacity(props) {
  return (
    <div>
      <label>opacity</label>
      <input 
        type="range" min="0" max="1" step="0.1" value={props.opacity}
        onChange={(e) => 
          props.onChange(e.target.value)
        }
      />
      <span>{props.opacity}</span>
    </div>
  )
}