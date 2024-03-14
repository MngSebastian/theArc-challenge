<script>
	import Google from '../assets/Google.png';
	import Microsoft from '../assets/Microsoft.png';
	import Spotify from '../assets/Spotify.png';
	import MailChimp from '../assets/MailChimp.png';
</script>

<div class="flex h-auto w-full justify-center items-center">
	<!-- Container -->
	<div class="flex flex-col items-center mx-4 py-12 w-5xl gap-14">
		<h2 class="font-normal text-3xl">You'll be in good company</h2>
		<!-- Company Logos -->
		<div class="grid grid-cols-4 grid-rows-2 md:flex md:flex-row gap-16">
			<img src={Google} alt="Google Logo" class="col-span-2 md:col-span-2" />
			<img src={Microsoft} alt="Microsoft Logo" class="col-span-2 md:col-span-2" />

			<img src={Spotify} alt="Spotify Logo" class="col-span-2 md:col-span-2" />
			<img src={MailChimp} alt="MailChimp Logo" class="col-span-2 md:col-span-2" />
		</div>
	</div>
</div>

<style>
	/* You can add component styles here */
</style>
