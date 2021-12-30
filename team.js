var leadership = [
    {
        name: "Mark Polyakov",
        roles: "President",
        image: "mark-polyakov.png"
    },
    {
        name: "Stephanie Geeson",
        roles: "Vice-President",
        image: "stephanie-geeson.png"
    },
    {
        name: "Mai-Linh Tran",
        roles: "HuskySat-2 Project Manager<br>Recruiting<br>Treasurer",
        image: "mai-linh-tran.png"
    },
    {
        name: "Jeff Sternberg",
        roles: "Secretary",
        image: "member-nopic.png"
    },
    {
        name: "Allen Aby",
        roles: "Software Lead",
        image: "allen-aby.png"
    },
    {
        name: "Andrew Buckingham",
        roles: "Electronics Lead",
        image: "andrew-buckingham.png"
    },
    {
        name: "Alnis Smidchens",
        roles: "Webmaster<br>Mechanical lead",
        image: "alnis-smidchens.png"
    },
    {
        name: "Karman Singh",
        roles: "Marketing/PR Lead",
        image: "karman-singh.png"
    },
];

var members = [
    {
        name: "Sathvik Chinta",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Haili Kuester",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Rudy Garcia",
        roles: "",
        image: "rudy-garcia.png"
    },
    {
        name: "Jevin Gu",
        roles: "",
        image: "jevin-gu.png"
    },
    {
        name: "Rahul Gupta",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Jordan Hatch",
        roles: "",
        image: "jordan-hatch.png"
    },
    {
        name: "Daniel Lord",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Armand Mousavi",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "James Ott",
        roles: "",
        image: "james-ott.png"
    },
    {
        name: "Kavel Rao",
        roles: "",
        image: "kavel-rao.png"
    },
    {
        name: "Jared Rapp",
        roles: "",
        image: "jared-rapp.png"
    },
    {
        name: "Eli Reed",
        roles: "Former President",
        image: "member-nopic.png"
    },
    {
        name: "Seth Reed",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Andrew Smith",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Sebastian Soetomo",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Maia Willebrand",
        roles: "",
        image: "maia-willebrand.png"
    },
];

var alumni = [
    {
        name: "Austin Burnham",
        roles: "Webmaster",
        image: "austin-burnham.jpg"
    },
    {
        name: "John Correy",
        roles: "",
        image: "john-correy.png"
    },
    {
        name: "Jade Cutter",
        roles: "Secretary<br>MiniMEE",
        image: "jade-cutter.png"
    },
    {
        name: "Sebastian Davis",
        roles: "",
        image: "sebastian-davis.png"
    },
    {
        name: "Simon Fraser",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Hans Gaensbauer",
        roles: "",
        image: "hans-gaensbauer.png"
    },
    {
        name: "Alexander Hicker",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Logan Ince",
        roles: "",
        image: "logan-ince.png"
    },
    {
        name: "Marshall Lee",
        roles: "Mechanical Lead<br>MiniMEE",
        image: "marshall-lee.png"
    },
    // {
    //     name: "Katharine Lundblad",
    //     roles: "",
    //     image: "katharine-lundblad.png"
    // },
    {
        name: "Richard Lee",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "John Leitch",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Brett Lum",
        roles: "",
        image: "brett-lum.png"
    },
    {
        name: "Logan McKinney",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Teerth Mehta",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Chase Mersberg",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Walid Mouss",
        roles: "",
        image: "walid-mouss.png"
    },
    {
        name: "Shulong Mo",
        roles: "",
        image: "member-nopic.png"
    },
    {
        name: "Haley Stewart",
        roles: "",
        image: "haley-stewart.png"
    },
    {
        name: "Simon Shimel",
        roles: "",
        image: "simon-shimel.png"
    },
];

var cards = {
    leadership, members, alumni
}[document.currentScript.getAttribute('team')];

cards.forEach(member => document.write(
    `
<div class="team-member-card">
    <img width=200px height=200px class="team-member-photo" src="images/members/${member.image}">
    <p class="team-member-name">${member.name}</p>
    <p class="team-member-roles">${member.roles}</p>
</div>
`
));
