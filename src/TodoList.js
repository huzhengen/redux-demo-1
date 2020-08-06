import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  changeInputValue = e => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  storeChange = () => {
    this.setState(store.getState())
  }

  clickBtn = () => {
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem = index => {
    console.log(index);
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        deleteItem={this.deleteItem}
      />
    );
  }
}
export default TodoList;