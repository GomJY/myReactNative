import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import Container from './components/Container';
import Row from './components/Row';
import moment from 'moment';

//DOM객체를 조절하는 라이브러리는 사용할수 없다.
//window, document

export default function App() {
  const [now, setNow] = React.useState(moment());
  
  //1. 처음에 한번 동작
  //2. 주시되상이 바뀔때마다 동작
  React.useEffect(() => {
    let clock;
    clock = setInterval(() => {
      setNow(moment());
    }, 1000);
  }, []);

  const Label = styled.Text`
    font-size: 36px;
    font-weight: bold; 
  `;
  
  return (
    <Container>
      <Row>
        <Text>{now.format('YYYY년 MM월 D일 (ddd)')}</Text>
      </Row>
      <Row>
        <Label>{now.format('HH')}</Label>
        <Label>{parseInt(now.format('s'), 10) % 2 === 1 ? ":" : " "}</Label>
        <Label>{now.format('mm')}</Label>
        <Label>{parseInt(now.format('s'), 10) % 2 === 1 ? ":" : " "}</Label>
        <Label>{now.format('ss')}</Label>
      </Row>
    </Container>
  );
}

