# 스무디7_WeatherApp.md


## 로딩 뷰
```typescript
const Loading = Styled.ActivityIndicator`
  margin-bottom: 16px;
`;

<Loading size="large" color="#1976D2" />
```

## 위치정보 - react-native-geolocation module
geolocation 4.9이하와 5.0이상 버전이 적용법이 다르다.

[공식 문서](https://www.npmjs.com/package/react-native-geolocation-service)

### 사용법
```javascript
import Geolocation from 'react-native-geolocation-service';

Geolocation.getCurrentPosition(
  position => {
    position: {
      coords: {
        accuracy: 5,
        altitude: 0,
        altitudeAccuracy: -1,
        heading: -1,
        latitude: 37.785834,
        longitude: -122.406417,
        speed: -1,
      },
      timestamp: 1598314588839.7268
    }
    ...
  },
  errr => {
    ...
  }
);
```