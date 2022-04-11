//MODEL\\
var homeContent = `
<div class="home-hero"><p class="home-hero-title">Locations of the World</p></div>
<div class="home-content">
    <div class="info-box">
        <div class="info-image1"></div>
        <div class="information">
            <p class="info-title">Explore!</p>
            <p class="info-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quas odit, dicta eveniet animi nesciunt error quidem, in eius veniam rem blanditiis dolorum voluptatem ex natus. Dolorum architecto sequi consectetur.
            </p>
        </div>
        
    </div>
    <div class="info-box">
        <div class="info-image2"></div>
        <div class="information">
            <p class="info-title">Dream!</p>
            <p class="info-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quas odit, dicta eveniet animi nesciunt error quidem, in eius veniam rem blanditiis dolorum voluptatem ex natus. Dolorum architecto sequi consectetur.
            </p>
        </div>
        
    </div>
</div>
`;
var aboutContent = `
<div class="about">
    <p class="about-title">ABOUT</p>
    <p class="about-main-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti explicabo iure harum ea facilis, ab tempora, ipsum minus nisi sapiente consectetur impedit debitis fugiat, possimus pariatur magnam perferendis error.
    Eos laborum quas atque sit tempore ducimus commodi, quasi non excepturi vel consectetur necessitatibus, quisquam voluptate laudantium quos expedita eaque maxime rem nulla ea ipsam ullam. Quod laboriosam atque reiciendis!</p>
    <div class="about-hero"></div>
    <div class="missions">
        <div class="mission-column">
            <p class="directive-title">Our Mission</p>
            <p class="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio recusandae veritatis minima! Deleniti, veniam quos. Pariatur voluptas magni hic repellendus architecto, sapiente non nulla fugiat reprehenderit facilis, assumenda tenetur.</p>
            <p class="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio recusandae veritatis minima! Deleniti, veniam quos. Pariatur voluptas magni hic repellendus architecto, sapiente non nulla fugiat reprehenderit facilis, assumenda tenetur.</p>
        </div>
        <div class="mission-column">
            <p class="directive-title">Our Values</p>
            <p class="about-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt quo, quidem odit hic reprehenderit autem officia velit repellat laudantium harum neque nisi pariatur commodi nobis consequuntur aspernatur vel, itaque modi. </p>
            <p class="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio recusandae veritatis minima! Deleniti, veniam quos. Pariatur voluptas magni hic repellendus architecto, sapiente non nulla fugiat reprehenderit facilis, assumenda tenetur.</p>
        </div>
        <div class="mission-column">
            <p class="directive-title">Our History</p>
            <p class="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio recusandae veritatis minima! Deleniti, veniam quos. Pariatur voluptas magni hic repellendus architecto, sapiente non nulla fugiat reprehenderit facilis, assumenda tenetur.</p>
            <p class="about-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolores quos quas atque iste provident harum, perspiciatis aperiam corrupti dolorum placeat ab voluptates aliquam magnam rerum vitae, sed sequi explicabo.</p>
        </div>
    </div>
</div>
`;
var locationsContent = `
<div class="locations">
    <p class="loc-title">Locations</p>
    <div class="locations">
        <div class="location">
            <div class="loc-image1"></div>
            <div class="loc-info">
                <p class="loc-info-title">Canada</p>
                <p class="loc-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero sint nobis ipsa minus debitis, in, exercitationem facere dolorem corporis similique est hic impedit nisi aliquam totam, commodi dignissimos saepe!</p>
            </div>
        </div>
        <div class="location">
            <div class="loc-image2"></div>
            <div class="loc-info">
                <p class="loc-info-title">Japan</p>
                <p class="loc-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero sint nobis ipsa minus debitis, in, exercitationem facere dolorem corporis similique est hic impedit nisi aliquam totam, commodi dignissimos saepe!</p>
            </div>
        </div>
        <div class="location">
            <div class="loc-image3"></div>
            <div class="loc-info">
                <p class="loc-info-title">New Zealand</p>
                <p class="loc-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore libero sint nobis ipsa minus debitis, in, exercitationem facere dolorem corporis similique est hic impedit nisi aliquam totam, commodi dignissimos saepe!</p>
            </div>
        </div>
    </div>
    <a class="load-btn" href="#">LOAD 3 MORE</a>
</div>
`;
var contactContent = `
<div class="contact">
    <div class="top-divs">
        <div class="contact-title-info">
            <p class="contact-title">Contact Us</p>
            <p class="contact-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore incidunt, temporibus eos doloremque rerum laboriosam et suscipit laborum inventore magni, praesentium ratione totam, quidem doloribus ipsam. Corporis quaerat iste aliquam.</p>
            <p class="input-title">Contact Us By Email</p>
            <div class="contact-input"><input type="text"  placeholder="Email Address..."></div>
        </div>
        <div class="contact-hero"></div>
    </div>
</div>
`;
//inserts page content into app div
//recieves contentName from app.js
export function modelPageName(pgName) {
    console.log(pgName);
    $("#app").html(eval(pgName)); //execute the new variable, insert into html
}