const interval = 'monthly'; // Or 'yearly'

fetch(`https://cors-anywhere.herokuapp.com/https://n8n.thearc.dev/webhook/pricing`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({ interval })
})
	.then((response) => {
		if (!response.ok) {
			throw new Error('Failed to fetch pricing');
		}
		return response.json();
	})
	.then((data) => {
		// Process the pricing data
		console.log(data);
	})
	.catch((error) => {
		console.error('Error fetching pricing:', error);
	});
