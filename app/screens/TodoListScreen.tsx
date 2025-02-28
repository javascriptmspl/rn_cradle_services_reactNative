import {
  View,
} from "react-native";
import React from "react";
import TodoList from "./WelcomeScreen/TodoList";

const TodoListScreen = () => {

  return (
    <View style={{ flex: 1,}}>
    <TodoList/>
    {/* <ApiTestScreen/> */}
    </View>
  );
};

export default TodoListScreen;
