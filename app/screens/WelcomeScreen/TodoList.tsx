import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import AntDesign from "react-native-vector-icons/AntDesign";
  
  const TodoList = () => {
    // Initialize the todo list state and text input state
    const [todoList, setTodoList] = React.useState([]);
    const [text, setText] = React.useState<string>("");
  
    const createTask = () => {
      if (text) {
        setTodoList([text, ...todoList]);
        setText("");
      }
    };
  
    const deleteAllTasks = () => {
      setTodoList([]);
    };
  
    const deleteTask = (index: number) => {
      setTodoList(todoList.filter((v, i) => i !== index));
    };

    return (
      <View style={{ flex: 1, paddingTop: 50, marginHorizontal: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            value={text}
            onChangeText={(text) => setText(text)}
            placeholder="Add Task"
            style={{ borderWidth: 1, height: 45 }}
          />
        </View>
        <View style={{ gap: 15 }}>
          <Button onPress={createTask} title="Add Task" />
          <Button color={"red"} onPress={deleteAllTasks} title="Delete All" />
        </View>
  
        <FlatList
          ListEmptyComponent={() => (
            <Text style={{ marginTop: 20, alignSelf: "center" }}>
              List is Empty!
            </Text>
          )}
          data={todoList}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginTop: 15,
                  height: 45,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "silver",
                  paddingHorizontal: 10,
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                <Text style={{ fontWeight: "700" }}>{index + 1}.</Text>
                <Text style={{ fontWeight: "700", flex: 1 }}>{item}</Text>
                <TouchableOpacity
                  onPress={() => deleteTask(index)}
                  style={{
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                  }}
                >
                  <AntDesign name="delete" size={20} color="red" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  };
  
  export default TodoList;
  