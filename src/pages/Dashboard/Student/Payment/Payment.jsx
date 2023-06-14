import { Helmet } from 'react-helmet-async';

import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { item } = location.state;

  const price = parseFloat(item.price);

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  return (
    <div className="max-w-md mx-auto px-4 my-10">
      <Helmet>
        <title>Rhythm | Make Payment</title>
      </Helmet>

      <div className="card bg-base-100 shadow-xl mx-auto ">
        <figure className="h-56">
          <img
            src="https://cdn.pixabay.com/photo/2016/07/15/21/07/credit-card-1520400_1280.jpg"
            alt="Card"
          />
        </figure>
        <div className="card-body">
          <div className="text-center pb-6">
            <h2 className=" font-semibold text-2xl pb-2">Make Payment</h2>
            <p>
              Total Amount will be charged: <span className="font-semibold">{price}</span>
            </p>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              price={price}
              item={item}></CheckoutForm>
          </Elements>
          {/* <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body w-full mx-auto bg-base-200 rounded-md pb-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Name</span>
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                placeholder="Class Name"
                className="input input-bordered"
              />
              {errors.name && errors.name.type === 'required' && (
                <span className="text-error">{errors.name.message}</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>

              <input
                type="text"
                {...register('img')}
                placeholder="Image URL"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value={'Add Class'}
              />
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
