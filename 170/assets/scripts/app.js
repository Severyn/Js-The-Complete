const buttonOpenModal = document.querySelector('#add-modal-open');
const modal = document.querySelector('#add-modal');
const hideModal = document.querySelector('.btn--passive');

const title = document.querySelector('#title');
const imageUrl = document.querySelector('#image-url');
const rating = document.querySelector('#rating');
const btnAdd = document.querySelector('.btn--success');

const newListing = document.querySelector('#movie-list');


//tworze elementy
const li = document.createElement('li');
const newTitle = document.createElement('h2');
const image = document.createElement('img');
const setRating = document.createElement('p');

newListing.appendChild(li);
li.appendChild(newTitle);
li.appendChild(image);
li.appendChild(setRating);

buttonOpenModal.addEventListener('click', () => {
        modal.className = 'visible';
    }
);

hideModal.addEventListener('click', () => {
        modal.className = 'modal';
    }
);

btnAdd.addEventListener('click', () => {
        newTitle.textContent = title.value;
        image.src = imageUrl.value;
        setRating.textContent = rating.value;
    }
);


/*
https://my.kumonglobal.com/wp-content/uploads/2022/03/Learn-from-Rowan-Atkinson_Kumon-Malaysia_530x530_NewsThumbnail.jpg
*/

