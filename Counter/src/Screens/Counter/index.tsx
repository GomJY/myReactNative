import React, {useState} from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleLabel = Styled.Text`
  font-size: 24px;
`;

const CounterContainer = Styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const CountLabel = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonContainer= Styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

interface Props{
  title?: string;
  initValue: number;
}

const Counter = ({title, initValue}: Props) => {
  const [count, setCount] = useState<number>(initValue);

  const UpCount = () => {
    setCount(count + 1);
  }
  const DownCount = () => {
    setCount(count - 1);
  }

  return (
    <Container>
      {title && (
        <TitleContainer>
          <TitleLabel>{title}</TitleLabel>
        </TitleContainer>
      )}
      <CounterContainer>
        <CountLabel>{count}</CountLabel>
      </CounterContainer>
      <ButtonContainer>
        <Button iconName="plus" onPress={UpCount} />
        <Button iconName="minus" onPress={DownCount} />
      </ButtonContainer>
    </Container>
  );
};

export default Counter;