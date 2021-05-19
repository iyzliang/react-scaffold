import { Component } from 'react'
import { Button } from 'antd'

interface Props {

}
interface State {

}

export default class App extends Component<Props, State> {
  state = {}

  render () {
    return (
      <div>
        App
        <Button>点击</Button>
      </div>
    )
  }
}
