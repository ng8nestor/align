import { Image, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

// Home screen - first thing users see
export default function Home() {
  // Simple styles for clean, friendly UI
  const containerStyle = { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 24, 
    gap: 12 
  };
  
  const logoStyle = { 
    width: 96, 
    height: 96 
  };
  
  const titleStyle = { 
    fontSize: 28, 
    fontWeight: "700" 
  };
  
  const subtitleStyle = { 
    textAlign: "center", 
    color: "#555" 
  };
  
  const buttonStyle = { 
    backgroundColor: "black", 
    paddingHorizontal: 16, 
    paddingVertical: 10, 
    borderRadius: 8 
  };
  
  const buttonTextStyle = { 
    color: "white", 
    fontWeight: "600" 
  };

  return (
    <View style={containerStyle}>
      {/* App logo */}
      <Image
        source={require("../assets/images/align-logo.png")}
        style={logoStyle}
        resizeMode="contain"
      />
      
      {/* App title */}
      <Text style={titleStyle}>align</Text>
      
      {/* Welcome message */}
      <Text style={subtitleStyle}>
        Welcome! Let's log your first workout.
      </Text>
      
      {/* Navigation button to add workout */}
      <Link href="/add-workout" asChild>
        <Pressable style={buttonStyle}>
          <Text style={buttonTextStyle}>Add workout</Text>
        </Pressable>
      </Link>
    </View>
  );
}
