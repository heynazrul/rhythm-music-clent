import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
// import './CheckoutForm.css';

const CheckoutForm = ({ price, item }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    console.log('checkout', price);
    axiosSecure.post('/create-payment-intent', { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError('');
      //   console.log('payment method', paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.email || 'anonymous',
        },
      },
    });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log('paymentIntent', paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      //   save user payment information to server
      const payment = {
        date: new Date(),
        classId: item._id,
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
      };
      axiosSecure.post('/student/payments', payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          // display confrim
        }
      });
    }
  };

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
        {cardError && <small className="text-error mt-1">{cardError}</small>}
        {transactionId && (
          <small className="text-success mt-1">Transaction successful with traxID: {transactionId}</small>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-primary btn-block btn-sm  mt-8"
            disabled={!stripe || !clientSecret || processing}>
            Pay
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
