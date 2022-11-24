import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //inputタグにあるonChangeに値の変更があったのを検知すると作動する
  //event元のvalueをsetTodotextへ格納する
  const onCahngeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    //もし空文字なら追加しない
    if (todoText === "") return;
    //...incompleteTodosで今incompleteTodosに入っている配列の値をコピーし、
    //新たに追加されたtodoTextの値とガッチャンコし、一つの配列にまとめる
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    //追加後は空文字にする
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //spliceで第一引数に指定したインデックス番号の値を第二引数の数だけ削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onCahngeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは5個までだよ！消化しろ！</p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
