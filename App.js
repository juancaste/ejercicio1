import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default function App() {
  const [ text, setText ] = useState('Nota: 30')
  const [ submit, setSubmit ] = useState('')
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.scrollView}>
        <Text>Texto: { submit }</Text> 
        <Text>Texto: { submit }</Text>
        <Text>Texto: { submit }</Text>
        <Text>Texto: { submit }</Text>
        <Text>Texto: { submit }</Text>
        <Text>Texto: { submit }</Text>
        <Text>Texto: { submit }</Text>
        <Text>Texto: { submit }</Text>
        <Text>Texto: { submit }</Text>
        <Text>Texto: { submit }</Text>
        <TextInput style={ styles.input }
            placeholder='Write here'
            onChangeText={ Texto => setText(Texto) }
            defaultValue={ text }
        />
        <TouchableWithoutFeedback
            underlayColor={ '#999' }
            activeOpacity={0.2}
            onPress={() => {
            setSubmit(text)
            alert('Eror:3 Nota: 5.0')
            }}><Text>Accept</Text>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get('window').width
  },
});
