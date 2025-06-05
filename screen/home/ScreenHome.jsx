import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function ScreenHome() {
  const rutas = useNavigation();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Luces"
          left={() => <Icon name="lightbulb-on" size={30} color="#f1c40f" />}
        />
        <Card.Content>
          <Text>Controla las luces de tu casa.</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => rutas.push("LucesCasa")}
          >
            Press Me
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Detalles"
          left={() => <Icon name="information" size={30} color="#3498db" />}
        />
        <Card.Content>
          <Text>Detalles generales del hogar.</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => rutas.push("DetallesCasa")}
          >
            Press Me
          </Button>
        </Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Puertas"
          left={() => <Icon name="door" size={30} color="#e74c3c" />}
        />
        <Card.Content>
          <Text>Control de acceso y puertas.</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            style={styles.button}
            labelStyle={styles.buttonLabel}
            onPress={() => rutas.push("PuertasCasa")}
          >
            Press Me
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "flex-start",
  },
  card: {
    marginBottom: 20,
  },
  button: {
    flex: 1,
    borderRadius: 16,
  },
  buttonLabel: {
    color: "#fff",
  },
});
