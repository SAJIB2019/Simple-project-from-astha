<script>

</script>

<div class="footer">
    <div class="container">
        <div class="footer__text">
            <div class="usefull__links">
                <h2>USEFULL LINKS</h2>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">News</a></li>
                    
                </ul>
            </div>
            <div class="news__letter">
                <h2>NEWSLETTER</h2>
                <input type="text">
                <a href="" class="btn btn__smart">Subscribe Now</a>
            </div>
            <div class="contact">
                <h2>CONTACT</h2>
                <p>123, xyz Road, Dhaka</p>
                <p>Bangladesh</p>
            </div>
        </div>
    </div>
</div>

<style>
    .footer{
        padding: 80px 0px;
        background-color: rgb(177, 163, 143);
    }
    .footer__text{
        display: flex;
        justify-content: space-around;
       
    }
    .news__letter{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .usefull__links h2{
        color: white;
        margin-bottom: 8px;
    }
    .usefull__links ul{
        list-style-type: none;
    }
    .usefull__links ul li a{
        text-decoration: none;
        margin-top: 5px;
        color: #282828;
      
    }
    .news__letter h2{
        color: white;
        margin-bottom: 8px;
    }
    .contact h2{
        color: white;
        margin-bottom: 8px;
        color: #282828;
    }
    .news__letter input{
        margin-bottom: 18px;
        padding: 5px 30px;
    }
</style>
