import * as React from "react";
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import { Header } from "react-native-elements";
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
          emailId:'',
          password:'',
          firstName:'',
          lastName:'',
          address:'',
          contact:'',
          confirmPassword:'',
          isModalVisible:'false',
        }
      }

      userSignUp = (emailId, password,confirmPassword) =>{

        if(password !== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        }
        
        else{
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then(()=>{
            db.collection('users').add({
              first_name:this.state.firstName,
              last_name:this.state.lastName,
              contact:this.state.contact,
              email_id:this.state.emailId,
              address:this.state.address,
              IsBookRequestActive: false,
            })

            return  Alert.alert(
                 'User Added Successfully',
                 '',
                 [
                   {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
                 ]
             );
          })

          .catch((error)=> {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          });
        }
    }

    userLogin = (emailId, password)=>{

        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
          this.props.navigation.navigate('DonateBooks')
        })

        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
    }

    showModal = ()=>{

        return(

        <Modal animationType="slide"
          transparent={true}
          visible={this.state.isModalVisible}>
 
          <View style={styles.modalContainer}>

            <ScrollView style={styles.scrollview}>

              <View style={styles.signupView}>

                <Text style={styles.signupText}>SIGN UP</Text>

              </View>

              <View style={{flex: 0.95}}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"First Name"}
                  maxLength ={8}
                  onChangeText={(text)=>{
                    this.setState({
                      firstName: text
                    })
                  }}
                />

                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Last Name"}
                  maxLength ={8}
                  onChangeText={(text)=>{
                    this.setState({
                      lastName: text
                    })
                  }}
                />

                <Text style={styles.label}>Contact</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Contact"}
                  maxLength ={10}
                  keyboardType={'numeric'}
                  onChangeText={(text)=>{
                    this.setState({
                      contact: text
                    })
                  }}
                />

                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Address"}
                  multiline = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      address: text
                    })
                  }}
                />

                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Email"}
                  keyboardType ={'email-address'}
                  onChangeText={(text)=>{
                    this.setState({
                      emailId: text
                    })
                  }}
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Password"}
                  secureTextEntry = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                />

                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Confrim Password"}
                  secureTextEntry = {true}
                  onChangeText={(text)=>{
                    this.setState({
                      confirmPassword: text
                    })
                  }}
                />

              </View>

              <View style={{flex: 0.2, alignItems: "center"}}>

                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=>
                    this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                  }>

                <Text style={styles.registerButtonText}>Register</Text>

                </TouchableOpacity>

                <Text style={styles.cancelButtonText}
                onPress={()=>{this.setState({isModalVisible: false})}}>Cancel</Text>

              </View>

            </ScrollView>
          </View>
        </Modal>
      )
      }

    render(){
        return(

    //         <View style={styles.view}>
        
    //       {
    //         this.showModal()
    //       }
    //     <View style={{flex: 0.25}}>   
    //       <View style={{flex: 0.15}} >
            
    //       </View>
    //       <View style={{flex: 0.45}}>
    //           <View style={styles.TextInput}>
    //           <TextInput
    //             style={styles.loginBox}
    //             placeholder="abc@example.com"
    //             keyboardType ='email-address'
    //             onChangeText={(text)=>{
    //               this.setState({
    //                 emailId: text
    //               })
    //             }}
    //           />
    //           <TextInput
    //             style={styles.loginBox}
    //             secureTextEntry = {true}
    //             placeholder="enter Password"
    //             onChangeText={(text)=>{
    //               this.setState({
    //                 password: text
    //               })
    //             }}
    //           />
    //           </View>
    //           <View style={{flex: 0.5, alignItems: "center"}}>
    //           <TouchableOpacity
    //               style={[styles.button,{marginBottom:20, marginTop:20}]}
    //               onPress = {()=>{
    //                 this.userLogin(this.state.emailId, this.state.password)
    //               }}
    //               >
    //               <Text style={styles.buttonText}>Login</Text>
    //             </TouchableOpacity>

    //             <TouchableOpacity
    //               style={styles.button}
    //               onPress={()=>this.setState({ isModalVisible:true})}
    //               >
    //               <Text style={styles.buttonText}>SignUp</Text>
    //             </TouchableOpacity>
    //           </View>
    //       </View>
    //       </View>
    // </View>
            
            <View style={styles.view}>

                {this.showModal()}

                <Header centerComponent={{ 
                    text: "🏏Play It My Way🏏", 
                    style: { color: 'white', fontSize:25, fontWeight:"bold", marginTop:"10%",alignSelf:"flex-start",marginLeft:"-15%",marginRight:"-10%"} 
                }}/>

                <TextInput style={[styles.input,{marginTop:"80%"}]} 
                placeholder="abc@example.com"
                keyboardType ='email-address'
                onChangeText={(text)=>{
                  this.setState({
                    emailId: text
                  })
                }}/>

                <TextInput style={styles.input} 
                secureTextEntry = {true}
                placeholder="enter Password"
                onChangeText={(text)=>{
                  this.setState({
                    password: text
                  })
                }}/>

                <TouchableOpacity style={styles.button} 
                onPress = {()=>{
                    this.props.navigation.navigate("dummy1")
                }}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>

                <Text style={{marginTop:20}}>Don't have an account? Sign up!</Text>

                <TouchableOpacity style={styles.button}
                onPress={()=>this.setState({isModalVisible:true})}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6fc0b8",
      },
      loginBox: {
        width: "80%",
        height: 50,
        borderWidth: 1.5,
        borderColor: "#ffffff",
        fontSize: 20,
        paddingLeft: 10,
      },
      button: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom:10,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: 20,
      },
      label:{
        fontSize:13,
        color:"#717D7E",
        fontWeight:'bold',
        paddingLeft:10,
        marginLeft:20
      },
      formInput: {
        width: "90%",
        height: 45,
        padding: 10,
        borderWidth:1,
        borderRadius:2,
        borderColor:"grey",
        paddingBottom:10,
        marginLeft:20,
        marginBottom:14
      },
      registerButton: {
        width: "75%",
        height: 50,
        marginTop:20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 10,
      },
      registerButtonText: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#fff",
      },
      cancelButtonText:{
        fontSize : 20,
        fontWeight:'bold',
        color: "#32867d",
        marginTop:10
      },
      scrollview:{
        flex: 1,
        backgroundColor: "#fff"
      },
      signupView:{
        flex:0.05,
        justifyContent:'center',
        alignItems:'center'
    },
    signupText:{
      fontSize:20,
      fontWeight:"bold",
      color:"#32867d"
    },
    santaView:{
      flex:0.85,
      justifyContent:"center",
      alignItems:"center",
      padding:10
    },
    santaImage:{
      width:"70%",
      height:"100%",
      resizeMode:"stretch"
    },
    TextInput:{
      flex:0.5,
      alignItems:"center",
      justifyContent:"center"
    },
    bookImage:{
      width:"100%",
      height:22
    }
})