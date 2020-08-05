import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState();
    store.subscribe(this.storeChange) //订阅Redux的状态
  }

  changeInputValue = e => {
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
  }

  storeChange = () => {
    this.setState(store.getState())
  }

  clickBtn = () => {
    const action = {
      type: 'addItem',
      value: this.state
    }
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
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
    );
  }
}
export default TodoList;