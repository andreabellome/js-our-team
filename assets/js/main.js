
/* info on team */
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

/* path of the images */
const pathimageREF = "./assets/img/";

/* create the cards */
const cardCont = document.querySelector('.row');
for ( let i = 0; i < team.length; i++ ){

    /* search for the images */
    const pathimage = pathimageREF + team[i]['image'];

    /* load the cards */
    cardCont.innerHTML += `
        <div class="card mb-10" style="width: calc(100% / 3 - 10px);" >
            <img src=" ${pathimage} " class="card-img-top" alt=" ${team[i]['name']} ">
            <div class="card-body text-center">
            <h5 class="card-title">${team[i]['name']}</h5>
            <p class="card-text">${team[i]['role']}</p>
            </div>
        </div>
    `
    
}
