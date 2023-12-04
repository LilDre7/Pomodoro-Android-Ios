import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, Image, ScrollView } from "react-native";

const ApiUsers = () => {
  const [users, setUsers] = useState([]);

  const URL = "https://randomuser.me/api/?results=7";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setUsers(response.data.results)
      } catch (error) {
        console.error("Error fetching users", error)
      }
    }

    fetchData()

  }, [])


  return (
    <ScrollView>
      <Text>ApiUsers</Text>
      {users.map((user, index) => (
        <View key={index}>
          <Text>
            {user.name.first} {user.name.last} {user.email}
          </Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: user.picture.large }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default ApiUsers;
