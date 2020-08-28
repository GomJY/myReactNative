import React, { useContext, useState } from 'react';
import Styled from 'styled-components/native';
import { TodoListContext } from '~/Context/TodoListContext';

const ButtonContainer = Styled.TouchableOpacity`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Label = Styled.Text``;

interface Props {}

const AddButton = ({}: Props) => {
  console.log("testButton");
  const [count, setCount] = useState<number>(0);
  const {todoList, removeTodoList, addTodoList } = useContext<ITodoListContext>(
    TodoListContext
  );

  console.log(todoList);
  
  return (
    <ButtonContainer onPress={ () => {
        addTodoList("테스트 글자");
        console.log("test todoList");
        console.log(todoList);
        console.log(addTodoList);
        console.log(count);
        setCount(count + 1);
      }}>
      <Label>테스트 버튼 입니다.</Label>
    </ButtonContainer>
  );
};

export default AddButton;
