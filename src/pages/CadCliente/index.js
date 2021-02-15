import React from "react";
import styles from "./styles.js";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

function CadCliente() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#5F5F5F" }}>
            Cadastro de cliente
          </Text>
        </View>
        <TextInput style={styles.inputTop} placeholder={"Seu nome"} />
        <TextInput style={styles.inputMiddle} placeholder={"Seu e-mail"} />
        <TextInput style={styles.inputMiddle} placeholder={"Senha"} secureTextEntry={true} />
        <TextInput
          style={styles.inputBottom}
          placeholder={"Confirmar a senha"}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#FFF", fontSize: 20 }}>Concluir cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default CadCliente;
