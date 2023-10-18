
const person2 = {}; //literal створення обєкту

const person3 = {
    name: "Seweryn",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function () {
        alert("hi");
    }
};
//person3.greet();



let person = {
    'first name': 'Seweryn', //key name - możemo wzywaty stringy
    age: 30, // key - age; value - 30
    hobbies: ['Sports', 'Cooking'],
    greet: function () {
        alert("hi");
    },
    1.5: 'hello'
};

const keyName = 'vasia';

// jak wyklykaty key string??

// console.log(person[keyName]);
//
// console.log(person['first name']);

person.isAdmi = true; // tak dodajemy wlasciwosci

delete person.age; // wydaliaje age

const propKey = 'field 12';
const person1 = {
    [propKey]: 'Max'
};
// console.log(person1['field 12']);




const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');

    } else  {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));  //wyszukiwarka

    filteredMovies.forEach((movie) => {
       const molieEl = document.createElement('li');
       // molieEl.textContent = movie.info.title;  //czemu title działa?
        let text  = movie.info.title + ' - ';
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]}`;
            }
        }
        molieEl.textContent = text;
       movieList.append(molieEl);
    });
}

const addMovieHandler = () => {
    const title = document.querySelector('#title').value;
    const extraName = document.querySelector('#extra-name').value;
    const extraValue = document.querySelector('#extra-value').value;

    //trim() - metoda która wycina probily
    if (title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

        const newMovie = {
            info: {
                title,
                [extraName]: extraValue  // [] dynamiczna wartość
            },
            id: Math.random()
        };

        movies.push(newMovie);
        renderMovies();
};


const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}





addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);




























