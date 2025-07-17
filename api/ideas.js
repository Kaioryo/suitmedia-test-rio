import axios from 'axios';

export default async function handler(req, res) {
  try {
    console.log('Query Params:', req.query);

    const response = await axios.get('https://suitmedia-backend.suitdev.com/api/ideas', {
      params: req.query,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Suitmedia-Test-App/1.0'
      }
    });

    console.log('Suitmedia API response success');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('API Proxy Error:', error.message);

    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }

    if (error.request) {
      console.error('Request made but no response:', error.request);
    }

    if (error.config) {
      console.error('Axios config:', error.config);
    }

    res.status(500).json({ error: 'Failed to fetch data from Suitmedia API' });
  }
}
