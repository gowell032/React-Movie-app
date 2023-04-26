import propTypes from "prop-types";
import styled from 'styled-components';

function Info({ coverImg, title, description }) {
  return (
    <Container>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  );
}

Info.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  h1 {
    color: #141414;
  }
  p {
    padding:10px;
    color: #141414;
    text-align: center;
    white-space: pre-line;
  }
  img {
    width: 100vw;
  }
`;

export default Info;
