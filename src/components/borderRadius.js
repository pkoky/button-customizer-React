export function BorderRadius(props) {
  return (
    <div>
      <label>borderRadius</label>
      <input 
        type="range" min="10" max="50" step="1" value={props.borderRadius}
        onChange={(e) => 
          props.onChange(e.target.value)
        }
      />
      <span>{ props.borderRadius }</span>
      <div style={{ height: 40, width: 40, background: 'blue', borderRadius: props.borderRadius + '%'}}></div>
    </div>
  )
}