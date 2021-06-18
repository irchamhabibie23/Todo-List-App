import React, { useState } from "react";
import { View, StatusBar, FlatList, Text, Button } from "react-native";
import styled from "styled-components";

import AddInput from "../../Components/AddInput";
import TodoList from "../../Components/TodoList";
import Empty from "../../Components/Empty";
import Header from "../../Components/Header";

function Home({ navigation }) {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          id: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (id) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.id != id);
    });
  };
  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle='light-content' backgroundColor='red' />
      </View>
      <View>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoList item={item} deleteItem={deleteItem} navig={navigation} />
          )}
        />
        <View>
          <AddInput submitHandler={submitHandler} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: red;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Home;
