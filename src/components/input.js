export function Input(props) {
  const buttonStyle = {
    color: props.textColor,
    background: props.backGround,
    opacity: props.opacity,
    borderRadius: props.borderRadius + '%',
    fontSize: props.fontSize + 'px',
  }
  return (
    <div>
      <input type="button" value={props.buttonText} style={ buttonStyle } disabled={props.isDisabled}/>
    </div>
  )
}