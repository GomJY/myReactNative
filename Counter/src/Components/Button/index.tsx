import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const Icon = Styled.Image``;

interface Props {
  icon: 'plus' | 'minus';
  onPress?: () => void;
}

// Interface를 이용하여 타입 지정
const  Button = ({ iconName, onPress }: Props) => {
  return (
      <Container onPress={onPress}>
        <Icon
          source={
            iconName === 'plus'
              ? require('~/Assets/Images/baseline_add_circle_black_18pt_1x.png')
              : require('~/Assets/Images/baseline_remove_circle_black_18pt_1x.png')
          }
        />
      </Container>
  );
};

export default Button;
