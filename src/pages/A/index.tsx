import { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { RootState } from '../../redux/index'
import { actions } from '../../redux/reducers/test'
import { Input, Button } from 'antd'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {
  dataA: string,
  setTestB: (data: any) => void
}
interface State {
  inputValue: string
}

class A extends Component<Props, State> {
  state = {
    inputValue: ''
  }

  changeData (e: any) {
    this.setState({
      inputValue: e.target.value
    })
    this.props.setTestB(e.target.value)
  }

  toBPage () {
    this.props.history.push('/page-b')
  }

  render () {
    const { dataA } = this.props
    const { inputValue } = this.state
    return (
      <div className='class-a'>
        <h1>{dataA}</h1>
        <Input value={inputValue} onChange={this.changeData.bind(this)}/>
        <Button type="primary" onClick={this.toBPage.bind(this)}>To B Page</Button>
      </div>
    )
  }
}

export default connect((states: RootState) => ({
  dataA: states.test.testA
}), {
  setTestB: actions.setBData
})(A)
