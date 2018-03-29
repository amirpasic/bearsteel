<html>
    <?php include 'includes/head_include.php' ?>

    <body>
        <header class="ct-header">
            <?php include 'includes/nav_include.php' ?>
            <video autoplay muted loop id="myVideo">
                <source src="images/banner-video.mp4" type="video/mp4">
            </video>
            <div class="title">
                <h1>Let's make something awesome together</h1>
                <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
            </div>
        </header>
        
        <section class="ct-info">
            <h1>Some header explaining</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse consequuntur temporibus repudiandae vel veniam commodi iste, reprehenderit nulla quod! Ad molestiae eaque nihil velit in dicta nesciunt, dolore dignissimos?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quaerat amet excepturi ipsam obcaecati eius. Velit aliquid sunt culpa possimus? Amet reprehenderit quis ex reiciendis impedit alias magni aut illum.</p>
        </section>
        
        <section class="ct-form">
            <form>
                <input type="text" type="text" placeholder="Name">
                <input type="text" type="text" placeholder="Number"><br>
                <input type="text" type="email" placeholder="E-mail"><br>
                <textarea placeholder="Message"></textarea>
                <button id="submitBtn" type="submit">Submit</button>
            </form>
        </section>

        <?php include 'includes/footer_include.php' ?>
    </body>
</html>