document.write(
`
<div id="header" class="header">
    <a class="header-logo" href="index.html">
    <a class="header-link" href="team.html">TEAM</a>
    <a class="header-link" href="missions.html">MISSIONS</a>
    <a class="header-link" href="newsletter.html">NEWSLETTER</a>
    <a class="header-link" href="sponsors.html">SPONSORS</a>
    <a class="header-cta-link" href="join.html">JOIN US</a>
</div>
`
);

var header = document.getElementById('header');
      
document.addEventListener('scroll', function(e) {
if (window.scrollY > 0) {
    header.classList.add("header-scrolled");
} else {
    header.classList.remove("header-scrolled");
}
});
