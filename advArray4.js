// ASSIGNMENT 4:
// Movie Streaming Platform

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies
let scifiMovies = movies.filter((movie) => {
  return movie.genre === "Sci-Fi"
})
console.log("Sci-Fi Movies:", scifiMovies)

// 2. map() to return "Title (rating)" format
let movieTitles = movies.map((movie) => {
  return `${movie.title} (${movie.rating})`
})
console.log("Movie Titles with Rating:", movieTitles)

// 3. reduce() to find average movie rating
let averageRating = movies.reduce((sum, movie) => {
  return sum + movie.rating
}, 0) / movies.length
console.log("Average Movie Rating:", averageRating)

// 4. find() movie "Joker"
let jokerMovie = movies.find((movie) => {
  return movie.title === "Joker"
})
console.log("Joker Movie Details:", jokerMovie)

// 5. findIndex() of "Avengers"
let avengersIndex = movies.findIndex((movie) => {
  return movie.title === "Avengers"
})
console.log("Avengers Index:", avengersIndex)
