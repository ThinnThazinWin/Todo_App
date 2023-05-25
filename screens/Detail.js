import { StyleSheet, Text, View , TextInput, Pressable} from 'react-native'
import React, {useState} from 'react'
import {firebase} from '../config'
import { useNavigation } from '@react-navigation/native'

export default function Detail({route}) {
  
  const todoRef = firebase.firestore().collection('todos');
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name);
  const navigation = useNavigation();

  const updateTodo = () => {
    if(textHeading && textHeading.length > 0) {
        todoRef
        .doc(route.params.item.id)
        .update({
            heading: textHeading,
        }).then (() => {
            navigation.navigate('Home')
        }).catch((error) => {
            alert(error.message)
        })
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder='update todo'
      />
      <Pressable
        style={styles.buttonUpdate}
        onPress={() => {updateTodo()}}
        >
            <Text>UPDATE TO DO</Text>

      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:80,
        marginLeft:15,
        marginRight:15
    },
    textInput:{
        marginBottom:10,
        padding:10,
        fontSize:15,
        color:'#000',
        backgroundColor:'gray'
    },
    buttonUpdate:{
        marginTop:25,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation:10,
        backgroundColor: 'lightblue'
    }
})