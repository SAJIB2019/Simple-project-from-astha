<script>
	import Navbar from "./navbar.svelte";
</script>

<div class="bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center h-screen">
    <Navbar />
    <div class=" text-white">
        <div class="container">
            <div class="w-[250px] sm:w-[350px] flex flex-col pt-52">
                <h3 class="text-[15px] sm:text-[35px] ">Pizza Delivery</h3>
                <h1 class="text-[20px] sm:text-[60px] text-bold font-lora">MAESTRO PIZINNI</h1>
                <p class="text-[12px] sm:text-[20px] text-justify text-bold font-dm mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id perferendis esse accusantium, officiis quae blanditiis quaerat iure error exercitationem rem?</p>
            </div>
            <div class="">
                <a href="/" class="btn  hover:bg-red-700 transition duration-300">Delivery Now</a>
            </div>
        </div>
    </div>
</div>

