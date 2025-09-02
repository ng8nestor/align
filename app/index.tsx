import { Image, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 24, gap: 12 }}>
      <Image
        source={require("../assets/align-logo.png")}
        style={{ width: 96, height: 96 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 28, fontWeight: "700" }}>align</Text>
      <Text style={{ textAlign: "center", color: "#555" }}>
        Welcome! Let's log your first workout.
      </Text>
      <Link href="/add-workout" asChild>
        <Pressable style={{ backgroundColor: "black", paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8 }}>
          <Text style={{ color: "white", fontWeight: "600" }}>Add workout</Text>
        </Pressable>
      </Link>
    </View>
  );
}
