<script>
import "../app.css";
let isOpen = false;
</script>

<div class=" bg-[#c33600] fixed sm:fixed w-screen">
    <div class="container">
        <div class="flex items-center justify-between sm:justify-between">
                <div class="flex bg-black sm:bg-transparent justify-center items-center">
                    <img class="w-[150px] h-[50px]" src="/logo.png" alt="logo">
                </div>

                <div class="">      
                    <ul class="{isOpen ? "block" : "hidden"} sm:top-0 top-[82px] sm:z-auto sm:pl-0 pl-7 sm:py-0 py-6 w-full left-0 sm:bg-transparent bg-[#c33600] sm:static absolute sm:items-center sm:flex">
                        <li class="sm:mx-10">
                            <a class="sm:mx-4 font-bold sm:text-2xl text-3xl" href="/">Home</a>
                        </li>
                        <li class="sm:mx-10">
                            <a class="sm:mx-4 font-bold sm:text-2xl text-3xl" href="/">Menu</a>
                        </li>
                        <li class="sm:mx-10">
                            <a class="sm:mx-4 font-bold sm:text-2xl text-3xl" href="/">Shop</a>
                        </li>
                        <li class="sm:mx-10">
                            <a class="sm:mx-4 font-bold sm:text-2xl text-3xl" href="/">News</a>
                        </li>
                        <li class="sm:mx-10">
                            <a class="sm:mx-4 font-bold sm:text-2xl text-3xl" href="/">Contact</a>
                        </li>
                    </ul>
                </div>

                <div class="pt-5 sm:hidden  flex items-center justify-center">
                    <button on:click = {()=>isOpen = !isOpen}  class="border-white rounded-[5px] mb-8 bg-black border-2 m-[1px] h-10 w-10 flex flex-col justify-center items-center ">
                        <div class="bg-white m-1 h-[2px] w-5"></div>
                        <div class="bg-white m-1 h-[2px] w-5"></div>
                    </button>
                </div> 
        </div>                                                               
    </div>
</div>

