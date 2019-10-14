# React

- 함수형 컴포넌트
- Class형 컴포넌트

```javascript
// Class형

Class Name extends React.Component{
    contructor(props) {
        super(props);

        this.state= {
            // 스테이트 적용
        }
    }

    render{
        return(
            <>
                태그로 감싸고 
            </>
        )
    }
}

export default Name; // 외부에서 import 할 수 있게 변경
```
```javascript
// 함수형 컴포넌트
const Name = () => {
    const [array,setArray] = useState('');

    return(
        <>
            ㅇㄻㄴㄻㄴㅇ
        </>
    )
}
```