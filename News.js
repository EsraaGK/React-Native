import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image} from 'react-native';
import MyHeader from './MyHeader';
import { Content, Card, CardItem, Left, Body, Right } from 'native-base';


type Props = {};
export default class News extends Component<Props> {
  
  static navigationOptions = { title: 'Welcome', header: null };
 // state={flag:1};
  render() {
    return (
      <Content>
        <MyHeader home='1'></MyHeader>
  
      <Card>
        <CardItem button 
        onPress={()=>{
            this.props.navigation.navigate('SingleNews', {title:"Iam sending data from first view"})}}>
          <Left >
            
            <Image style={{width:120, height:150,  borderRadius:10}} source={require('./q.jpg')}/>
          </Left>
          <Body >
          <Text style={{fontSize:30, fontWeight:"bold", color:"#1122ff"}}>Title
            </Text>
            <Text >VIEW ONE
            </Text>
            </Body>
         

        </CardItem>
      </Card>
     
      </Content>
    );
  }
}