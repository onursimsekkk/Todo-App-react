import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoHeader from "./components/TodoHeader/TodoHeader";
import "./App.css";
import Form from "./components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
  }

  // Add Task
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(), 
        content: currentValue,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };
  // Remove Task
  removeItem = (e) => {
    const removeArray = this.state.todos.filter(todo => todo.id != e.target.value);
    this.setState({todos: removeArray}); 
    }    

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className="App">
        <TodoHeader name="TODO" />
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList todos={this.state.todos} removeItem={this.removeItem} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
