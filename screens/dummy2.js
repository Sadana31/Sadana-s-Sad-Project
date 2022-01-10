import * as React from 'react';
import {Text,View} from 'react-native';
import { Header } from "react-native-elements";

export default class dummy2 extends React.Component{
    render(){
        return(
            <View>
                <Header centerComponent={{ 
                    text: " 🏏 Join A Match 🏏", 
                    style: { color: 'white', fontSize:25, fontWeight:"bold", marginTop:"10%",alignSelf:"flex-start",marginLeft:"-15%",marginRight:"-20%"}  
                }}/>

                <Text>HdagteherdhIIIIIIIIII</Text>
            </View>
        )
    }
}