import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Link to={`${process.env.PUBLIC_URL}/`}><span>Movies</span></Link>
    </Nav>
  )
}

const Nav = styled.div`
  width: 100vw;
  height: 60px;
  border: 1px solid #141414;
  background-color: #141414;
  display: flex;
  align-items: center;
  position: fixed;
  a {
    text-decoration: none;
  }
  span {
    color: gold;
    font-size: 40px;
    padding-left: 50px;
    font-weight: 400;
  }
`
export default Header;