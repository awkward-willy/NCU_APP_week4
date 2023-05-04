import {
  NativeBaseProvider,
  Input,
  VStack,
  Text,
  Button,
  Radio,
  ScrollView,
} from "native-base";
import { useRef, useState } from "react";
import { SafeAreaView, Alert } from "react-native";
import TaskItem from "./Components/TaskItem";
interface todoItem {
  taskName: string;
  priority: string;
}
export default function App() {
  const [todo, setTodo] = useState<string>("");
  const [priority, setPriority] = useState<string>("1");
  const [todoList, setTodoList] = useState<todoItem[]>([]);
  const inputBox = useRef<any>();

  const addTodo = (name: string, priority: string) => {
    const newTodo = { taskName: name, priority: priority };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <NativeBaseProvider>
      <VStack space={5} alignItems="center" mx="auto">
        <SafeAreaView>
          <Text marginTop={5} fontSize={"4xl"}>
            My ToDo
          </Text>
        </SafeAreaView>
        <Input
          ref={inputBox}
          onChangeText={(text) => {
            setTodo(text);
          }}
          value={todo}
          size="md"
          placeholder="Enter your todo"
          width={300}
        />
        <Radio.Group
          name="Priority"
          defaultValue="1"
          accessibilityLabel="Pick your todo's priority"
          value={priority}
          onChange={(nextValue) => setPriority(nextValue)}
        >
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Radio.Group>
        <Button
          onPress={() => {
            if (todo === "")
              return Alert.alert(
                "Please enter a todo...",
                "Todo name cannot be empty!"
              );
            Alert.alert("Added todo", `Todo: ${todo}, Priority: ${priority}`);
            addTodo(todo, priority);
            setTodo("");
            setPriority("1");
            inputBox.current!.isFocused = false;
          }}
        >
          加入＋
        </Button>
        <ScrollView w={300} h={500}>
          <VStack space={5}>
            {todoList.map((item, index) => {
              return (
                <TaskItem
                  key={index}
                  taskName={item.taskName}
                  priority={item.priority}
                />
              );
            })}
          </VStack>
        </ScrollView>
      </VStack>
    </NativeBaseProvider>
  );
}
