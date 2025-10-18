import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function TermsAndPolicies() {
  return (
    <HelmetProvider>
      <div
        className="w-full pb-10 min-h-screen flex flex-col justify-center items-center space-y-5 bg-ltgreen text-dkbrown bg-cover bg-center"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>Terms & Conditions - Woodward II Kasol Hotel Policies</title>
          <meta
            name="description"
            content="Read Woodward II Kasol terms and conditions: reservation policies, cancellation, check-in/out times, pet policy, health & safety guidelines, and guest responsibilities."
          />
          <meta
            name="keywords"
            content="Woodward 2 terms, hotel terms and conditions Kasol, guest policies, pet policy hotel, health safety guidelines, reservation terms"
          />
          <link rel="canonical" href="https://www.4wildflowerhospitality.com/TermsAndPolicies" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Terms & Conditions - Woodward II Kasol Hotel Policies" />
          <meta
            property="og:description"
            content="Comprehensive terms and conditions for guests at Woodward II Kasol. Review our policies before booking."
          />
          <meta property="og:url" content="https://www.4wildflowerhospitality.com/TermsAndPolicies" />
          
          {/* FAQ Schema for Terms Questions */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the check-in and check-out time at Woodward II?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Check-in begins at 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are pets allowed at Woodward II Kasol?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer pet-friendly rooms. Please inform us in advance if bringing pets. A nominal cleaning fee applies. Pets must be kept on leash in common areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the deposit requirement for booking?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A 30% deposit is required to confirm your reservation. We accept credit/debit cards, bank transfers, and digital payments."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is smoking allowed in the hotel?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Smoking is only permitted in designated outdoor areas to maintain a clean and comfortable environment for all guests."
                  }
                }
              ]
            })}
          </script>
        </Helmet>

        <div className="w-[90%] lg:w-[80%] space-y-5 lg:space-y-1 px-4">
          {/* H1 with keywords */}
          <h1 className="w-full h-[20vh] font-MTreg flex justify-center items-center text-5xl md:text-6xl lg:text-7xl text-center motion-safe:animate-slideIn">
            Terms & Conditions
          </h1>
          <div className="text-lg md:text-2xl text-dkbrown w-full lg:w-[70%] font-NBI text-center mx-auto px-4">
            <p className="motion-safe:animate-slideIn">
              Please read our comprehensive terms and conditions carefully to ensure a smooth, 
              safe, and enjoyable stay at Woodward 2 in Kasol. We've outlined key guidelines, 
              policies, and guest responsibilities for your convenience, safety, and to maintain 
              a welcoming environment for all visitors to our Himalayan retreat.
            </p>
          </div>
        </div>

        {/* Last Updated Notice */}
        <div className="w-full max-w-7xl px-6 py-4 bg-white bg-opacity-80 rounded-lg text-center">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> October 18, 2025 | These terms apply to all bookings 
            at Woodward II by 4 Wildflower Hospitality
          </p>
        </div>

        {/* Policies Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 xl:px-20 py-10">
          
          {/* 1. Reservation and Payment Policies */}
          <article className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                Reservation & Payment
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Deposit Requirement:</strong> A 30% advance deposit of the total booking 
                  amount is required to confirm your reservation at Woodward 2. This deposit secures 
                  your room allocation and booking dates.
                </p>
                <p>
                  <strong>Payment Methods:</strong> We accept all major credit and debit cards (Visa, 
                  Mastercard, RuPay), UPI payments (Google Pay, PhonePe, Paytm), bank transfers 
                  (NEFT/RTGS/IMPS), and digital wallets for your convenience and security.
                </p>
                <p>
                  <strong>Remaining Balance:</strong> The remaining 70% of your total booking amount 
                  is payable at check-in via any accepted payment method or in cash.
                </p>
                <p>
                  <strong>Group Bookings:</strong> For group reservations of 5 or more rooms, full 
                  payment is required two weeks (14 days) before the scheduled arrival date to ensure 
                  confirmed allocation.
                </p>
                <p>
                  <strong>Price Guarantee:</strong> Rates are locked at the time of booking. Any 
                  subsequent price changes do not affect confirmed reservations.
                </p>
              </div>
            </div>
          </article>

          {/* 2. Cancellation and Refund Policies */}
          <article className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                Cancellation & Refunds
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Cancellation Window:</strong> Cancellations made up to 48 hours (2 days) 
                  before your scheduled check-in date are eligible for a full refund of your deposit 
                  and any payments made.
                </p>
                <p>
                  <strong>Late Cancellation Fee:</strong> Cancellations made less than 48 hours before 
                  check-in will incur a 10% cancellation fee. The remaining 90% will be refunded to 
                  your original payment method.
                </p>
                <p>
                  <strong>No-Show Policy:</strong> In case of no-show (failure to arrive without prior 
                  cancellation notice), no refunds will be issued and the full booking amount is forfeited. 
                  Please contact us if you encounter travel delays or emergencies.
                </p>
                <p>
                  <strong>Early Departure:</strong> If you depart earlier than your scheduled check-out 
                  date, no refunds are available for unused nights unless exceptional circumstances apply 
                  (to be evaluated case-by-case).
                </p>
                <p>
                  <strong>Refund Processing:</strong> Approved refunds are processed within 7-10 business 
                  days to the original payment method. Bank processing times may vary.
                </p>
              </div>
            </div>
          </article>

          {/* 3. Check-In and Check-Out Policies */}
          <article className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                Check-In & Check-Out
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Standard Check-In Time:</strong> Check-in begins at 2:00 PM (14:00). Rooms 
                  are prepared and ready for occupancy from this time onwards.
                </p>
                <p>
                  <strong>Standard Check-Out Time:</strong> Check-out is by 11:00 AM (11:00) to allow 
                  adequate time for housekeeping and preparation for incoming guests.
                </p>
                <p>
                  <strong>Early Check-In:</strong> Requests for early check-in are based on room 
                  availability and may incur additional charges (typically 50% of room rate for 
                  check-in before 10 AM). Please contact us in advance to request early check-in.
                </p>
                <p>
                  <strong>Late Check-Out:</strong> Late check-out requests are subject to availability. 
                  Check-out until 2 PM may incur 50% of the daily room rate. Check-out after 2 PM will 
                  be charged at full room rate for an additional day.
                </p>
                <p>
                  <strong>ID Verification:</strong> Valid government-issued photo identification (Aadhaar 
                  Card, Passport, Driving License, or Voter ID) is mandatory for all guests at check-in 
                  as per Indian hospitality regulations and local laws.
                </p>
              </div>
            </div>
          </article>

          {/* 4. Children and Extra Bed Policies */}
          <article className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                Children & Extra Beds
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Children Policy:</strong> Children under 6 years of age stay free of charge 
                  when sharing existing bedding with parents or guardians. No additional charges apply 
                  for infants and toddlers.
                </p>
                <p>
                  <strong>Children Ages 6-12:</strong> Children between 6-12 years are charged 50% of 
                  the adult extra person rate when requiring separate bedding.
                </p>
                <p>
                  <strong>Extra Beds:</strong> Extra beds and mattresses are available upon advance 
                  request, subject to room size and availability. Additional charges apply based on 
                  room category.
                </p>
                <p>
                  <strong>Crib/Baby Cot:</strong> Complimentary baby cribs and cots are available for 
                  infants upon request (subject to availability). Please inform us at the time of booking.
                </p>
                <p>
                  <strong>Meal Policy:</strong> Children under 6 eat free when sharing parents' meals. 
                  Separate meal orders for children are charged at applicable menu rates.
                </p>
              </div>
            </div>
          </article>

          {/* 5. Pet Policy */}
          <article className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                Pet-Friendly Policy
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Pet-Friendly Rooms:</strong> We are pleased to offer select pet-friendly rooms 
                  at Woodward 2 for guests traveling with their furry companions. Please inform us at 
                  the time of booking if you plan to bring pets.
                </p>
                <p>
                  <strong>Pet Cleaning Fee:</strong> A nominal one-time cleaning fee of ₹500 per pet 
                  per stay applies to cover additional housekeeping requirements.
                </p>
                <p>
                  <strong>Pet Size & Type:</strong> We accommodate small to medium-sized dogs and cats. 
                  Large breeds and exotic pets require prior approval from management.
                </p>
                <p>
                  <strong>Leash Requirement:</strong> For the safety, comfort, and consideration of all 
                  guests, pets must be kept on a leash at all times in common areas, corridors, 
                  restaurant, and outdoor spaces.
                </p>
                <p>
                  <strong>Pet Supervision:</strong> Pets should not be left unattended in rooms. If you 
                  need to leave your pet temporarily, please inform the front desk for arrangements.
                </p>
                <p>
                  <strong>Damage Responsibility:</strong> Pet owners are responsible for any damage caused 
                  by their pets to hotel property, furnishings, or belongings of other guests.
                </p>
              </div>
            </div>
          </article>

          {/* 6. Health and Safety Policies */}
          <article className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                Health & Safety Guidelines
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Smoking Policy:</strong> Smoking is strictly prohibited inside rooms, hallways, 
                  restaurant, and all indoor common areas. Smoking is only permitted in designated outdoor 
                  areas to maintain clean air and comfort for all guests. Violation may result in a 
                  cleaning fee of ₹2,000.
                </p>
                <p>
                  <strong>COVID-19 Safety Measures:</strong> Woodward 2 strictly follows health and safety 
                  guidelines including regular sanitization of high-touch surfaces, hand sanitizer stations 
                  throughout the property, and enhanced cleaning protocols in all rooms and public areas.
                </p>
                <p>
                  <strong>Quiet Hours:</strong> To ensure a peaceful and restful stay for all guests, 
                  quiet hours are observed between 10:00 PM and 7:00 AM. Loud music, parties, or 
                  disturbances during these hours are not permitted.
                </p>
                <p>
                  <strong>Emergency Procedures:</strong> Fire safety equipment, emergency exits, and 
                  evacuation procedures are clearly marked. Please familiarize yourself with the nearest 
                  exits upon arrival.
                </p>
                <p>
                  <strong>Substance Policy:</strong> Possession, consumption, or sale of illegal substances 
                  is strictly prohibited and will result in immediate eviction without refund and 
                  notification to local authorities.
                </p>
              </div>
            </div>
          </article>

          {/* 7. Damage and Liability Policy */}
          <article className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                Damage & Liability
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Guest Responsibility for Damage:</strong> Guests are financially responsible 
                  for any damage, loss, or breakage of hotel property, fixtures, furnishings, or equipment 
                  during their stay. Charges for repair or replacement will be added to your final bill or 
                  charged to your payment method on file.
                </p>
                <p>
                  <strong>Room Inspection:</strong> Staff may conduct room inspections at check-out to 
                  assess the condition of the room and identify any damages requiring attention.
                </p>
                <p>
                  <strong>Valuables and Personal Belongings:</strong> We strongly advise guests to use 
                  the in-room safes provided for storing valuables, jewelry, cash, electronics, and 
                  important documents. Woodward 2 is not liable for any lost, stolen, or damaged personal 
                  belongings.
                </p>
                <p>
                  <strong>Parking Liability:</strong> While we provide complimentary parking, Woodward 2 
                  is not responsible for damage, theft, or loss related to vehicles or their contents 
                  parked on the premises.
                </p>
                <p>
                  <strong>Force Majeure:</strong> Woodward 2 shall not be held liable for failure to 
                  provide services due to circumstances beyond our control, including natural disasters, 
                  government actions, strikes, or other force majeure events.
                </p>
              </div>
            </div>
          </article>

          {/* 8. Additional Guest Conduct Rules */}
          <article className="p-4">
            <div className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold w-full text-center">
                Guest Conduct & Behavior
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Respectful Behavior:</strong> All guests are expected to maintain respectful, 
                  courteous behavior toward staff and fellow guests. Abusive, threatening, or disruptive 
                  behavior will not be tolerated and may result in eviction without refund.
                </p>
                <p>
                  <strong>Visitor Policy:</strong> Registered guests may receive visitors in public areas 
                  during daytime hours (8 AM - 8 PM). Visitors are not permitted in guest rooms unless 
                  they are registered as occupants. Overnight guests must be registered at the front desk.
                </p>
                <p>
                  <strong>Maximum Occupancy:</strong> Room occupancy limits must be strictly observed as 
                  per fire safety regulations. Exceeding maximum occupancy without prior authorization 
                  may result in additional charges or eviction.
                </p>
                <p>
                  <strong>House Rules:</strong> Guests must comply with all posted house rules and staff 
                  instructions for the safety and comfort of all occupants.
                </p>
              </div>
            </div>
          </article>

        </div>

        {/* Agreement Statement */}
        <div className="w-full max-w-7xl px-6 py-8 bg-white bg-opacity-90 rounded-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-dkbrown">
            Acceptance of Terms
          </h2>
          <div className="text-lg space-y-4 text-center">
            <p>
              By completing a reservation and staying at Woodward 2 by 4 Wildflower Hospitality, you 
              acknowledge that you have read, understood, and agree to abide by all terms, conditions, 
              and policies outlined above. These terms constitute a legally binding agreement between 
              you and Woodward 2.
            </p>
            <p>
              Management reserves the right to modify these terms and conditions at any time. Changes 
              will be effective immediately upon posting on our website. It is the guest's responsibility 
              to review terms periodically.
            </p>
            <p>
              For questions, clarifications, or special requests regarding our terms and policies, 
              please contact us at <a href="tel:+919317707539" className="text-dkkbrown font-semibold hover:underline">+91-9317707539</a> or 
              email <a href="mailto:info@4wildflowerhospitality.com" className="text-dkkbrown font-semibold hover:underline">info@4wildflowerhospitality.com</a>
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center space-y-4 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-dkbrown">
            Questions About Our Terms?
          </h2>
          <p className="text-xl md:text-2xl text-dkbrown">
            Our team is here to clarify any policies or address your concerns.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="tel:+919317707539"
              className="px-8 py-3 text-xl font-semibold text-white bg-dkkbrown rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Call Us Now
            </a>
            <a
              href="/Book"
              className="px-8 py-3 text-xl font-semibold text-dkkbrown border-2 border-dkkbrown rounded-lg hover:bg-dkkbrown hover:text-white transition duration-300"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default TermsAndPolicies;
