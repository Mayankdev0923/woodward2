import greenbg from "../assets/greenbg.jpg";
import { Helmet,HelmetProvider } from "react-helmet-async";

function TermsAndPolicies() {
  return (
    <HelmetProvider>
      <div
        className="w-full pb-10 min-h-screen flex flex-col justify-center items-center space-y-5 bg-ltgreen text-dkbrown bg-cover bg-center"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        <Helmet>
          <title>Terms & Conditions</title>
        </Helmet>
        <div className="w-[90%] lg:w-[80%] space-y-5 lg:space-y-1 px-4">
          <div className="w-full h-[20vh] font-MTreg flex justify-center items-center text-5xl md:text-6xl lg:text-7xl text-center">
            Terms and Policies
          </div>
          <span className="text-lg md:text-2xl text-dkbrown w-full lg:w-[70%] font-NBI text-center mx-auto px-4">
            <p>
              Please read our terms and policies carefully to ensure a smooth and
              enjoyable stay at Wildflower. We’ve outlined key guidelines for your
              convenience and safety.
            </p>
          </span>
        </div>
        {/* Policies Grid (2 rows, 4 columns) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-4 xl:px-20 py-10">
          {/* Reservation and Payment Policies */}
          <div className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                1. Reservation and Payment Policies
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Deposit Requirement:</strong> A [30%] deposit is
                  required to confirm your reservation. We accept credit and debit
                  cards, bank transfers, and digital payments for your
                  convenience.
                </li>
                <li>
                  <strong>Group Bookings:</strong> For group bookings, full
                  payment is due [mention time frame, e.g., two weeks] before
                  arrival.
                </li>
              </ul>
            </div>
          </div>
          {/* Cancellation and Refund Policies */}
          <div className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                2. Cancellation and Refund Policies
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Cancellation:</strong> Cancellations are accepted up to
                  [48 hours] before check-in for a full refund. Late cancellations
                  will incur a [10%] cancellation fee.
                </li>
                <li>
                  <strong>No-Show Policy:</strong> No refunds are available for
                  no-shows unless there’s prior notice. Early departures may incur
                  fees, depending on the length of stay.
                </li>
              </ul>
            </div>
          </div>
          {/* Check-In and Check-Out Policies */}
          <div className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                3. Check-In and Check-Out Policies
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Check-in:</strong> Check-in begins at 2 PM, and we
                  kindly ask guests to check out by 11 AM. Requests for early
                  check-in or late check-out are based on availability and may
                  include additional charges.
                </li>
              </ul>
            </div>
          </div>
          {/* Children and Extra Bed Policies */}
          <div className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                4. Children and Extra Bed Policies
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Children:</strong> Children under [age limit, e.g., 6
                  years] stay free when sharing existing bedding with parents.
                </li>
                <li>
                  <strong>Extra Beds:</strong> Extra beds are available upon
                  request, subject to availability, and will incur an additional
                  charge.
                </li>
              </ul>
            </div>
          </div>
          {/* Pet Policy */}
          <div className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                5. Pet Policy
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Pet-Friendly Rooms:</strong> We are pleased to offer
                  pet-friendly rooms at Wildflower. Please inform us in advance if
                  you’re bringing pets, and note there is a nominal cleaning fee
                  of [mention fee].
                </li>
                <li>
                  <strong>Leash Requirement:</strong> For the comfort of all
                  guests, pets must be kept on a leash in common areas and should
                  not disturb other guests.
                </li>
              </ul>
            </div>
          </div>
          {/* Health and Safety Policies */}
          <div className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                6. Health and Safety Policies
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Smoking:</strong> Smoking is only permitted in
                  designated outdoor areas to maintain a clean and comfortable
                  environment for all guests.
                </li>
                <li>
                  <strong>COVID-19 Guidelines:</strong> In light of COVID-19,
                  Wildflower strictly follows health guidelines, including regular
                  cleaning, temperature checks, and on-site sanitization stations
                  for guest safety.
                </li>
                <li>
                  <strong>Quiet Hours:</strong> To ensure a peaceful stay for all
                  guests, quiet hours are observed between 10 PM and 7 AM.
                </li>
              </ul>
            </div>
          </div>
          {/* Damage and Liability Policy */}
          <div className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-center items-center p-8 space-y-6 rounded-3xl text-center">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-MTreg">
                7. Damage and Liability Policy
              </h3>
              <ul className="text-lg md:text-xl font-NBI">
                <li>
                  <strong>Guest Responsibility:</strong> Guests are responsible
                  for any damages to hotel property during their stay and may be
                  charged for repairs or replacements as necessary.
                </li>
                <li>
                  <strong>Valuables:</strong> We advise guests to use safes
                  provided in each room for their valuables, as Wildflower is not
                  liable for any lost or stolen items.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default TermsAndPolicies;
