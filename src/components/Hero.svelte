<script>
	import HeroImg from '../assets/hero-big.png';
	import HeroMobile from '../assets/hero-mobile.png';

	import ArrowWhite from '../assets/arrow-white.png';
	import Camera from '../assets/video-camera.png';
</script>

<div class="flex h-2xl w-full mx-4 items-center">
	<!-- Container -->
	<div class="flex flex-col items-center justify-between w-full h-100% md:flex-row">
		<!-- Hero content -->
		<div class="flex flex-col text-center items-center justify-center md:pl-20 h-65% md:w-60%">
			<h1 class="font-medium text-5xl w-full md:w-70%">We invest in the world's potential</h1>
			<p class="text-gray-500 text-xl my-6">
				Here at flowbite we focus on markets where technology, innovation, and capital<br />unlock
				long-term value and economic growth.
			</p>
			<!-- Call To Action Buttons -->
			<div class="flex items-center justify-center gap-6">
				<button class="flex items-center p-4 bg-blue-600 text-white inline-flex rounded-md"
					>Learn more
					<img src={ArrowWhite} alt="Right Arrow" class="ml-2" />
				</button>
				<button class="lex items-center p-4 border-2 box-border inline-flex rounded-md">
					<img src={Camera} alt="Video Camera" class="mr-2" />
					Watch video
				</button>
			</div>
		</div>
		<!-- Builders png -->
		<div class="flex items-center w-80% h-70% md:w-40% md:h-100% md:h-100%">
			<img
				src={HeroMobile}
				alt="png of builders creating a website for mobile"
				class="w-100% h-100% md:hidden"
			/>
			<img
				src={HeroImg}
				alt="png of builders creating a website"
				class="w-0 h-0 md:w-100% md:h-100%"
			/>
		</div>
	</div>
</div>

<style>
	/* You can add component styles here */
</style>
