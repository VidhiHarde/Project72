import React,{Component} from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ToastAndroid} from 'react-native';

export default class WriteStoryScreen extends React.Component {
    render(){
return(
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

    <View>
    <Text style={styles.heading}>   WriteStory   </Text>
    <TextInput 
    style={styles.inputBox1}
    placeholder="StoryTitle"
    />
   <View>
      <TextInput 
       style={styles.inputBox2}
       placeholder="Author"
       />
     <View>
      
      <TextInput 
      style={styles.inputBox3}
      placeholder="Write Your Story"
      />

      <View>
          <TouchableOpacity style={styles.buttonContainer}
          onPress={() => 
            ToastAndroid.show("Story Submitted !!", ToastAndroid.SHORT)}>
          <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
      </View>
      </View>
       </View>
       </View>
       </KeyboardAvoidingView>
)
    }
}
const styles= StyleSheet.create({
    heading:{
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'bold',
        alignSelf: 'center',
        fontWeight: 'bold',
        backgroundColor:"pink"
    },
    inputBox1:{
        marginTop: 20,
        width: 250,
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    inputBox2:{
        marginTop: 20,
        width: 300,
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    inputBox3:{
        marginTop: 20,
        width: 350,
        alignSelf: 'center',
        height: 250,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
    },
    buttonContainer:{
 fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"pink",
    marginTop: 10,
    marginLeft:560,
    borderRadius: 20,
    width: 150,
    height: 50,
    borderWidth: 4
    },
    buttonText:{
        fontSize: 15,
       fontWeight: 'bold',
      
       
        }
})