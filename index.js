
// local reviews data
const reviews = [
    {
        id: 1,
        name: 'Emmanuel Damilola',
        profession: 'software engineer',
        img: 'https://images.pexels.com/photos/5926386/pexels-photo-5926386.jpeg?auto=compress&cs=tinysrgb&w=600',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur id suscipit nihil voluptates fuga maxime maiores voluptatem quo veritatis, ipsum labore, sed provident culpa veniam odio deserunt consequatur ab voluptatibus dolorum cumque iure. Nulla fugit reiciendis quia, beatae incidunt qui rerum sint eos placeat libero saepe voluptas, inventore expedita voluptatibus!'
    },

    {
        id: 2,
        name: 'Nikola tesla',
        profession: 'Electrical engineer',
        img: 'https://images.pexels.com/photos/7861963/pexels-photo-7861963.jpeg?auto=compress&cs=tinysrgb&w=600',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur id suscipit nihil voluptates fuga maxime maiores voluptatem quo veritatis, ipsum labore, sed provident culpa veniam odio deserunt consequatur ab voluptatibus dolorum cumque iure. Nulla fugit reiciendis quia, beatae incidunt qui rerum sint eos placeat libero saepe voluptas, inventore expedita voluptatibus!'
    },

    {
        id: 3,
        name: 'Tony stark',
        profession: 'Scientist',
        img: 'https://images.pexels.com/photos/3446256/pexels-photo-3446256.jpeg?auto=compress&cs=tinysrgb&w=600',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur id suscipit nihil voluptates fuga maxime maiores voluptatem quo veritatis, ipsum labore, sed provident culpa veniam odio deserunt consequatur ab voluptatibus dolorum cumque iure. Nulla fugit reiciendis quia, beatae incidunt qui rerum sint eos placeat libero saepe voluptas, inventore expedita voluptatibus!'
    }
];


// REFERENCE TO THE DOM FOR MANIPULATION

const Section = document.querySelector('section');
const Image = document.querySelector('.image-container');
const Name = document.querySelector('.info h4');
const Job = document.querySelector('.info h5');
const Text = document.querySelector('.info p');
const Prev = document.querySelector('#prev');
const Next = document.querySelector('#next');
const Random = document.querySelector('.change-review button');


// DOM MANIPULATION

// inital index of the reviews data
let currentReview = 0;

// function to update the review data to avoid repetition
function showData(person){
    let review = reviews[person];
    Image.style.backgroundImage = `url(${review.img})`;
    Name.innerHTML = review.name;
    Job.innerHTML = review.profession;
    Text.innerHTML = review.text;
}

// initial loading of the html page after it has been parsed...
// parsed there means it has attached the js listeners and updated all hard coded element
document.addEventListener('DOMContentLoaded', () => {
    showData(currentReview);
})

// next button scripts
Next.addEventListener('click', () => {
    if(currentReview === 3){
        currentReview = 0;
    }
    showData(currentReview);
    currentReview++;
    Section.animate(
        {
            opacity: [0.1, 1.0],
        },
        {
            fill: 'forwards',
            duration: 1000
        }
    );

})

// previous button scripts
Prev.addEventListener('click', () => {
    if(currentReview === -1){
        currentReview = 2;
    }
    showData(currentReview);
    currentReview--;
    Section.animate(
        {
            opacity: [0.1, 1.0],
        },
        {
            fill: 'backwards',
            duration: 1000
        }
    );

})

// random button scripts~
Random.addEventListener('click', () => {
    let review = reviews[Math.floor(Math.random()*reviews.length)];
    Image.style.backgroundImage = `url(${review.img})`;
    Name.innerHTML = review.name;
    Job.innerHTML = review.profession;
    Text.innerHTML = review.text;
    Section.animate(
        {
            opacity: [0.1, 1.0],
        },
        {
            duration: 1000
        }
    );

})



