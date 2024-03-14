<script>
	import MailIcon from '../assets/mail.png';
</script>

<div class="flex justify-center h-2xl h-md md:h-lg w-full items-center">
	<!-- Container -->
	<div class="flex flex-col items-center justify-center w-full md:w-80% h-lg gap-6">
		<div
			class="flex flex-col text-center items-center justify-end h-auto w-auto md:h-140px md:w-65%
			gap-6"
		>
			<h2 class="font-normal w-full md:w-60% text-3xl">Sign up for our newsletter</h2>
			<p class="text-gray-500 text-xl">
				Stay up to date with the roadmap progress, announcements and exclusive<br /> discounts feel free
				to sign up with your email.
			</p>
		</div>
		<div class="flex flex-col items-center h-140px w-65%">
			<div class="flex flex-row">
				<form action="">
					<div class="flex items-center relative">
						<img src={MailIcon} alt="Mail icon" class="absolute ml-3 pointer-events-none" />
						<input
							class="border border-gray-300 rounded-l-xl bg-gray-100 pl-10 h-50px md:h-60px w-200px md:w-300px"
							placeholder="Enter your email"
							type="email"
							name="email"
							aria-label="Email Address"
							required
						/>
					</div>
				</form>
				<button
					class=" px-4 md:px-6 md:py-4 bg-blue-600 text-center text-white text-lg h-50px md:h-60px rounded-r-lg mb-4"
					>Subscribe</button
				>
			</div>
			<p class="text-gray-500 text-xs md:text-sm text-center w-350px md:w-full">
				We care about the protection of your data. Read our <span
					class="font-normal text-black underline">Private Policy</span
				>.
			</p>
		</div>
	</div>
</div>

<style>
	/* You can add component styles here */
</style>
