import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

var produtos
export { produtos }
 
const Nav = styled.div`
  background: #556361;
  position: fixed;
  top: 0;
  height: 10vh;
  width: 100vw;
  line-height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background: #556361;
  width: 15vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({  sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
 
const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
 
  &:hover {
    background: hsl(171.42857142857142, 7.608695652173917%, 30%);
    border-left: 4px solid white;
    cursor: pointer;
  }
`;
 
const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const Sidebar = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false);

  function Deslogar(){
    localStorage.setItem('logado', '2')
    sessionStorage.setItem('logado', '2')
    navigate('/')
    window.location.reload()
  }

  const showSidebar = () => setSidebar(!sidebar);
 
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon style={{display: localStorage.getItem('logado') === '1' || sessionStorage.getItem('logado') === '1' ? 'flex' : 'none'}} to="#">
            <FaIcons.FaBars onClick={showSidebar}/>
          </NavIcon>
          <p className="titleHeader">SEO Sistemas</p>
          <p style={{marginLeft: '75vw', 
          cursor: 'pointer',
          visibility: localStorage.getItem('logado') === '1' || sessionStorage.getItem('logado') === '1' ? 'visible' : 'hidden'
          }} onClick={Deslogar} className="titleHeader">Deslogar</p>
        </Nav>
        <SidebarNav sidebar={sidebar ? 1 : undefined}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <SidebarLink to='/cadastro'>
                <div>
                    <AiIcons.AiOutlineIdcard />
                    <SidebarLabel>Cadastro</SidebarLabel>
                </div>
            </SidebarLink>
            <SidebarLink to='/lista'>
                <div>
                    <AiIcons.AiFillBook />
                    <SidebarLabel>Lista</SidebarLabel>
                </div>
            </SidebarLink>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
