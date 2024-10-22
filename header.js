document.write(
    `
<header id="header">
    <a class="header-logo" href="index.html">
    <a class="header-link" href="team.html">TEAM</a>
    <a class="header-link" href="missions.html">MISSIONS</a>
    <a class="header-link" href="https://newsletter.huskysat.org">NEWSLETTER</a>
    <a class="header-link" href="sponsors.html">SPONSORS</a>
    <a class="header-link" href="events.html">EVENTS</a>
    <a id="header-join-us" class="button-link" href="join.html">JOIN US</a>
    <button class="header-hamburger-button" onclick="document.getElementById('header').classList.toggle('open')">\u2630</button>
</header>
`
);

var header = document.getElementById('header');

document.addEventListener('scroll', function (e) {
    if (window.scrollY > 0) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});
