import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe= useStripe()
    const elements= useElements()
    const [cardError, setCardError] = useState('')
    const [success, setSucces] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const {price, name, email} = order;

  useEffect( ()=>{

    fetch('http://localhost:5000/create-payment-intent',{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data =>{
      if(data?.clientSecret){
        setClientSecret(data.clientSecret)
      }

    })

  }, [price])

    const handleSubmit = async(event) =>{
        event.preventDefault()

        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

      
            setCardError(error?.message || '')
            setSucces('');

            //confirm card payment
    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        name: name,
        email: email
      },
    },
  })
  // .then(function(result) {
  //   // Handle result.error or result.paymentIntent
  // });

  if(intentError){
    setCardError(intentError?.message)
  }
  else{
    setCardError('');
    setTransactionId(paymentIntent.id)
    console.log(paymentIntent)
    setSucces('Congrates! Your payment is completed.')
  }
            
         
    }
    return (
      <>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />

      <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
      cardError && <p className='text-red-500'>{cardError}</p>
    }

    {
      success && <div className='text-green-500'>
        <p>{success}</p>
        <p>Your transaction Id: <span className="text-orange-500">{transactionId}</span></p>      
      </div>
    }
      </>
    );
};

export default CheckoutForm;