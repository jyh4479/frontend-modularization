import {usePaymentMethods} from "../hooks/usePaymentMethods";
import {PaymentMethods} from "../components/PaymentMethods";

export const Payment = ({amount}: { amount: number }) => {

    const paymentMethods = usePaymentMethods();

    return (
        <div>
            <h3>Payment</h3>
            <PaymentMethods paymentMethods={paymentMethods}/>
            <button>${amount}</button>
        </div>
    );
};