import { ComonIcons } from "../../content/commonIcons";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect, useDispatch } from "react-redux";
import { setadminPanelStatus } from "../../redux/actions/adminPanel/adminPanelAction";
import React, { Component } from "react";
import { history } from "../../history";
import { setLoginFlag } from '../../redux/actions/login/loginAction';

class Navbar extends Component {
  state = {};
  logout = () => {
    this.props.setLoginFlag(false)
    localStorage.setItem('isLogin', false)

    history.push("/login")
    localStorage.removeItem('user')
  }
  render() {
    return (
      <div className="custom-navbar">
        <div className="navabar-brand-block">
          <div
            className="burger-menu c-pointer py-2  "
            onClick={() => {
              // console.log("0", this.props.adminPanelFlag);
              this.props.setadminPanelStatus(!this.props.adminPanelFlag);
            }}
          >
            {ComonIcons.burger_menu}
          </div>
        </div>
        <div className="common-navbar-block">
          <ul className="list-wrapper">
            <li className="list-element notification-drp">
              <UncontrolledDropdown>
                <DropdownToggle tag="a" className="notification c-pointer">
                  {ComonIcons.notification_nav}
                </DropdownToggle>
                <DropdownMenu className="menu">
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
            <li className="list-element user-drp">
              <UncontrolledDropdown>
                <DropdownToggle tag="a" className="user">
                  <img
                    src={require("../../assets/images/user.svg")}
                    className="img-fluid"
                    alt="user"
                  />
                </DropdownToggle>
                <DropdownMenu className="menu">
                  <DropdownItem className="logout-item">
                    <span className='block-1'>{ComonIcons.logout}</span>
                    <span className='block-2'
                      onClick={() => {
                        this.logout()
                      }}>logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log("dvjsbjvbj", state);
  const { adminPanelFlag } = state.design;
  return {
    adminPanelFlag,
  };
};
export default connect(mapStateToProps, {
  setadminPanelStatus, setLoginFlag
})(Navbar);
