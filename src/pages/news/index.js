import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class News extends Taro.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <Text>头条</Text>
      </View>
    )
  }
}
