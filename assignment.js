(async function () {
    const response = await fetch("./data.json")
    const movies = await response.json()

    const genreSelect = document.querySelector('genre');
    const yearSelect = document.querySelector('year');
    const ratingSelect = document.querySelector('rating');
    const languageSelect = document.querySelector('language');

    function displayRecipe(recipe){
        // console.log(recipe);
        genreSelect.innerHTML = `    
        <option value="">Select a genre</option>
        <option value="">${movie.genre}</option>`
    }


})()