import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
      params: req.query,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Suitmedia-Test-App/1.0'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('API Proxy Error:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
    res.status(500).json({ error: 'Failed to fetch data from Suitmedia API' });
  }
}
