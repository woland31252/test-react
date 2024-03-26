

export default function PaymentCard({ payment: {amount, cardNumber, cardType, description, cardOwner, date, isPaid}}) {
    
    return (
    <div>
        {/* варіант1
        {isPaid? <p>Status: Paid</p>: <p>Status: Paiding</p>} */}
        {/* варіант2
        <p>{isPaid?"Status: Paid": "Status: Paiding"}</p> */}
        {/* варіант3 */}
        <p>Status: {isPaid ? "Paid" : "Paiding"}</p>
        <p>Amount: {amount} </p>  
        <p>Description: {description} </p>
        <p>Card Number: {cardNumber} </p>
        <p>Card Type: {cardType} </p>
        <p>Card Holder Name: {cardOwner} </p>
        <p>Payment Date: {date} </p>
        
        <hr/>    
    </div>
    )
}