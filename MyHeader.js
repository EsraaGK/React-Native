import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

type Props = {};
class MyHeader extends Component<Props> {
  // state={title:this.props.title};
  render() {
    return (
         <Header>
           <Left>
           {this.hideButton()}
           </Left>
          <Body>
            <Title>Cards</Title>
            <Subtitle>Three cards one card item each</Subtitle>
          </Body>
        </Header>

    );
  }



             
  hideButton(){
   
  if(!this.props.home){    //1 refers to home where it should be hidden 
 return(<Button onPress={()=>{
      
      this.props.navigation.goBack()
    }}>
      <Icon name="arrow-back" />
    </Button>

)}
    }
}
export default withNavigation(MyHeader);