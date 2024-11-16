import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function BookingPolicies() {
  return (
    <HelmetProvider>
      <div
        className="w-full min-h-screen flex flex-col justify-center items-center space-y-5 bg-ltgreen text-dkbrown bg-cover bg-center pb-10"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Bookings & Policies</title>
        </Helmet>
        <div
          className="w-[90%] lg:w-[80%] space-y-5 lg:space-y-1 px-4 motion-safe:animate-slideIn"
        >
          <div className="w-full h-[20vh] font-MTreg flex justify-center items-center text-5xl md:text-6xl lg:text-7xl text-center">
            Bookings & Policies
          </div>
          <span className="text-lg md:text-2xl text-dkbrown w-full lg:w-[70%] font-NBI text-center mx-auto px-4">
            <p>
              At Woodward 2, we aim to provide a seamless and reliable booking
              experience. Please take a moment to review our booking policies to
              ensure a smooth reservation process.
            </p>
          </span>
        </div>

        {/* Deposit and Payment Options */}
        <div className="w-full flex flex-col items-center px-4 xl:px-20 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center motion-safe:animate-slideUp">
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center motion-safe:animate-slideIn"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                Deposit and Payment Options
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Deposit Requirement:</strong> For most bookings, a
                  deposit of [25% of the total amount] is required to secure the
                  reservation.
                </li>
                <li>
                  <strong>Payment Modes:</strong> We accept all major credit and
                  debit cards, digital wallets, and bank transfers.
                </li>
              </ul>
            </div>
          </div>

          {/* Cancellation and Refund Policy */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center motion-safe:animate-slideIn"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                Cancellation and Refund Policy
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Flexible Cancellation:</strong> Cancellations up to [48
                  hours] before check-in are fully refundable. For cancellations
                  made less than 48 hours before arrival, a [10%] fee may apply.
                </li>
                <li>
                  <strong>Refund Process:</strong> Refunds for eligible
                  cancellations are processed within 7-10 business days, and a
                  confirmation email will be sent once the refund is issued.
                </li>
              </ul>
            </div>
          </div>

          {/* Booking Modification Options */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <div
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center motion-safe:animate-slideIn"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                Booking Modification Options
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Change of Dates:</strong> Guests can request a change in
                  their booking dates based on availability. If there are any
                  price differences due to date changes, these will be adjusted
                  accordingly.
                </li>
                <li>
                  <strong>Upgrades:</strong> Guests wishing to upgrade to a
                  different room category may do so upon availability and at the
                  current rate for the new room type.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plan Your Adventure Section */}
        <div
          className="w-full max-w-screen-xl px-4 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center motion-safe:animate-slideIn"
        >
          <div className="w-full px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-MTreg text-dkkbrown text-center mb-4">
              Plan Your Adventure with Woodward 2
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown text-center mb-6">
              At Woodward 2, we’re here to help you make the most of your time in
              Kasol. Our team can assist with organizing treks, arranging
              transport, or providing recommendations for exploring the area’s
              hidden gems. Whether you're here to experience the culture, go on an
              adventure, or simply unwind, Kasol’s diverse attractions offer
              something special for every guest.
            </p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default BookingPolicies;
