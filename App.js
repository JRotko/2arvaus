import { StatusBar } from 'expo-status-bar';
import {TextInput, Button, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';

let answer
let guesses

export default function App() {
  const [guess, setGuess] = useState('0')
  const [legend, setLegend] = useState('')

  const settings = () => {
    setLegend('Guess a number between 1-100')
    answer = Math.floor(Math.random() * 100) + 1
    guesses = 0
  }

  useEffect(() => {
    settings()
  }, [])

  const checkAnswer = () => {
    guesses ++

    if (guess == answer) {
      alert("You guessed the number in " + guesses + " guesses")
      settings()
    } else if (guess < answer) {
      setLegend("Your guess is too low")
    } else if (guess > answer) {
      setLegend("Your guess is too high")
    }
    
  }

  return (
    <View style={styles.container}>
      <Text>{answer}</Text>
      <Text>{legend}</Text>
      <TextInput keyboardType='numeric' styles={styles.input} onChangeText={guess => setGuess(guess)} value={guess} />
      <Button onPress={checkAnswer} title="Make a Guess"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:50, 
    borderWidth: 1,
  }
});
