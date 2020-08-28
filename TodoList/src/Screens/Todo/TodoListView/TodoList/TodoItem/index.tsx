import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex-direction: row;
  background-color: #fff;
  margin: 4px 16px 4px;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`;
const Label = Styled.Text`
  flex: 1;
  font-size: 20px;
`;
const DeleteButton = Styled.TouchableOpacity``;
const Icon = Styled.Image` 
  width: 24px;
  height: 24px;
`;

interface Props {
  text: string;
  onDelete: () => void;
}


const TodoItem = ({ text, onDelete }: Props) => {
  return (
    <Container>
      <Label>{text}</Label>
      <DeleteButton onPress={onDelete}>
        <Icon source={require('~Assets/Images/remove.png')} />
      </DeleteButton>
    </Container>
  );
};

export default TodoItem;