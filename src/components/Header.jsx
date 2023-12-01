import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const option = ["Pomodo", "Short Break", "Long Break"];

const Header = ({
  isCurrentTime,
  setIsCurrentTime,
  setIsTime,
}) => {
  const handlePress = (index) => {
    // Se define una variable llamada newTime utilizando un operador ternario.
    // Si index es igual a 0, newTime será 25; si index es igual a 1, newTime será 5; de lo contrario, newTime será 10.
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 10;

    // Se llama a la función setIsCurrentTime con el valor de index como argumento.
    // Parece que esta función está diseñada para actualizar algún estado relacionado con el tiempo actual.
    setIsCurrentTime(index);

    // Se llama a la función setIsTime con el valor de newTime multiplicado por 60 como argumento.
    // Parece que esta función también está diseñada para actualizar algún estado relacionado con el tiempo, pero en minutos.
    setIsTime(newTime * 60);
  };

  const borderInput = (index) => {
    return isCurrentTime !== index && { borderColor: "red" };
  };

  return (
    <View style={styles.container__header}>
      {option.map((item, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          key={index}
          style={[styles.container__item, borderInput(index)]}
        >
          <Text style={styles.item}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container__header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    gap: 20,
  },
  container__item: {
    width: "30%",
    borderWidth: 3,
    borderRadius: 10,
    alignItems: "center",
    padding: 8,
    marginVertical: 10,
  },
  item: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
