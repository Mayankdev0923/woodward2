import greenbg from "../assets/greenbg.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function BookingPolicies() {
  return (
    <HelmetProvider>
      <div
        className="w-full min-h-screen flex flex-col justify-center items-center space-y-5 bg-ltgreen text-dkbrown bg-cover bg-center pb-10"
        style={{ backgroundImage: `url(${greenbg})` }}
      >
        {/* Enhanced SEO Meta Tags */}
        <Helmet>
          <title>Booking Policies & Cancellation - Woodward II Kasol Hotel</title>
          <meta
            name="description"
            content="Review Woodward II Kasol booking policies: 25% deposit, flexible cancellation up to 48 hours, payment options, check-in/out times, and guest guidelines."
          />
          <meta
            name="keywords"
            content="Woodward 2 booking policy, Kasol hotel cancellation, hotel deposit policy, check-in check-out time Kasol, payment options hotel"
          />
          <link rel="canonical" href="https://www.4wildflowerhospitality.com/BookingPolicies" />
          
          {/* Open Graph Tags */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Booking Policies & Cancellation - Woodward II Kasol Hotel" />
          <meta
            property="og:description"
            content="Transparent booking policies at Woodward II: flexible cancellation, secure payments, and guest-friendly terms for your Kasol stay."
          />
          <meta property="og:url" content="https://www.4wildflowerhospitality.com/BookingPolicies" />
          
          {/* FAQ Schema for Booking Questions */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the cancellation policy at Woodward II Kasol?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cancellations up to 48 hours before check-in are fully refundable. For cancellations made less than 48 hours before arrival, a 10% cancellation fee applies. Refunds are processed within 7-10 business days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much deposit is required to book at Woodward II?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A deposit of 25% of the total booking amount is required to secure your reservation at Woodward II Kasol."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the check-in and check-out times?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standard check-in time is 12:00 PM (noon) and check-out time is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What payment methods are accepted at Woodward II?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We accept all major credit and debit cards (Visa, Mastercard, RuPay), UPI payments, digital wallets (Paytm, Google Pay, PhonePe), and bank transfers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I modify my booking dates?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can request a change in booking dates subject to room availability. Any price differences due to date changes will be adjusted accordingly."
                  }
                }
              ]
            })}
          </script>
        </Helmet>

        <div className="w-[90%] lg:w-[80%] space-y-5 lg:space-y-1 px-4 motion-safe:animate-slideIn">
          {/* H1 with keywords */}
          <h1 className="w-full h-[20vh] font-MTreg flex justify-center items-center text-5xl md:text-6xl lg:text-7xl text-center">
            Booking Policies & Terms
          </h1>
          <div className="text-lg md:text-2xl text-dkbrown w-full lg:w-[70%] font-NBI text-center mx-auto px-4">
            <p>
              At Woodward 2 in Kasol, we are committed to providing a seamless, transparent, and 
              reliable booking experience for all guests. Our policies are designed to be fair, 
              flexible, and guest-friendly while ensuring smooth operations. Please review our 
              booking terms, cancellation policy, payment options, and guest guidelines below to 
              ensure a hassle-free reservation process for your Himalayan getaway.
            </p>
          </div>
        </div>

        {/* Key Policies Grid */}
        <div className="w-full flex flex-col items-center px-4 xl:px-20 space-y-10 lg:space-y-0 lg:flex-row lg:flex-wrap justify-center motion-safe:animate-slideUp">
          
          {/* Deposit and Payment Options */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <article
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center w-full">
                Deposit & Payment Options
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Deposit Requirement:</strong> To secure your reservation at Woodward 2, 
                  a deposit of 25% of the total booking amount is required at the time of booking. 
                  This deposit confirms your room allocation and holds your dates.
                </p>
                <p>
                  <strong>Payment Methods Accepted:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All major credit and debit cards (Visa, Mastercard, RuPay)</li>
                  <li>UPI payments (Google Pay, PhonePe, Paytm)</li>
                  <li>Digital wallets and mobile payment apps</li>
                  <li>Direct bank transfers (NEFT/RTGS/IMPS)</li>
                  <li>Cash payment upon arrival (remaining balance)</li>
                </ul>
                <p>
                  <strong>Remaining Balance:</strong> The remaining 75% of the total amount is payable 
                  at the time of check-in via any of the above payment methods.
                </p>
                <p>
                  <strong>Advance Payment Discounts:</strong> Guests paying 100% in advance may be 
                  eligible for special discounts during off-peak seasons. Contact us for details.
                </p>
              </div>
            </article>
          </div>

          {/* Cancellation and Refund Policy */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <article
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center w-full">
                Cancellation & Refund Policy
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Flexible Cancellation:</strong> We understand that travel plans can change. 
                  Cancellations made up to 48 hours (2 days) before your scheduled check-in date are 
                  fully refundable with no penalty.
                </p>
                <p>
                  <strong>Late Cancellation Fee:</strong> For cancellations made less than 48 hours 
                  before check-in, a cancellation fee of 10% of the total booking amount will be 
                  deducted from your refund. The remaining 90% will be refunded.
                </p>
                <p>
                  <strong>No-Show Policy:</strong> In case of no-show (failure to arrive without 
                  cancellation), the full booking amount will be forfeited and no refund will be issued.
                </p>
                <p>
                  <strong>Refund Processing:</strong> Refunds for eligible cancellations are processed 
                  within 7-10 business days to the original payment method. A confirmation email will 
                  be sent once the refund is initiated. Bank processing times may vary.
                </p>
                <p>
                  <strong>Special Circumstances:</strong> In case of emergencies, natural calamities, 
                  or unforeseen circumstances preventing travel, please contact us directly. We may 
                  offer flexible rescheduling or refund options on a case-by-case basis.
                </p>
              </div>
            </article>
          </div>

          {/* Booking Modification Options */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <article
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center w-full">
                Booking Modification Options
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Change of Dates:</strong> Need to reschedule your Kasol trip? Guests can 
                  request changes to their booking dates subject to room availability. Date changes 
                  must be requested at least 48 hours before the original check-in date.
                </p>
                <p>
                  <strong>Price Adjustments:</strong> If the new dates have different pricing (peak 
                  season vs off-season), the rate difference will be adjusted in your final payment. 
                  You will be notified of any additional charges or credits before confirmation.
                </p>
                <p>
                  <strong>Room Upgrades:</strong> Guests wishing to upgrade to a higher room category 
                  (e.g., from Standard to Deluxe) may do so based on availability. Upgrades can be 
                  requested during booking or at check-in. Additional charges apply based on the 
                  current rate for the upgraded room type.
                </p>
                <p>
                  <strong>Adding Extra Guests:</strong> If you need to add additional guests to your 
                  booking, please inform us at least 24 hours in advance. Extra person charges and 
                  availability will be confirmed by our team.
                </p>
                <p>
                  <strong>Modification Requests:</strong> Contact us via phone, email, or WhatsApp 
                  to request booking modifications. We respond within 24 hours with confirmation.
                </p>
              </div>
            </article>
          </div>

          {/* Check-in & Check-out */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <article
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center w-full">
                Check-In & Check-Out
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Standard Check-In Time:</strong> 12:00 PM (Noon)<br />
                  Rooms are prepared and ready for occupancy from noon onwards.
                </p>
                <p>
                  <strong>Standard Check-Out Time:</strong> 11:00 AM<br />
                  Guests are requested to vacate rooms by 11 AM to allow housekeeping preparation.
                </p>
                <p>
                  <strong>Early Check-In:</strong> Subject to availability and may incur additional 
                  charges (typically 50% of room rate for check-in before 9 AM). Contact us in advance 
                  to request early check-in.
                </p>
                <p>
                  <strong>Late Check-Out:</strong> Available upon request based on room availability. 
                  Late check-out until 3 PM may incur additional charges (typically 50% of room rate). 
                  Check-out after 3 PM will be charged full room rate for an additional day.
                </p>
                <p>
                  <strong>ID Proof Requirement:</strong> Valid government-issued photo ID (Aadhaar, 
                  Passport, Driving License, Voter ID) is mandatory for all guests at check-in as per 
                  Indian hospitality regulations.
                </p>
              </div>
            </article>
          </div>

          {/* Guest Guidelines */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <article
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center w-full">
                Guest Guidelines
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Property Conduct:</strong> Guests are expected to maintain decorum and 
                  respect the peaceful mountain environment. Loud music or disturbances after 10 PM 
                  are not permitted to ensure all guests enjoy a restful stay.
                </p>
                <p>
                  <strong>Smoking Policy:</strong> Smoking is prohibited inside rooms and common 
                  indoor areas. Designated smoking areas are available outdoors.
                </p>
                <p>
                  <strong>Damage Policy:</strong> Guests are responsible for any damage caused to 
                  hotel property during their stay. Charges for repairs or replacements will be 
                  added to the final bill.
                </p>
                <p>
                  <strong>Lost & Found:</strong> Woodward 2 is not responsible for loss or theft of 
                  personal belongings. Guests are advised to use room safes for valuables.
                </p>
                <p>
                  <strong>Pet Policy:</strong> Pets are not allowed unless prior written permission 
                  is obtained from management. Additional cleaning charges may apply.
                </p>
                <p>
                  <strong>Local Laws:</strong> Guests must comply with local laws and regulations. 
                  Possession or consumption of illegal substances is strictly prohibited and will 
                  result in immediate eviction without refund.
                </p>
              </div>
            </article>
          </div>

          {/* Group Bookings */}
          <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
            <article
              className="border-4 bg-greenish border-darkgreen flex flex-col justify-start items-start p-8 space-y-4 rounded-3xl motion-safe:animate-slideIn h-full"
              style={{ backgroundImage: `url(${greenbg})`, backgroundSize: "cover" }}
            >
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center w-full">
                Group & Special Bookings
              </h2>
              <div className="text-lg md:text-xl font-NBI space-y-3 text-left">
                <p>
                  <strong>Group Bookings (5+ Rooms):</strong> Special group rates and packages 
                  are available for bookings of 5 or more rooms. Contact us directly for customized 
                  itineraries, meal plans, and activity arrangements.
                </p>
                <p>
                  <strong>Corporate Bookings:</strong> We offer special corporate rates for business 
                  travelers and team outings. GST invoices and other corporate billing requirements 
                  can be accommodated.
                </p>
                <p>
                  <strong>Event Bookings:</strong> Planning a wedding, anniversary, or celebration 
                  in Kasol? We can help arrange special decorations, catering, and event coordination. 
                  Advance notice of at least 15 days is required.
                </p>
                <p>
                  <strong>Long-Stay Discounts:</strong> Guests booking 7+ nights are eligible for 
                  extended stay discounts. Contact us for weekly and monthly rate options.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* Contact & Support Section */}
        <div className="w-full max-w-screen-xl px-4 py-10 space-y-6 motion-safe:animate-slideIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dkkbrown text-center mb-6">
            Questions About Our Policies?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown text-center mb-6">
            Our team at Woodward 2 is here to assist with any questions regarding bookings, 
            cancellations, payments, or special requests. We're committed to making your Kasol 
            experience smooth from booking to check-out.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="tel:+919317707539"
              className="px-8 py-4 text-xl font-semibold text-white bg-dkkbrown rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Call: +91-9317707539
            </a>
            <a 
              href="mailto:info@4wildflowerhospitality.com"
              className="px-8 py-4 text-xl font-semibold text-dkkbrown border-2 border-dkkbrown rounded-lg hover:bg-dkkbrown hover:text-white transition duration-300"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Plan Your Adventure Section */}
        <div className="w-full max-w-screen-xl px-4 space-y-6 motion-safe:animate-slideIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dkkbrown text-center mb-4">
            Plan Your Kasol Adventure with Woodward II
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl font-NBI text-dkkbrown text-center mb-6">
            Beyond comfortable accommodation, Woodward 2 helps you maximize your time in the Parvati 
            Valley. Our knowledgeable team can assist with organizing treks to Kheerganga, arranging 
            local transport to Tosh and Malana villages, booking trek guides, recommending the best 
            cafes and restaurants, and providing insider tips for exploring Kasol's hidden gems and 
            nearby attractions. Whether you're seeking cultural immersion, adventure activities, or 
            peaceful mountain relaxation, Kasol's diverse experiences offer something special for 
            every traveler.
          </p>
          <div className="text-center">
            <a 
              href="/Book"
              className="inline-block px-10 py-4 text-xl font-semibold text-white bg-dkkbrown rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Book Your Stay Now
            </a>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default BookingPolicies;
