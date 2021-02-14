import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";

function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Image
          source={require("../../assets/logo-comercio-amigavel.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5F5F5F" }}>
            Fazer login
          </Text>
          <Text style={{ color: "#007BFF" }}>Criar uma conta</Text>
        </View>
        <TextInput style={styles.inputTop} placeholder={"E-mail"}></TextInput>
        <TextInput
          style={styles.inputBottom}
          placeholder={"Senha"}
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.head}>
          <View style={styles.toggle}>
            <Switch
              trackColor={{ false: "#F1F1F1", true: "#28A745" }}
              thumbColor={isEnabled ? "#FFF" : "#f4f3f4"}
              ios_backgroundColor="#5F5F5F"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={{ color: "#5F5F5F" }}>Lembrar-me</Text>
          </View>
          <Text style={{ color: "#007BFF" }}>Esqueci minha senha</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#FFF" }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 30,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 135,
  },
  topo: {
    backgroundColor: "#E2E2E2",
    height: 280,
  },
  logo: {
    alignSelf: "center",
    margin: 50,
    width: 150,
    height: 150,
  },
  inputTop: {
    height: 50,
    padding: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "white",
    borderColor: "#E6E6F0",
    borderWidth: 1,
  },
  inputBottom: {
    height: 50,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "white",
    borderColor: "#E6E6F0",
    borderWidth: 0.2,
  },
  button: {
    height: 40,
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
  },
});
