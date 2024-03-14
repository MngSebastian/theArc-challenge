// proxy.ts

import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001; // Choose any port you prefer

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
// Proxy routenpm
app.post('/pricing', async (req, res) => {
	try {
		const url = 'https://n8n.thearc.dev/webhook/pricing'; // External API URL
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(req.body) // Forward the request body from the frontend
		});

		// Forward the response from the external API to the frontend
		res.status(response.status).json(await response.json());
	} catch (error) {
		console.error('Proxy error:', error);
		res.status(500).json({ error: 'Proxy error' });
	}
});

// Start the server
app.listen(PORT, () => {
	console.log(`Proxy server is running on port ${PORT}`);
});
