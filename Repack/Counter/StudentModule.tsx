// StudentSide.js
import { Text, View } from "react-native";

export interface User {
  name: string;
}

interface StudentModuleProps {
  user: User;
}

export default function StudentModule({ user }: StudentModuleProps) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello {user.name}!</Text>
      <Text>You are a student.</Text>
      {/* ...more student related code */}
    </View>
  );
}