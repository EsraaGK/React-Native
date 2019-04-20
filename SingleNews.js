import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image} from 'react-native';
import MyHeader from './MyHeader';
import { Content, Card, CardItem, Left, Body, Right } from 'native-base';

type Props = {};
export default class SingleNews extends Component<Props> {
    static navigationOptions = { title: 'Welcome', header: null };
  
  render() {
    return (
<Content>
        <MyHeader/>
  
      <Card>
        <CardItem >
          <Left >
            
            <Image style={{width:120, height:150,  borderRadius:10}} source={require('./s.jpg')}/>
          </Left>
          <Body >
          <Text style={{fontSize:30, fontWeight:"bold", color:"#1122ff"}}>Title
            </Text>
            <Text>{this.props.navigation.getParam('title')}
            </Text>
            </Body>
         

        </CardItem>
      </Card>
      </Content>
    );
 }
}