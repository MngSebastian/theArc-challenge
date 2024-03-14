<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import ArrowBlue from '../assets/arrow-blue.png';
	import CardIcon from '../assets/credit-card.png';
	import AirplaneIcon from '../assets/paper-airplane.png';
	import ChartIcon from '../assets/presentation-chart-bar.png';
	import ChatIcon from '../assets/chat.png';

	let isMonthly: boolean = true;
	interface PricingData {
		starter: {
			amount: number;
			unit: string;
		};
		pro: {
			amount: number;
			unit: string;
		};
		platinum: {
			amount: number;
			unit: string;
		};
	}

	let pricingData: PricingData;

	onMount(async () => {
		let url: string = `http://localhost:3001/pricing`;
		console.log(url);
		try {
			const response = await fetch(`${url}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ interval: 'yearly' })
			});

			if (response.ok) {
				pricingData = await response.json();
				console.log('response', pricingData);
			} else {
				console.error('Failed to fetch pricing data:', response.statusText);
			}
		} catch (error) {
			console.error('Error fetching pricing data:', error);
		}
	});
</script>

<div class="flex h-auto w-full justify-center">
	<!-- Container -->
	<div class="flex flex-col items-center px-4 w-full md:w-80% pt-10">
		<!-- Heading & Desc -->
		<div class="flex flex-col items-center w-full">
			<h3 class="font-normal text-center text-3xl mb-6">Designed for business teams like yours</h3>
			<p class="text-gray-500 text-xl text-center mb-4">
				Here at flowbite we focus on markets where technology, innovation, and capital can<br /> unlock
				long-term value and drive economic growth.
			</p>
			<!-- Toggle Switch for Pricing Options -->
			<div class="flex items-center">
				<span class="text-gray-500 mr-2">Monthly</span>
				<label class="switch">
					<input type="checkbox" bind:checked={isMonthly} class="toggle-switch" />
					<span class="slider round" />
				</label>
				<span class="text-gray-500 ml-2">Yearly</span>
			</div>
		</div>
		<!-- Pricing Cards -->
		<div class="flex flex-col md:flex-row items-end justify-around w-full mt-10">
			<!-- Starter -->
			<div class="border-4 shadow-lg items-center justify-center rounded-xl w-350px md:w-450px p-4">
				<div class="flex flex-col items-center h-485px md:w-400px">
					<div class="flex flex-col items-center w-full">
						<h1 class="text-xl">Starter</h1>
						<p class="font-normal text-4xl my-2">
							{pricingData ? '$' + pricingData.starter.amount : ''}
						</p>
						<button class="text-blue-600 flex items-center inline-flex"
							>go to annual plan
							<img src={ArrowBlue} alt="Right Arrow" class="ml-2" />
						</button>
					</div>
					<div class="flex items-center justify-center w-full my-12">
						<button class="rounded-md md:w-full w-200px bg-gray-900 text-gray-100 h-40px"
							>Get started</button
						>
					</div>
					<div class="flex flex-col w-full gap-4 text-left">
						<p class="flex text-lg">
							<img src={CardIcon} alt="Credit card icon" class="mr-2" />All tools you need to manage
							payments
						</p>
						<p class="flex line-through text-gray-500 text-lg">
							<img src={AirplaneIcon} alt="Paper airplane icon" class="mr-2" />
							Get hundreds of feature updates
						</p>
						<p class="flex line-through text-gray-500 text-lg">
							<img src={ChartIcon} alt="Chart icon" class="mr-2" />
							Financial reconciliation and reporting
						</p>
						<p class="flex line-through text-gray-500 text-lg">
							<img src={ChatIcon} alt="Chat icon" class="mr-2" />
							24x7 phone, chat, and email support
						</p>
					</div>
				</div>
			</div>
			<!-- Pro -->
			<div
				class="border-4 shadow-lg rounded-xl h-560px md:h-570px w-350px md:w-450px p-4 my-3 md:my-0"
			>
				<div class="flex justify-center h-480px md:h-500px md:w-400px">
					<div class="flex flex-col items-center h-450px w-400px">
						<div class="flex flex-col items-center w-full">
							<button class="bg-gray-200 rounded-lg text-lg text-blue-900 px-5 mb-6"
								>Most popular</button
							>
							<h1 class="text-xl">Pro</h1>
							<p class="font-normal text-4xl my-2">
								{pricingData ? '$' + pricingData.pro.amount : ''}
							</p>
							<button class="text-blue-600 flex items-center inline-flex"
								>go to annual plan
								<img src={ArrowBlue} alt="Right Arrow" class="ml-2" />
							</button>
						</div>
						<div class="flex items-center justify-center w-full my-12">
							<button class="rounded-md bg-blue-600 text-gray-100 md:w-full w-200px h-40px"
								>Get started</button
							>
						</div>
						<div class="flex flex-col w-full gap-4 text-left">
							<p class="flex text-lg">
								<img src={CardIcon} alt="Credit card icon" class="mr-2" />All tools you need to
								manage payments
							</p>
							<p class="flex text-lg">
								<img src={AirplaneIcon} alt="Paper airplane icon" class="mr-2" />
								Get hundreds of feature updates
							</p>
							<p class="flex line-through text-gray-500 text-lg">
								<img src={ChartIcon} alt="Chart icon" class="mr-2" />
								Financial reconciliation and reporting
							</p>
							<p class="flex line-through text-gray-500 text-lg">
								<img src={ChatIcon} alt="Chat icon" class="mr-2" />
								24x7 phone, chat, and email support
							</p>
						</div>
					</div>
				</div>
			</div>
			<!-- PLatinum -->
			<div class="border-4 shadow-lg items-center justify-center rounded-xl w-350px md:w-450px p-4">
				<div class="flex flex-col items-center h-470px md:w-400px">
					<div class="flex flex-col items-center w-full">
						<h1 class="text-xl">Platinum</h1>
						<p class="font-normal text-4xl my-2">
							{pricingData ? '$' + pricingData.platinum.amount : ''}
						</p>
						<button class="text-blue-600 flex items-center inline-flex"
							>go to annual plan
							<img src={ArrowBlue} alt="Right Arrow" class="ml-2" />
						</button>
					</div>
					<div class="flex items-center justify-center w-full my-12">
						<button class="rounded-md md:w-full w-200px bg-gray-900 text-gray-100 h-40px"
							>Get started</button
						>
					</div>
					<div class="flex flex-col w-full gap-4 text-left">
						<p class="flex text-lg">
							<img src={CardIcon} alt="Credit card icon" class="mr-2" />All tools you need to manage
							payments
						</p>
						<p class="flex text-lg">
							<img src={AirplaneIcon} alt="Paper airplane icon" class="mr-2" />
							Get hundreds of feature updates
						</p>
						<p class="flex text-lg">
							<img src={ChartIcon} alt="Chart icon" class="mr-2" />
							Financial reconciliation and reporting
						</p>
						<p class="flex text-lg">
							<img src={ChatIcon} alt="Chat icon" class="mr-2" />
							24x7 phone, chat, and email support
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 40px; /* Adjust the width as needed */
		height: 20px; /* Adjust the height as needed */
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 20px; /* Adjust border radius for roundness */
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 16px; /* Adjust height of the slider button */
		width: 16px; /* Adjust width of the slider button */
		left: 2px; /* Adjust left position of the slider button */
		bottom: 2px; /* Adjust bottom position of the slider button */
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%; /* Make the slider button round */
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(20px); /* Adjust the distance for checked state */
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 20px; /* Adjust border radius for roundness */
	}

	.line-through {
		text-decoration: line-through;
		/* Adjust the thickness of the line */
		text-decoration-thickness: 0.8px; /* Adjust the thickness as needed */
	}
</style>
