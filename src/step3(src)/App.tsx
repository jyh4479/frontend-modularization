import {Payment} from "./components/Payment";

/*

step2는 폴더 구조 추천해주기 전에 내가 스스로 나눈 폴더구조
step3는 블로그 작성자가 추천해준 폴더구조 (거의 비슷하긴함)

step3는 새로운 요구사항이 들어왔을때 변경사항에 대한 부분을 이론적으로 설명
요구사항: 자선단체에 기부 -> ex) 19.8 주문시 0.2를 표시해주며 기부 동의 체크 표시 제공

*/

const App = () => {
    return <Payment amount={100}/>;
}

export default App;