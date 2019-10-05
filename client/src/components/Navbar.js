import React from 'react';
import Utoob from '../images/Utoob.png';
import UtoobIcon from '../images/UtoobIcon.png';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import styled from 'styled-components';



class Navbar extends React.Component {
  
  // rightNavItems = () => {
  //   const { auth: { user, handleLogout, }, location, } = this.props;
    
  //   if (user) {
  //     return (
  //       <Menu.Menu position='right'>
  //         <Menu.Item
  //           name='logout'
  //           onClick={ () => handleLogout(this.props.history) }
  //         />
  //       </Menu.Menu>
  //     )
  //   } else {
  //     return (
  //       <Menu.Menu position='right'>
  //         <Link to='/login'>
  //           <Menu.Item
  //             id='login'
  //             name='login'
  //             active={location.pathname === '/login'}
  //           />
  //         </Link>
  //         <Link to='/register'>
  //           <Menu.Item
  //             id='register'
  //             name='register'
  //             active={location.pathname === '/register'}
  //           />
  //         </Link>
  //       </Menu.Menu>
  //     )
  //   }
  // }
  
  render() {
    return (
      <div>
        <ImgContainer>
          <img width="100%" src={Utoob} alt="utoob" />
        </ImgContainer>

          <ToggleContainer>
          <Dropdown>
            <Dropdown.Toggle marginLeft="40px" variant="danger" id="dropdown-basic">
              <img marginLeft="40px" width="100%" src={UtoobIcon} alt="icon" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/"> Home </Dropdown.Item>
              <Dropdown.Item href="/Videos"> Videos </Dropdown.Item>
              {/* <Dropdown.Item onClick= {this.rightNavItems()} > Logout </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          </ToggleContainer>

          <ButtonContainer>
          <Link to={"/video_form/"}>
            <StyledButton > Upload Video </StyledButton>
          </Link>
          </ButtonContainer>
        {/* <Menu pointing secondary>
          <Link to='/'>
          <Menu.Item
          name='home'
          id='home'
          active={this.props.location.pathname === '/'}
          />
          </Link>
          { this.rightNavItems() }
        </Menu> */}
      </div>
    )
  }
}

const ToggleContainer = styled.div`
  height: 80px;
  width: 50px;
  margin-left: 1100px;
  margin-right: 500px;
  margin-top: -40px;
  
  `;

const ImgContainer = styled.div`
  display: flex;
  align-content: center;
  margin-top: 40px;
  margin-left: 100px;
  width: 120px;
  background-color: white;
  `;

const ButtonContainer = styled.div`
  height: 100px;
  width: 100px;
  margin-left: 500px;
  margin-top: -80px;
  `;

const StyledButton = styled.button`
  background: red;
  width: 130px;
  border: none;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  margin-left: 670px;
  border-radius: 10px;
  
  &:hover {
    background: rgba(30, 85, 90, 0.87);
    transition: background 0.2s ease;
  }
  `;

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);

  // <Dropdown>
  //     <Dropdown.Toggle marginLeft="40px" variant="success" id="dropdown-basic">
  //       <img marginLeft="40px" width="100%" src={UtoobIcon} alt="icon" />
  //     </Dropdown.Toggle>

  //   <Dropdown.Menu>
  //     <Dropdown.Item href="/"> Home </Dropdown.Item>
  //     <Dropdown.Item href="/Videos"> Videos </Dropdown.Item>
  //     {/* <Dropdown.Item onClick= {this.rightNavItems()} > Logout </Dropdown.Item> */}
  //   </Dropdown.Menu>
  // </Dropdown>