<script>
	import Navbar from "./navbar.svelte";
</script>

<div class="w-screen h-screen bg-[url('/bg.jpg')] bg-repeat bg-cover relative">
    <Navbar />
    <div class="sm:pl-8 flex h-screen items-center text-white">
        <div class="container">
            <div class="w-[350px]">
                <h3 class="text-[40px]">Pizza Delivery</h3>
                <h1 class="text-[60px] text-bold">MAESTRO PIZINNI</h1>
                <p class="text-[20px] text-justify text-bold mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id perferendis esse accusantium, officiis quae blanditiis quaerat iure error exercitationem rem?</p>
            </div>
            <div class="">
                <a href="/" class="btn  hover:bg-red-700 transition duration-300">Delivery Now</a>
            </div>
        </div>
    </div>
</div>

