
import nodemailer from 'nodemailer'
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})


const mailoption = {
    from: "anantsahu21456@gmail.com",
    to: "meghaug1998@gmail.com",
    subject: "hello student this mail is for testing purpose",
    text: " please share your resume here ok,🥳 from .env",
    html: `
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Email Template</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

  <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:6px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:#2f80ed; color:#ffffff; padding:20px; text-align:center;">
              <h1 style="margin:0; font-size:24px;">Your Company Name</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px; color:#333333;">
              <h2 style="margin-top:0;">Hello mahboob,</h2>
              <p style="line-height:1.6;">
                We hope this message finds you well. This is a sample HTML email
                template that you can use for announcements, notifications, or
                general communication.
              </p>
              <p> your otp is ${generateotp}</p>

              <p style="line-height:1.6;">
                You can customize this content, change colors, or add more sections
                as needed.
              </p>

              <!-- Button -->
              <table cellpadding="0" cellspacing="0" style="margin:20px 0;">
                <tr>
                  <td style="background:#2f80ed; padding:12px 20px; border-radius:4px;">
                    <a href="{{ButtonLink}}" style="color:#ffffff; text-decoration:none; font-weight:bold;">
                      Call to Action
                    </a>
                  </td>
                </tr>
              </table>

              <p style="line-height:1.6;">
                If you have any questions, feel free to reply to this email.
              </p>

              <p>
                Best regards,<br>
                <strong>Your Name</strong><br>
                Your Position
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f0f0f0; padding:15px; text-align:center; font-size:12px; color:#777777;">
              © 2026 Your Company. All rights reserved.<br>
              <a href="{{UnsubscribeLink}}" style="color:#777777;">Unsubscribe</a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>

    
    `
}

transporter.sendMail(mailoption, (err) => {
    if (err) {
        console.log("getting error while try to send mail", err)
    } else {
        console.log("congrulation mail sent sucessfully ✅✅✅🥳🥳🥳🥳😎😎😎")
    }

})

