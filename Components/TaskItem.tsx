import React from "react";
import {
  Text,
  Button,
  Box,
  HStack,
  NativeBaseProvider,
  Checkbox,
  Center,
  VStack,
} from "native-base";
import { useState } from "react";

interface todoItem {
  taskName: string;
  priority: string;
}

const TaskItem = (props: { taskName: string; priority: string }) => {
  const [done, setDone] = useState<boolean>(false);
  return (
    <NativeBaseProvider>
      <HStack w={200}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={1}
        >
          <Checkbox
            value={done ? "Done" : "Not Done"}
            accessibilityLabel="Mark as done"
            onChange={() => {
              setDone(!done);
            }}
            size={"md"}
          ></Checkbox>
        </Box>
        <Box w={220} margin={1}>
          <Center>
            <Text isTruncated={true} strikeThrough={done} fontSize="2xl">
              {props.taskName}
            </Text>
          </Center>
        </Box>
        <Box w={10}>
          <Center>
            <Text
              strikeThrough={done}
              fontSize="3xl"
              color={
                props.priority == "1"
                  ? "#FF2D2D"
                  : props.priority == "2"
                  ? "#EAC100"
                  : "#64A600"
              }
            >
              {props.priority}
            </Text>
          </Center>
        </Box>
      </HStack>
    </NativeBaseProvider>
  );
};

export default TaskItem;
