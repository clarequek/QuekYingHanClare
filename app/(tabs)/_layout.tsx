import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Disable header for a cleaner look
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}