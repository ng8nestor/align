import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, View, Pressable } from "react-native";
import { Stack } from "expo-router";

export default function AddWorkout() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  function save() {
    if (!name || !sets || !reps || !weight) {
      Alert.alert("Missing fields", "Please fill name, sets, reps, and weight.");
      return;
    }
    Alert.alert("Saved (demo)", `${name} • ${sets}x${reps} @ ${weight} lb\n${desc || ""}`);
  }

  const box = { borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 12, marginBottom: 12 };

  return (
    <>
      <Stack.Screen options={{ title: "Add workout" }} />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text>Name</Text>
        <TextInput value={name} onChangeText={setName} placeholder="Bench Press" style={box} />

        <Text>Description</Text>
        <TextInput value={desc} onChangeText={setDesc} placeholder="Keep back tight" style={box} multiline />

        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={{ flex: 1 }}>
            <Text>Sets</Text>
            <TextInput keyboardType="number-pad" value={sets} onChangeText={setSets} placeholder="3" style={box} />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Reps</Text>
            <TextInput keyboardType="number-pad" value={reps} onChangeText={setReps} placeholder="8" style={box} />
          </View>
          <View style={{ flex: 1 }}>
            <Text>Weight</Text>
            <TextInput keyboardType="number-pad" value={weight} onChangeText={setWeight} placeholder="135" style={box} />
          </View>
        </View>

        <Pressable onPress={save} style={{ backgroundColor: "black", padding: 14, borderRadius: 10, marginTop: 6 }}>
          <Text style={{ color: "white", textAlign: "center", fontWeight: "700" }}>Save</Text>
        </Pressable>
      </ScrollView>
    </>
  );
}
