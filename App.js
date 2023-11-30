import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, SafeAreaView } from 'react-native';
import Header from "./src/components/Header"

const colors = ["#f7DC6F", "#A2D9CE", "#D7BDE2"]

export default function App() {

  const [isWorking, setIsWorking] = useState(false)

  const time = 25 * 60
  const [isTime, setIsTime] = useState(time)

  const [isCurrentTime, setIsCurrentTime] = useState("POMO" | "SHORT" | "BREAK")

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={Platform.OS === "android" && styles.container__plaform}>
        <Text style={styles.title} >Pomodoro</Text>
        <Header 
        isTime={isTime} 
        isCurrentTime={isCurrentTime} 
        isWorking={isWorking} 
        setIsCurrentTime={setIsCurrentTime} 
        setIsTime={setIsTime}
       />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
  container__plaform: {
    paddingTop: 45
  },
  title: {
    fontSize: 75,
    paddingLeft: 10
  },
});
