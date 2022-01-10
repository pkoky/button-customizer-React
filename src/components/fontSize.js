export function FontSize(props) {
  return (
    <div>
      <label>fontSize</label>
      <input
      // min, max, step属性もpropsから設定できるようにするのもいいかもしれません。
      // App componentからFontSizeを呼び出すときに渡してあげる感じですね。
        type="range" min={props.min} max={props.max} step={props.step} value={props.fontSize}
        onChange={(e) =>
          props.onChange(e.target.value)
        }
      />
      <span>{ props.fontSize }</span>
    </div>
  )
}
