import * as React from 'react';
import { Button, Dimensions, Text, SafeAreaView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import styled from 'styled-components/native';

const random = () => {
  let arr = [];
  const getNumber = () =>  {return Math.floor(Math.random() * 45) + 1;};
  
  for(let i = 0; i < 7; i++) {
    let randomValue = getNumber();
    
    arr.forEach((item) => {
      while(randomValue === item) {
        randomValue = getNumber();
      }
    });
    arr.push(randomValue);
  }
  arr = arr.sort((a, b) => a - b);
  return arr;
};

const getColor = (number) => {
  if(number <= 10) {
    return 'yellow';
  } else if(number <= 20) {
    return 'blue';
  } else if(number <= 30) {
    return 'red';
  } else if(number <= 40) {
    return 'black';
  } else if(number <= 45) {
    return 'green';
  } 
}


const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: ${Constants.statusBarHeight}px;
`;
const Row = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;
const Ball = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: ${props => props.color };
    justify-content: center;
    align-items: center;
`;
const Label = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;


export default function App() {
  //state
  const [displayNumbers, setNumbers ] = React.useState(random);

  //react.fragment 실제 렌더링이 반영되지 않는 추상 컨테이너
  //jsx는 여러게에 컨포넌트를 반환 할수 없어 fragment로 묶어서 하나에 컨포넌트만 반환한다.
  return (
      <Container>
        <Row>
          {
            displayNumbers.map((item) => (
              <Ball color={getColor(item)}>
                <Label>{item}</Label>
              </Ball>
            ))
          }
        </Row>
        <Button title="다시뽑기" onPress={() => {setNumbers(random())}}/>
      </Container>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   ball: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "#E5E5E5E5",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     color: "#000",
//     fontWeight: "bold",
//   }
// });
