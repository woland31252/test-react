import PaymentCard from './PaymentCard';
export default function PaymentsList({ payments }) {
    return (
        <ul>
            {payments.map((el) => (
                <li key={el.id} ><PaymentCard payment={el} />
                </li>
            ))}
        </ul>
    )
}