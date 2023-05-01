import {usePaymentMethods} from "./hook/usePaymentMethods";
import {PaymentMethods} from "./component/PaymentMethods";

/*
1. 뷰와 관련된 코드, 뷰와 관련되지 않은 코드 분리
customHook을 통한 뷰 이외의 코드 분리

2. 하위 컴포넌트 추출을 통한 뷰 분할

3. 로직을 캡슐화하는 데이터 모델링
문제점 -> 뷰를 담당하는 component인 PaymentMethods에 default check를 판단하는 로직
결 론 -> 데이터의 동작을 집중시키자
해결법 -> model > PaymentMethod class 생성으로 데이터와 관련된 로직을 집중

 */

export const Payment = ({amount}: { amount: number }) => {

    const paymentMethods = usePaymentMethods(); //1번 문제점의 해결법

    return (
        <div>
            <h3>Payment</h3>
            <PaymentMethods paymentMethods={paymentMethods}/>
            {/* 2번 문제점의 해결법 (하지만 무조건 순수 컴포넌트를 사용해서 분리하는것보다 분리함으로 확실히 재사용할 수 있고 유지보수에 좋다고 판단할때 작업이 이루어져야함) */}
            <button>${amount}</button>
        </div>
    );
};

/*

1, 2, 3 과정을 통한 이점

클래스로 결제 수단과 관련된 모든 로직을 캡슐화 할 수 있습니다. 
이는 도메인 객체이며 UI와 관련된 정보를 포함하지 않습니다.
따라서 여기서 로직을 테스트하고 잠재적으로 수정하는 것이 뷰에 포함되어 있을 때보다 훨씬 쉽습니다.
새로 추출된 컴포넌트인 PaymentMethods는 순수 함수이며 도메인 객체 배열에만 의존하므로 다른 곳에서 테스트하고 재사용하기가 매우 쉽습니다.
onSelect 콜백을 전달해야 할 수도 있지만, 이 경우도 순수 함수이므로 외부의 상태를 건드릴 필요가 없습니다.
각 기능의 부분이 명확합니다. 새로운 요구 사항이 발생하면 모든 코드를 읽지 않고도 적절한 위치로 이동할 수 있습니다.

*/