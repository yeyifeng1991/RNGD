import React, { Component } from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

// 引入第三方框架
import TabNavigator from 'react-native-tab-navigator';
//导入头文件
import Home  from '../home/GDHome';
import HourList  from '../hourList/GDHourList';
import HT   from '../ht/GDHt';

export default class GDMain  extends Component {

// ES6 指定刷新状态
constructor(props){
  super(props);// 一定放在最前面
  // 初始状态
  this.state = {
   selectedTab :'home',
  };

}


// 返回tarbar
// 返回TabBar的Item
    renderTabBarItem(title, selectedTab, image, selectedImage, component) {
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={{color:'black'}}
                renderIcon={() => <Image source={{uri:image}} style={styles.tabbarIconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectedImage}} style={styles.tabbarIconStyle} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}>            
               <Navigator
                        // 设置路由
                    initialRoute={{
                        name:selectedTab,
                        component:component
                    }}  
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                 />
            </TabNavigator.Item>
        );
    }

  render() {
    return (
     <TabNavigator>
          {/*首页*/}
          {this.renderTabBarItem("首页", 'home', 'tabbar_home_30x30', 'tabbar_home_selected_30x30', Home)}
          {/* 海淘 */}
          {this.renderTabBarItem("海淘", 'ht', 'tabbar_abroad_30x30', 'tabbar_abroad_selected_30x30', HT)}
          {/* 小时风云榜 */}
          {this.renderTabBarItem("小时风云榜", 'hourlist', 'tabbar_rank_30x30', 'tabbar_rank_selected_30x30', HourList)}
      </TabNavigator>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // tabbarIconStyle: {
  //       width:Platform.OS === 'ios' ? 30 : 25,
  //       height:Platform.OS === 'ios' ? 30 : 25,
  //   }
  
});
