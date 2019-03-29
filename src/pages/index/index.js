import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Button,
  Text,
  Image,
  Input,
  ScrollView
} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCard } from 'taro-ui'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'
import topuser from '../../assets/images/topuser.png'
import ic_search from '../../assets/images/ic_search.png'
import plus from '../../assets/images/plus.png'
import './index.scss'
import ArticleCard from '../../components/articleCard'

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      tabIndex: 0,
      scrolltop: 0,
      loadStatus: 0,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }

  onChange(val) {
    console.log(val)
  }

  handleClick(val) {
    this.setState({
      tabIndex: val
    })
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onScroll(event) {
    // console.log(event)
    // console.log(this.state.scrolltop)
    console.log(this.refs.articleScroll)
  }

  onScrollToLower() {
    let top = this.refs.articleScroll._scrollTop
    if (this.state.loadStatus === 2) {
      if (this.refs.articleScroll._scrollTop === top) {
        console.log(1)
        this.setState({
          scrolltop: top - 50
        })
      }
    }
    this.setState(
      {
        loadStatus: 1
      },
      () => {
        let arr = this.state.list.push.apply(this.state.list, [1, 2, 3, 4])
        this.setState(
          {
            list: arr,
            loadStatus: 0
          },
          () => {
            if (this.state.loadStatus === 2) {
              if (this.refs.articleScroll._scrollTop === top) {
                console.log(1)
                this.setState({
                  scrolltop: top - 50
                })
              }
            }
          }
        )
        setTimeout(() => {
          if (this.refs.articleScroll._scrollTop === top) {
            console.log(1)
            this.setState({
              scrolltop: top - 50
            })
          }
        }, 1000)
      }
    )

    // console.log(this.refs.articleScroll._scrollTop)
  }

  render() {
    return (
      <View className="index">
        <View className="top-container at-row">
          <View className="top-left-container at-col">
            <Image className="top-left-images at-row" src={topuser} />
            <Text className="top-text at-row">请登录</Text>
          </View>
          <View className="at-col at-col-9 search-container">
            <Image className="img_search at-col" src={ic_search} />
            <Input
              className="top-input at-col"
              placeholder="请输入搜索关键字"
            />
            <Button className="search-button at-col">
              <Text className="search-button-text">搜索</Text>
            </Button>
          </View>
          <View className="top-right-container at-col">
            <Image className="top-right-images at-row" src={plus} />
            <Text className="top-text at-row">发布</Text>
          </View>
        </View>
        <View className="topTabs">
          <AtTabs
            scroll
            // swipeable
            tabList={[
              { title: '标签页1' },
              { title: '标签页2' },
              { title: '标签页3' },
              { title: '标签页4' }
            ]}
            current={this.state.tabIndex}
            onClick={this.handleClick.bind(this)}
          >
            <AtTabsPane
              current={this.state.tabIndex}
              index={0}
              style="height:100%;"
              ref="scrollContainer"
              className="tab-item"
            >
              <ScrollView
                scrollY
                style="height:100%;"
                ref="articleScroll"
                lowerThreshold={50}
                scrollTop={this.state.scrolltop}
                onScroll={this.onScroll.bind(this)}
                onScrollToLower={this.onScrollToLower.bind(this)}
              >
                {this.state.list.map((item, index) => (
                  <ArticleCard />
                ))}
                <View className="loadmore-container">
                  <Text className="loadText">
                    {this.state.loadStatus === 0 && '加载更多'}
                    {this.state.loadStatus === 1 && '正在加载'}
                    {this.state.loadStatus === 2 && '没有更多'}
                  </Text>
                  {this.state.loadStatus === 1 && <View className="loader8" />}
                </View>
              </ScrollView>
            </AtTabsPane>
            <AtTabsPane current={this.state.tabIndex} index={1}>
              <View>
                <Text>2</Text>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.tabIndex} index={2}>
              <View>
                <Text>3</Text>
              </View>
            </AtTabsPane>
            <AtTabsPane current={this.state.tabIndex} index={3}>
              <View>
                <Text>4</Text>
              </View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}
