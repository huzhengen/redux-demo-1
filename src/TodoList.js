import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'

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
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  render() {
    return (
      <div style={{ margin: '10px' }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputValue}
          />
          <Button
            type="primary"
            onClick={this.clickBtn}
          >增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}
export default TodoList;