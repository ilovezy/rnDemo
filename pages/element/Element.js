import React from "react";
import {View, StyleSheet, Modal, ActivityIndicator, ScrollView,StatusBar} from "react-native";
import Toast from 'react-native-root-toast';
import {
  Tooltip,
  Rating,
  AirbnbRating,
  Overlay,
  Text,
  Card,
  CheckBox,
  Divider,
  PricingCard,
  Header,
  ListItem,
  Input,
  Image,
  Avatar,
  Badge,
  withBadge,
  Button,
  ButtonGroup,
  SearchBar
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
StatusBar.setHidden(true)
class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'fuck',
      avatarSource: {
        uri: '',
        method: 'POST',
        headers: {
          Pragma: 'no-cache',
        },
        body: 'Your Body goes here',
        selectedIndex: 2,
      },
      checked: false,
      isModalShow: false,
      isVisible: false,
      search: '',

    }
  }

  updateSearch = search => {
    this.setState({search});
  };

  componentDidMount() {

  }

  updateIndex = (selectedIndex) => {
    this.setState({selectedIndex})
  }
  ratingCompleted = (rating) => {
    console.log("Rating is: " + rating)
  }

  render() {
    const buttons = ['Hello', 'World', 'Buttons']
    const {selectedIndex} = this.state
    const users = [
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      }, {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      }, {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      }, {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
    ]

    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]
    return (
      <ScrollView >
        <Overlay
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(0, 0, 0, .5)"
          overlayBackgroundColor="#fff"
          width={280}
          height={400}
        >

          <Text onPress={() => {
            this.setState({isVisible: false})
          }}>Hello from Overlay !</Text>
        </Overlay>
        {/*<SearchBar*/}
          {/*placeholder="Type Here..."*/}
          {/*onChangeText={this.updateSearch}*/}
          {/*value={this.state.search}*/}
        {/*/>*/}


        <Tooltip withOverlay={false} popover={<Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nemo?</Text>}>
          <Text h1>Tooltip shit</Text>
        </Tooltip>

        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>

        <AirbnbRating/>

        <AirbnbRating
          count={11}
          reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
          defaultRating={11}
          size={20}
        />

        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          style={{paddingVertical: 10}}
        />

        <Rating
          type='heart'
          ratingCount={3}
          imageSize={60}
          showRating
          onFinishRating={this.ratingCompleted}
        />

        <PricingCard
          color="#4f9deb"
          title="Free"
          price="$0"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{title: 'GET STARTED', icon: 'flight-takeoff'}}
          onButtonPress={() => {
            this.setState({isVisible: true})
          }}
        />

        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{source: {uri: l.avatar_url}}}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }

        <Input
          placeholder='BASIC INPUT'
        />

        <Input
          placeholder='INPUT WITH ICON'
          leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
        />

        <Input
          placeholder='INPUT WITH CUSTOM ICON'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />

        <Input
          placeholder='INPUT WITH SHAKING EFFECT'
          shake={true}
        />

        <Input
          placeholder='INPUT WITH ERROR MESSAGE'
          errorStyle={{color: 'red'}}
          errorMessage='ENTER A VALID ERROR HERE'
        />
        <Header
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        <Image
          source={require('./img/demo.png')}
          style={{width: 200, height: 200}}
          PlaceholderContent={<ActivityIndicator/>}
        />


        <Image
          source={{uri: 'https://ss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/44.jpg?2'}}
          style={{width: 200, height: 200}}
          PlaceholderContent={<ActivityIndicator/>}
        />
        <Image
          source={{uri: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3264778946,3748347364&fm=173&app=49&f=JPEG?w=218&h=146&s=6F9161855203A509CE05CDD003005032'}}
          style={{width: 200, height: 200}}
          PlaceholderContent={<Text>shit</Text>}
        />
        <Image
          source={{uri: 'https://ss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/44.jpg?2'}}
          style={{width: 200, height: 200}}
          PlaceholderContent={<ActivityIndicator/>}
        />
        <Image
          source={{uri: 'https://ss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/44.jpg?2'}}
          style={{width: 200, height: 200}}
          PlaceholderContent={<ActivityIndicator/>}
        />
        <CheckBox
          title='Click Here'
          checked={this.state.checked}
        />

        <CheckBox
          center
          title='Click Here'
          checked={this.state.checked}
        />
        <Divider style={{backgroundColor: 'blue'}}/>

        <CheckBox
          center
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
        />

        <CheckBox
          center
          title='Click Here to Remove This Item'
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='add'
          checkedColor='red'
          checked={this.state.checked}
        />

        <CheckBox
          checkedIcon={<Image source={require('./img/demo.png')}/>}
          uncheckedIcon={<Image source={require('./img/demo.png')}/>}
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        />

        <Card title="CARD WITH fdasfd  DIVIDER">
          {
            users.map((u, i) => {
              return (
                <View key={i}>
                  <Image
                    resizeMode="cover"
                    source={{uri: u.avatar}}
                  />
                  <Text>{u.name}</Text>
                </View>
              );
            })
          }
        </Card>


        <Card containerStyle={{padding: 0}}>
          {
            users.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  roundAvatar
                  leftIcon={{name: 'flight-takeoff'}}
                  title={item.name}
                  chevron
                  badge={{value: 3, textStyle: {color: '#fff'}}}
                  leftAvatar={{source: {uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}}
                />
              );
            })
          }
        </Card>

        <Card
          featuredTitle="holy shit"
          featuredSubtitle="holy shit"
          image={require('./img/demo.png')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <Button
            icon={<Icon name='code'
                        color='#ffffff'/>}
            backgroundColor='#03A9F4'
            buttonStyle={{}}
            title='VIEW NOW'/>
        </Card>

        <View style={{height: 100}}></View>
      </ScrollView>
    )
  }
}

export default HomeScreen
