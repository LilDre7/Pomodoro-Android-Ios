import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Header from "./src/components/Header";
import Time from "./src/components/Time";
import { Audio } from "expo-av";
import IconReturn from "./src/utils/IconReturn";

const colors = ["#f7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);

  const time = 25 * 60;
  const [isTime, setIsTime] = useState(time);

  const [isCurrentTime, setIsCurrentTime] = useState(
    "POMO" | "SHORT" | "BREAK"
  );
  
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      // runningTime();

      interval = setInterval(() => {
        setIsTime(isTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (isTime === 0) {
      setIsActive(false);
      setIsWorking(!isWorking);
      setIsTime(isWorking ? isTime : 5 * 60);
    }

    return () => clearInterval(interval);
  }, [isActive, isTime]);

  const handlePressButton = () => {
    playSound();
    setIsActive(!isActive);
  };

  const handleRestartButton = () => {
    // Reinicar el temporizador
    setIsTime(time);
    setIsWorking(false);
    setIsActive(!isActive);
  };

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/haga-clic-en_6.mp3")
    );
    await sound.playAsync();
  }

  async function runningTime() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/la-atmosfera_4.mp3")
    );
    await sound.playAsync();
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[isCurrentTime] }]}
    >
      <StatusBar style="auto" />
      <View style={Platform.OS === "android" && styles.container__plaform}>
        <Text style={styles.title}>Pomodoro</Text>
        <Header
          isCurrentTime={isCurrentTime}
          setIsCurrentTime={setIsCurrentTime}
          setIsTime={setIsTime}
        />
      </View>
      <Time isTime={isTime} />
      <TouchableOpacity
        onPress={handlePressButton}
        activeOpacity={0.8}
        style={styles.container__button}
      >
        <Text style={styles.button__style}>{isActive ? "STOP" : "START"}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleRestartButton}
        activeOpacity={0.8}
        style={styles.container__icon__return}
      >
        <View style={styles.icon__return}>
          <IconReturn />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto",
    position: "relative",
  },
  container__plaform: {
    paddingTop: 55,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 75,
    fontWeight: "bold",
  },
  container__button: {
    backgroundColor: "#212121",
    borderRadius: 10,
    marginHorizontal: 15,
  },
  button__style: {
    padding: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  container__icon__return: {
    position: "relative",
  },
  icon__return: {
    position: "absolute",
    top: -280,
    left: 24,
    height: 40,
    width: 40,
  }
});
