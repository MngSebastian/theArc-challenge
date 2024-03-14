<script>
	import ImageOne from '../assets/image-1.png';
	import ImageTwo from '../assets/image-2.png';
	import ImageThree from '../assets/image-3.png';
	import ImageFour from '../assets/image-4.png';
	import ImageFive from '../assets/image-5.png';
	import ImageSix from '../assets/image-6.png';
	import ImageOneMobile from '../assets/image-1-mobile.png';
	import ImageTwoMobile from '../assets/image-2-mobile.png';
	import ImageThreeMobile from '../assets/image-3-mobile.png';
	import ImageFourMobile from '../assets/image-4-mobile.png';
	import ImageFiveMobile from '../assets/image-5-mobile.png';
	import ImageSixMobile from '../assets/image-6-mobile.png';
</script>

<div class="flex h-auto w-full items-center justify-center items-center py-14">
	<!-- Container -->
	<div class="flex flex-col items-center mx-4 justify-center text-center w-full md:w-80% py-8">
		<div class="flex flex-col">
			<h3 class="font-normal text-3xl mb-6">We didn't reinvent the wheel</h3>
			<p class="text-gray-500 text-xl mb-8">
				We are strategists, designers and developers. Innovators and problem solvers. Small enough
				to be simple and<br /> quick, but big enough to deliver the scope you want at the pace you need.
			</p>
		</div>
		<!--Desktop Images-->
		<div class="hidden md:grid grid-cols-4 md:w-60% md:h-100% mx-auto gap-4">
			<img
				src={ImageOne}
				alt="People in the office"
				class="bg-gray-200 h-full col-span-2 rounded-xl"
			/>
			<div class="col-span-1 w-300px">
				<img
					src={ImageTwo}
					alt="People in the office"
					class="bg-gray-200 h-full col-span-1 rounded-xl w-500px"
					style="margin-right: -10px;"
				/>
			</div>

			<img
				src={ImageThree}
				alt="People in the office"
				class="bg-gray-200 h-full col-span-1 rounded-xl w-250px ml-5"
			/>

			<img
				src={ImageFour}
				alt="People in the office"
				class="bg-gray-200 h-full col-span-1 rounded-xl"
			/>

			<img
				src={ImageFive}
				alt="People in the office"
				class="bg-gray-200 h-full col-span-2 rounded-xl"
			/>

			<img
				src={ImageSix}
				alt="People in the office"
				class="bg-gray-200 h-full col-span-1 rounded-xl"
			/>
		</div>
		<!-- Mobile Images-->
		<div class="md:hidden grid grid-cols-4 w-full h-full mx-auto gap-1">
			<img
				src={ImageOneMobile}
				alt="People in the office"
				class="bg-gray-200 col-span-2 h-full rounded-xl md:hidden"
			/>
			<img
				src={ImageTwoMobile}
				alt="People in the office"
				class="bg-gray-200 col-span-1 h-full rounded-xl md:hidden"
			/>

			<img
				src={ImageThreeMobile}
				alt="People in the office"
				class="bg-gray-200 col-span-1 h-full rounded-xl md:hidden"
			/>

			<img
				src={ImageFourMobile}
				alt="People in the office"
				class="bg-gray-200 col-span-1 h-full rounded-xl md:hidden"
			/>

			<img
				src={ImageFiveMobile}
				alt="People in the office"
				class="bg-gray-200 col-span-2 h-full rounded-xl md:hidden"
			/>

			<img
				src={ImageSixMobile}
				alt="People in the office"
				class="bg-gray-200 col-span-1 h-full rounded-xl md:hidden"
			/>
		</div>
	</div>
</div>

<style>
	/* You can add component styles here */
</style>
