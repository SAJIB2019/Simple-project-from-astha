<script>

</script>

<div class="navbar">
    <div class="navbar__text">
        <div class="logo">
            <img src="/logo.png" alt="logo">
        </div>
        <ul class="navbar__ul">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/menu">Menu</a>
            </li>
            <li>
                <a href="/shop">Shop</a>
            </li>
            <li>
                <a href="/news">News</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </div>
</div>

<style>
    .navbar{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100vw;
        position: fixed;
    }

    .navbar__text{
        display: flex;
        height: 60px;
        align-items: center;
        width: 1200px;
        margin: 0 auto;
    }
    .logo{
        width: 40%;
    }
    .logo img{
        width: 220px;
    }
    .navbar__ul{
        width: 60%;
        list-style-type: none;
        display: flex;
        justify-content: flex-end;
    }
    .navbar__ul li a {
        text-decoration: none;
        color: white;
        padding: 0 18px;
        font-weight: 800;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 600px) {

    
    }
</style>