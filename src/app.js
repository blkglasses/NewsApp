import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {
  config = {
    pages: ['pages/index/index', 'pages/mine/index', 'pages/news/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '正在加载。。。',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/images/blkhouse.png',
          selectedIconPath: './assets/images/redhouse.png'
        },
        {
          pagePath: 'pages/news/index',
          text: '微头条',
          iconPath: './assets/images/blkbubble.png',
          selectedIconPath: './assets/images/redbubble.png'
        },
        {
          pagePath: 'pages/mine/index',
          text: '我的',
          iconPath: './assets/images/blkuser.png',
          selectedIconPath: './assets/images/reduser.png'
        }
      ],
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      color: '#000000',
      selectedColor: '#ff2b3f'
    }
  }

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
