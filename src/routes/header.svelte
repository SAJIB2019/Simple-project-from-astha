<script>
	import Navbar from "./navbar.svelte";
</script>

<div class="banner">
    <Navbar />
    <div class="banner__content">
        <div class="container">
            <div class="banner__text">
                <h3>Pizza Delivery</h3>
                <h1>MAESTRO PIZINNI</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id perferendis esse accusantium, officiis quae blanditiis quaerat iure error exercitationem rem?</p>
            </div>
            <div class="banner__button">
                <a href="" class="btn btn__smart">Delivery Now</a>
            </div>
        </div>
    </div>
</div>
<style>
    .banner{
        width: 100%;
        height: 100vh;
        background: url(/bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }
    .banner__content{
        display: flex;
        height: 100vh;
        align-items: center;
        color: white;
    }
   
    .banner__text{
        width: 500px;
    }
    .banner__text h3{
        font-size: 50px;
    }
    .banner__text h1 {
        font-size: 80px;
        line-height: 80px;
        font-weight: 900;
        margin-top: 20px;
    }
    .banner__text p {
        font-size: 25px;
        font-weight: 400;
        margin-top: 20px;
        text-align: justify;
    }
    .banner__button{
        margin-top: 35px;
    }
 
</style>
