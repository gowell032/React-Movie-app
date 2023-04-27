import propTypes from "prop-types";
import styled from 'styled-components';

function Info({ coverImg, title, date, description }) {
  return (
    <Container>
      <img src={coverImg} alt={title} />
      <Content>
        <h1>{title}</h1>
        <span>{date}</span>
        <p>{description}</p>
      </Content>
    </Container>
  );
}

Info.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #141414;
  img {
    width: 100vw;
    height: 100vh;
  }
`;
const Content = styled.div`
  padding: 50px;
  color: whitesmoke;
  position: absolute;
  top: 50px;
  h1 {
    font-size: 60px;
    margin: 10px 10px 0px 10px;
  }
  span {
    font-size: 18px;
    margin: 5px 10px 10px 10px;
    font-weight: bold;
  }
  p {
    margin: 10px;
    font-size: 30px;
  }
`
export default Info;
