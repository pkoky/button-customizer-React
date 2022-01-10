export function ButtonText(props) {
  return (
    <div>
      <label>Button Text</label>
      <input 
        type="text"
        onChange={(e) =>
          props.onChange(e.target.value)
        }
      />
    </div>
  )
} 