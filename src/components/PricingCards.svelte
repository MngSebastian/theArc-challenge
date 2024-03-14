<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import ArrowBlue from '../assets/arrow-blue.png';
	import CardIcon from '../assets/credit-card.png';
	import AirplaneIcon from '../assets/paper-airplane.png';
	import ChartIcon from '../assets/presentation-chart-bar.png';
	import ChatIcon from '../assets/chat.png';
</script>

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
	<div class="border-4 shadow-lg rounded-xl h-560px md:h-570px w-350px md:w-450px p-4 my-3 md:my-0">
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
						<img src={CardIcon} alt="Credit card icon" class="mr-2" />All tools you need to manage
						payments
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

<style>
</style>
