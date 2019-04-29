import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navigation />
    )
  }
}

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">reverb</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </NavItem>
      <NavItem>
        <Link to={ROUTES.HOME}>Home</Link>
      </NavItem>
      <NavItem>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </NavItem>
      {!!authUser.roles[ROLES.ADMIN] && (
      <NavItem>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </NavItem>
    )}
      <NavItem>
        <SignOutButton />
      </NavItem>
    </Nav>
  </Navbar>
);

const NavigationNonAuth = () => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">reverb</NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href={ROUTES.LANDING}>the app</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={ROUTES.HOME}>home</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default NavigationBar;
