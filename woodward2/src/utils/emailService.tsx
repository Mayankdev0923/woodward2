import emailjs from 'emailjs-com';

const sendEmail = async (templateParams: Record<string, any>) => {
  try {
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    const response = await emailjs.send(serviceID, templateID, templateParams, userID);
    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

export default sendEmail;
