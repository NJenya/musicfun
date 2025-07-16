import { Stack } from "expo-router";
import { AuthProvider } from "../features/auth/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      {/* Empty <Stack /> lets expo-router auto-register all screens */}
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
