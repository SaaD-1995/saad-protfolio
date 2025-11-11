// src/utils/emailTemplate.js
export const generateEmailTemplate = (formData) => {
  const { name, email, message } = formData;
  const currentYear = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 20px;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        h2 {
          color: #4f46e5;
          text-align: center;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          text-align: left;
          padding: 12px 15px;
          border-bottom: 1px solid #e5e7eb;
        }
        th {
          background-color: #4f46e5;
          color: white;
        }
        .message {
          background-color: #f9fafb;
          border-radius: 6px;
          padding: 15px;
          margin-top: 10px;
        }
        .footer {
          text-align: center;
          font-size: 12px;
          color: #888;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>📬 New Contact Message</h2>
        <table>
          <tr>
            <th>Name</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>${email}</td>
          </tr>
          <tr>
            <th>Message</th>
            <td><div class="message">${message}</div></td>
          </tr>
        </table>
        <div class="footer">
          This message was sent from your React portfolio contact form.<br/>
          &copy; ${currentYear} Saad Rasool | All Rights Reserved
        </div>
      </div>
    </body>
  </html>
  `;
};
