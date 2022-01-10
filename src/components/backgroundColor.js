// コンポーネントのファイル名の最初の文字を、大文字に変更しました。
// 自分で定義したcomponentは大文字から始める必要がありますが、それに合わせて慣例としてファイル名も大文字から始めることが多いように思います。
// https://ja.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized

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
