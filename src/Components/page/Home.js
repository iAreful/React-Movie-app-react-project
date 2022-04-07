/** @format */

import React, { useEffect, useState } from "react";
import MovieList from "../MovieList";
import SearchBox from "../SearchBox";
import FavouriteMovies from "../FavouriteMovies";
import FooterArea from "../Containers/FooterArea";
import Heading from "../Heading";
import ScrollToTop from "../Funyionality/ScrollToTop";
import DarkModeToggle from "../Funyionality/DarkMode";
import ShowModal from "../modal/ShowModal";
import FooterPromo from "../modal/FooterPromo";
function Home() {
	const [movies, setMovies] = useState([
		{
			Title: "The Shawshank Redemption",
			Year: "1994",
			imdbID: "tt0111161",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		},
		{
			Title: "The Godfather",
			Year: "1972",
			imdbID: "tt0068646",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		},
		{
			Title: "WALL·E",
			Year: "2008",
			imdbID: "tt0910970",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
		},
		{
			Title: "Forrest Gump",
			Year: "1994",
			imdbID: "tt0109830",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		},
		{
			Title: "Interstellar",
			Year: "2014",
			imdbID: "tt0816692",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		},
		{
			Title: "It's a Wonderful Life",
			Year: "1946",
			imdbID: "tt0038650",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
		},
		{
			Title: "Spider-Man",
			Year: "2002",
			imdbID: "tt0145487",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
		},
		{
			Title: "The Avengers",
			Year: "2012",
			imdbID: "tt0848228",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		},
		{
			Title: "The Amazing Spider-Man",
			Year: "2012",
			imdbID: "tt0948470",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
		},
		{
			Title: "Avengers: Endgame",
			Year: "2019",
			imdbID: "tt4154796",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
		},
		{
			Title: "Spider-Man 2",
			Year: "2004",
			imdbID: "tt0316654",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		},
		{
			Title: "Avengers: Infinity War",
			Year: "2018",
			imdbID: "tt4154756",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
		},
	]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=84c2ff0e`;
		const response = await fetch(url);
		const responseJason = await response.json();

		if (responseJason.Search) {
			setMovies(responseJason.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(localStorage.getItem("react-movie-app"));

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem("react-movie-app", JSON.stringify(items));
	};

	const addFavouritesMovies = (movie) => {
		const newFavouritesList = [...favourites, movie];
		setFavourites(newFavouritesList);
		saveToLocalStorage(newFavouritesList);
	};

	const removeFavouritesMovies = (movie) => {
		const newFavouritesList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
		setFavourites(newFavouritesList);
	};

	return (
		<div className='w-11/12 mx-auto mt-8'>
			<ShowModal />
			<div className='mb-4 sticky top-0 z-30'>
				<div className=' rounded-xl p-4 flex flex-col sm:flex-row sm:space-y-0  space-y-4 justify-between items-center pb-4  bg-[#1D4289] dark:bg-[#6B7787]'>
					<Heading Head='MovieApp' />
					<DarkModeToggle />
					<SearchBox
						searchValue={searchValue}
						setSearchValue={setSearchValue}
					/>
				</div>
			</div>

			<MovieList chinema={movies} handleFavouritesClick={addFavouritesMovies} />

			<FavouriteMovies
				chinema={favourites}
				handleFavouritesClick={removeFavouritesMovies}
			/>
			<ScrollToTop />
			<FooterArea />
			<FooterPromo />
		</div>
	);
}
export default Home;
