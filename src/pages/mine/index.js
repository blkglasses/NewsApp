import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Mine extends Taro.Component {
  config = {
    window: {
      navigationBarTitleText: '个人中心'
    }
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    // console.log(this.props)
    return (
      <View>
        <Text>123</Text>
      </View>
    )
  }
}
