import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Info";
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setMovieInfo(json.data.movie);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <LoaderBox>
          <ClipLoader 
            color='gold'
            size={100} />
        </LoaderBox>
      ) : (
        <div>
          <Info
            coverImg={movieInfo.background_image}
            title={movieInfo.title}
            description={movieInfo.description_full}
          />
        </div>
      )}
    </>
  );
}

const LoaderBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Detail;
