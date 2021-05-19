import { RouteProps } from '@types/react-router-dom'

export interface IRouterItem {
  props: RouteProps,
  key?: string
  children?: IRouterItem[]
}
