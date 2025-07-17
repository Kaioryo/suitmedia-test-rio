import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
      params: req.query,
      headers: {
        Accept: 'application/json',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('API Proxy Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Suitmedia API' });
  }
}
