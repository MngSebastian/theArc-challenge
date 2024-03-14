<script>
	import MarketingIcon from '../assets/marketing-icon.png';
	import LegalIcon from '../assets/legal-icon.png';
	import BusinessIcon from '../assets/business-icon.png';
</script>

<div class="flex h-auto w-full items-center justify-center items-center py-14">
	<!-- Container -->
	<div class="flex flex-col w-full mx-4 md:w-75% py-6 gap-10">
		<div class="flex flex-col">
			<h2 class="font-normal text-3xl mb-6">Designed for businesss teams like yours</h2>
			<p class="text-gray-500 text-xl">
				Here at flowbite we focus on markets where technology, innovation, and capital can<br /> unlock
				long-term value and drive economic growth.
			</p>
		</div>
		<!-- Features -->
		<div class="flex flex-col md:flex-row gap-10 md:gap-6">
			<div class="">
				<img src={MarketingIcon} alt="Icon representing marketing." />
				<h3 class="py-2 md:py-3 text-lg md:text-xl">Marketing</h3>
				<p class="text-gray-500 text-lg md:text-xl">
					Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit
					your marketing goals every month with our marketing plan.
				</p>
			</div>
			<div class="">
				<img src={LegalIcon} alt="Icon representing legal." />
				<h3 class="py-2 md:py-3 text-lg md:text-xl">Legal</h3>

				<p class="text-gray-500 text-lg md:text-xl">
					Protect your organization, devices and stay compliant with our structured workflows and
					custom permissions made for you.
				</p>
			</div>
			<div class="">
				<img src={BusinessIcon} alt="Icon of a suitcase representing business." />
				<h3 class="py-2 md:py-3 text-lg md:text-xl">Business Automation</h3>
				<p class="text-gray-500 text-lg md:text-xl">
					Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new
					templates to help you get started.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	/* You can add component styles here */
</style>
