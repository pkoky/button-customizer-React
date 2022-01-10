export function Color(props) {
  return (
    <div>
      <label>color</label>
      <input 
        type="color" 
        onChange={(e) => {
          props.onChange(e.target.value)
        }
      }/>
    </div>
  )
}

