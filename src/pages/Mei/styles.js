import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
  },
  head: {
    marginVertical: 30,
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  topo: {
    backgroundColor: "#E2E2E2",
    height: 250,
  },
  logo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  img32: {
    alignSelf: "center",
    width: 32,
    height: 32,
  },
  img64: {
    alignSelf: "center",
    width: 64,
    height: 64,
  },
  buttonP: {
    height: 300,
    width: 160,
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonVantagens: {
    backgroundColor: "#28A745",
  },
  buttonComo: {
    backgroundColor: "#007BFF",
  },
  buttonG: {
    height: 300,
    width: 330,
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonCurso1: {
    backgroundColor: "#EC1E79",
  },
  buttonCurso2: {
    backgroundColor: "#F69220",
  },
});

export default styles;