import React, { useState } from 'react';
import "./TodoItem.css";




function TodoItem(props) {
  const { content } = props;
  const [isFinish, setIsFinish] = useState(false);

  const finisher = (e) => {
    setIsFinish(!isFinish);
    e.stopPropagation();
  }

  return (
  <div className="todoItem">
    <div  className={isFinish ? "finishedTask" : ""}> {content} </div>
    <div>
      <button onClick={finisher} className={ isFinish ? "btn btn-warning mr-1" : "btn btn-success mr-1" }>
       {isFinish ? "İptal" : "Bitti"}
      </button>
      <button className="btn btn-danger">Sil</button> 
    </div>
  </div>
  );
}

export default TodoItem;
