import { StyleSheet } from 'react-native';

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

export default styles;