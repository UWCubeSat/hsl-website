var sponsors = [
  {
    name: 'University of Washington',
    url: 'https://www.washington.edu/',
    image: 'images/sponsors/200/university-of-washington-icon-200.png',
  },
  {
    name: 'Washington Space Grant',
    url: 'https://waspacegrant.org/',
    image: 'images/sponsors/icons/washington-nasa-space-grant-consortium-icon.png',
  },
  {
    name: 'NASA',
    url: 'https://www.nasa.gov/',
    image: 'images/sponsors/200/nasa-icon-200.png',
  },
  {
    name: 'AMSAT',
    url: 'https://www.amsat.org/',
    image: 'images/sponsors/200/amsat-logo-200.png',
  },
  {
    name: 'Apex',
    url: 'https://www.apexspace.com/',
    image: 'images/sponsors/200/apex-logo-200.png'
  },
  {
    name: 'Valispace',
    url: 'https://www.valispace.com/',
    image: 'images/sponsors/200/valispace-icon-200.png',
  },
  {
    name: 'SimScale',
    url: 'https://www.simscale.com/',
    image: 'images/sponsors/200/simscale-icon-200.png',
  },
  {
    name: 'Green Heron Engineering',
    url: 'https://www.greenheronengineering.com/',
    image: 'images/sponsors/200/green-heron-engineering-icon-200.png',
  },
  {
    name: 'Takasago Fluidics',
    url: 'https://www.takasago-fluidics.com/',
    image: 'images/sponsors/200/takasago-fluidic-systems-icon-200.png',
  },
  {
    name: 'Systima Technologies',
    url: 'https://www.systima.com/',
    image: 'images/sponsors/icons/systima-technologies-icon.png',
  },
  {
    name: 'Molex',
    url: 'https://www.molex.com/',
    image: 'images/sponsors/200/molex-icon-200.png',
  },
  {
    name: 'Total Phase',
    url: 'https://www.totalphase.com/',
    image: 'images/sponsors/icons/total-phase-icon.jpg',
  },
];


sponsors.forEach(sponsor => document.write(
  `
<a class="card" style="width: 200px;" href="${sponsor.url}">
    <div class="card-img-container">
        <img class="card-img" src="${sponsor.image}">
    </div>
    <p class="card-title">${sponsor.name}</p>
</a>
`
));

