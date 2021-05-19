import { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { RootState } from '../../redux/index'
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {
  dataB: string
}
interface State {

}

class B extends Component<Props, State> {
  state = {}

  toPageA () {
    this.props.history.push('/page-a')
  }

  render () {
    const { dataB } = this.props
    return (
      <div className='class-b'>
        <h1 onClick={this.toPageA.bind(this)}>{dataB}</h1>
      </div>
    )
  }
}

export default connect((states: RootState) => ({
  dataB: states.test.testB
}), {
})(B)
