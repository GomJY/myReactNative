# Counter 어플 만들기


## interface지정 (typeScript)
- Interface를 이용하여 타입 지정 
```typescript
interface Props {
  icon: 'plus' | 'minus';
  onPress?: () => void;
}

const  Button = ({ iconName, onPress }: Props) => { ... }
```

## Image 아이템
- reactNative에서 img태그 대신 사용하는 아이템이다.
- TouchableOpacity와 연동하여 버튼을 만들때 사용한다.
- 기본사이즈 이외에 2x, 3x의 크기에 사이즈가 있는 경우 화면 사이즈에 맞게 적용된다. 
```javascript
<Image
    source={require('~/Assets/Images/add.png')}
  />
```