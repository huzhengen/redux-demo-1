const defaultState = {
  inputValue: 'Write Something',
  list: [
    '早上4点起床，锻炼身体',
    '中午下班游泳一小时'
  ]
}

export default (state = defaultState, action) => {
  if (action.type === 'changeInput') {
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    newState.inputValue = action.value
    return newState
  }

  if (action.type === 'addItem') { //根据type值，编写业务逻辑
    console.log(state);
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)  //push新的内容到列表中去
    newState.inputValue = ''
    return newState
  }

  if (action.type === 'deleteItem') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)  //删除数组中对应的值
    return newState
  }

  return state
}