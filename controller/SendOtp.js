const  mailSender = require("../utils/mailSender");

exports.sendMail = async (req, res) => {
  const { email, name, phone, message } = req.body;

  console.log("email ",email , name , phone , message);

  if (!email || !name || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const title = "Contact Us Form Submission";
  const body = `
    <h3>Contact Us Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  const body2 = `
    <h3>Thank you ${name}</h3>
   
  `;

  try {
    await mailSender("webmaster.kalpshiksha@gmail.com", title, body);
    await mailSender(email, title, body2);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
};
