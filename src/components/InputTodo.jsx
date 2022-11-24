import React from "react";

export const InputTodo = (props) => {
  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      {/* onChangeでinputに値が入ったときに検知する */}
      {/* disabledがtrueだと見えなくなる */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      {/* onClick内にクリックした時の処理を定義 */}
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
