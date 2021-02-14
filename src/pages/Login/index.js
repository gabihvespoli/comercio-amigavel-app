import React, { useState } from "react";
import styles from "./styles.js";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Switch,
} from "react-native";

function Login() {
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
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#5F5F5F" }}>
            Fazer login
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "300", color: "#007BFF" }}>Criar uma conta</Text>
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
            <Text style={{ fontSize: 15, fontWeight: "300", color: "#5F5F5F" }}>Lembrar-me</Text>
          </View>
          <Text style={{ fontSize: 15, fontWeight: "300", color: "#007BFF" }}>Esqueci minha senha</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
