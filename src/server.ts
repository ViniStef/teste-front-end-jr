
import express from 'express';
import axios from 'axios';
const cors = require('cors');

const app = express();
const port = 4000;

// Enable CORS so that your React app can communicate with this server
app.use(cors());

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
    res.json(response.data);
    console.log(res.json(response.data))
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});