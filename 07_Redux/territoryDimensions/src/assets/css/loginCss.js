import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    textAlign: "center",
    color: "#94a3b8",
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1e293b",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#38bdf8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  signupText: {
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 20,
  },
});

export default styles;