const { google } = require('googleapis');

export default async function handler(req, res) {
  try {
    // Set up authentication
    const auth = new google.auth.JWT({
      email: process.env.GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GATSBY_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize the Sheets API
    const sheets = google.sheets({ version: 'v4', auth });
    // Specify the spreadsheet and range
    const spreadsheetId = process.env.GATSBY_GOOGLE_SHEET_ID;
    const range = 'Sheet1!A1'; // Adjust the range as needed

    // Append the data to the sheet
    console.log('request body: ', req.body);
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [Object.values(req.body)],
      },
    });
    return res.json({
      message: 'Successfully submitted form',
      submited: { ...req.body },
    });
  } catch (error) {
    console.error('Error submitting data to Google Sheets:', error);
    return res.status(500).json({ error: 'Failed to submit data' });
  }
}
