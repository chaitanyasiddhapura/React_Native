import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>

      <Button title="Increase" onPress={() => dispatch(increment())} />
      <Button title="Decrease" onPress={() => dispatch(decrement())} />
    </View>
  );
}