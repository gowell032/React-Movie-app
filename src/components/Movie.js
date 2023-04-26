import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <Box>
        <Link to={`detail/${id}`}>
          <img src={coverImg} alt={title} />
        </Link>
        <Content>
          <h2>{title}</h2>
          <p>{summary.length > 200 ? `${summary.slice(0,200)}...` : summary}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </Content>
    </Box>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
};

const Box = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h2 {
    text-align: center;
  }
  img {
    display: block;
  }
  img:hover {
    position: relative;
    top: -15px;
    left: -15px;
    border: 2px solid gold;
    margin: -2px;
  }
  p {
    padding: 25px;
  }
  ul {
    padding-left: 25px;
    display: flex;
    gap: 10px;
  }
  li {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius: 13px;
    padding: 5px;
    list-style: none;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Movie;
