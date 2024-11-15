import greenbg from "../assets/greenbg.jpg";

function BookingPolicies() {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center space-y-5 bg-ltgreen text-dkbrown bg-cover bg-center pb-10"
      style={{ backgroundImage: `url(${greenbg})` }}
    >
      <div className="w-[90%] lg:w-[80%] space-y-5 lg:space-y-1 px-4">
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
      <div className="w-full flex flex-col items-center px-4 xl:px-20 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center">
        <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
          <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
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
          <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
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
          <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
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
      <div className="w-full max-w-screen-xl px-4 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center">
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

        {/* Booking Options at Woodward 2 */}
        <div className="w-full px-4 pb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-MTreg text-dkkbrown text-center mb-8">
            Booking Options at Woodward 2
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown text-center mb-8">
            At Woodward 2, we aim to make the booking process as convenient and
            flexible as possible, whether you prefer to reserve your stay
            directly through us or use your favorite travel platforms. Explore
            our range of booking options to secure your place in the heart of
            Kasol:
          </p>

          {/* Booking Options List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-MTreg text-dkkbrown mb-4">
                1. Direct Booking Through Our Website
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown">
                <li>
                  <strong>Exclusive Offers:</strong> Booking directly through
                  our website gives you access to exclusive offers, promotions,
                  and the best available rates, making your stay even more
                  rewarding.
                </li>
                <li>
                  <strong>Seamless Online Booking:</strong> Use our secure
                  online booking system to choose your preferred room type,
                  dates, and any additional options like breakfast or in-room
                  amenities. A confirmation email will be sent to you as soon as
                  your booking is complete.
                </li>
                <li>
                  <strong>Flexible Payment Options:</strong> We offer various
                  payment options to ensure a smooth transaction experience,
                  including credit/debit cards, bank transfers, and digital
                  wallet payments.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-MTreg text-dkkbrown mb-4">
                2. Phone or Email Reservations
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown">
                <li>
                  <strong>Personalized Assistance:</strong> If you prefer a more
                  personal touch, our team is happy to assist with your
                  reservation over the phone or via email. Reach out to us
                  directly at [hotel contact number] or [hotel email address],
                  and we’ll guide you through the booking process and answer any
                  specific questions you may have.
                </li>
                <li>
                  <strong>Special Requests:</strong> Through direct
                  communication, you can easily make special arrangements like
                  early check-in, additional bedding, or room customization.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-MTreg text-dkkbrown mb-4">
                3. Third-Party Booking Platforms
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown">
                <li>
                  <strong>Convenience and Rewards:</strong> We’re listed on
                  popular travel platforms, such as Booking.com, Expedia, and
                  Agoda, making it easy to book while earning platform-specific
                  rewards.
                </li>
                <li>
                  <strong>Real-Time Availability:</strong> Our listings are
                  regularly updated with real-time availability and seasonal
                  pricing to ensure you have accurate information.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-MTreg text-dkkbrown mb-4">
                4. Group and Event Bookings
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown">
                <li>
                  <strong>Customized Group Packages:</strong> For group
                  stays—whether for family reunions, corporate retreats, or
                  special events—our team offers tailored booking options with
                  special rates for large groups.
                </li>
                <li>
                  <strong>Event Hosting and Assistance:</strong> We can help
                  organize group activities like treks, team-building exercises,
                  and local tours, creating a memorable experience for every
                  guest. Contact us to discuss group packages.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-MTreg text-dkkbrown mb-4">
                5. Long Stay and Seasonal Bookings
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown">
                <li>
                  <strong>Special Discounts for Extended Stays:</strong> We
                  offer discounted rates for guests staying longer than a week,
                  ideal for those wishing to work remotely or explore Kasol.
                </li>
                <li>
                  <strong>Seasonal Packages:</strong> Enjoy customized seasonal
                  packages during peak seasons like summer, winter holidays, or
                  local festivals. Keep an eye on our website for the latest
                  offers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPolicies;
