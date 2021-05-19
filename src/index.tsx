import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.scss'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { Router, Switch, Route } from 'react-router-dom'
import router from './router/index'
import history from './router/history'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router history={history}>
      <Switch>
        {
          router.map((routeItem, index) => <Route key={routeItem.key || `route_app_${index}`} {...routeItem.props}/>)
        }
      </Switch>
    </Router>
  </ConfigProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
