import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class ArticleCard extends Taro.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View className="card-container">
        <View className="card-title-container">
          <Text className="card-title">
            习近平结束对意大利共和国、摩纳哥公国、法兰西共和国国事访问回到北京
          </Text>
        </View>
        {/* <View className="card-content">
          <Text>content</Text>
        </View> */}
        <View className="card-tips">
          <Text>
            <Text className="card-tips-text tips-top-text">置顶</Text>
            <Text className="card-tips-text tips-text">新闻网客户端</Text>
            <Text className="card-tips-text tips-text">770评论</Text>
            <Text className="card-tips-text tips-text">38分钟前</Text>
          </Text>
        </View>
      </View>
    )
  }
}
