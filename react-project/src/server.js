const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.get('/github/callback', async (req, res) => {
  const { code } = req.query;

  try {
    // Exchange the GitHub code for an access token
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: '9ba714f99c64f4fbe8a4',
      client_secret: 'ee6298c1bc202b219f84e10ecaabf63c076d3b9b',
      code,
    });

    const { access_token } = response.data;

    // Use the access token to get user data
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userData = userResponse.data;
    res.json(userData);
  } catch (error) {
    console.error('GitHub authentication error:', error.message);
    res.status(500).json({ error: 'GitHub authentication failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
