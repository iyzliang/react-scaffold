import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './index.scss'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import router from './router/index'
import { Provider } from 'react-redux'
import store from './redux/index'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {
            router.map((routeItem, index) => <Route key={routeItem.key || `route_app_${index}`} {...routeItem.props}/>)
          }
        </Switch>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
