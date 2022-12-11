import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
export const global = () => {
  const window = useWindowDimensions();

  return window.height;
};
