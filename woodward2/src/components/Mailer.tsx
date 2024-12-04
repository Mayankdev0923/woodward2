import { useState } from 'react'
import sendEmail from '../utils/emailService';

function Mailer() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const handleSendEmail = async () => {
      setLoading(true);
  
      const templateParams = {
        to_name: 'John Doe', // Replace with dynamic data if needed
        to_email: 'mayanksharma0923@gmail.com',
        message: 'Hello, this is a test email!',
        from_name: 'woodward2'
      };
  
      const isEmailSent = await sendEmail(templateParams);
      setLoading(false);
      setSuccess(isEmailSent);
    };
  
    return (
        <div>
        <button
          onClick={handleSendEmail}
          className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Email'}
        </button>
        {success && <p className="mt-4 text-green-500">Email sent successfully!</p>}
        </div>
    );
}

export default Mailer