import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=6&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <LoaderBox>
          <ClipLoader 
            color='gold'
            size={100} />
          </LoaderBox>
      ) : (
        <Container>
          {movies.map((movie, index) => (
            <Movie
              key={index}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  padding: 100px 100px;
  background-color: whitesmoke;
  color: #141414;
  display: grid;
  grid-gap: 80px;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

const LoaderBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Home;
