// import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ComonIcons } from '../../content/commonIcons'
import { connect } from 'react-redux'
import { setadminPanelStatus } from '../../redux/actions/adminPanel/adminPanelAction'
import { setLoginFlag } from '../../redux/actions/login/loginAction';
import { history } from '../../history'
class sidebar extends Component {
  logout = () => {
    this.props.setLoginFlag(false)
    localStorage.setItem('isLogin', false)
    localStorage.removeItem('user')
    history.push("/login")
  }
  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-header sidebar-padding-x py-3'>
          <div className='logo-block  '>
            <img
              src={require('../../assets/images/logo-dark.svg')}
              className='img-fluid'
              alt="logo"
            />
          </div>
          <div
            className='close-sidebar'
            onClick={() => {
              // console.log('0', this.props.adminPanelFlag)
              this.props.setadminPanelStatus(!this.props.adminPanelFlag)
            }}
          >
            {ComonIcons.close}
          </div>
        </div>
        <div className='sidebar-body'>
          <ul className='sidebar-list-link-wrapper'>
            <li className='sidebar-link-wrappper'>
              <NavLink to='/dashboard' className='path-link'>
                <div className='sidebar-link'>
                  <span className='block-1'>{ComonIcons.dashboard}</span>
                  <span className='block-2'>Dashboard</span>
                </div>
              </NavLink>
            </li>
            <li className='sidebar-link-wrappper'>
              <NavLink to='/dashboard-2' className='path-link'>
                <div className='sidebar-link'>
                  <span className='block-1'>{ComonIcons.notificationLink}</span>
                  <span className='block-2'>Notification</span>
                </div>
              </NavLink>
            </li>
            <li className='sidebar-link-wrappper with-innerdropdown'>
              <NavLink to='/setting' className='path-link'>
                <div className='sidebar-link'>
                  <span className='block-1'>{ComonIcons.setting}</span>
                  <span className='block-2'>Setting</span>
                </div>
              </NavLink>
              <div className='side-bar-inner-main'>
                <ul className='sidebar-inner-list-wrapper'>
                  <li className='sidebar-inner-element'>
                    <NavLink
                      to='/setting/editaccount'
                      className='path-inner-link'
                    >
                      <div className='sidebar-inner-link'>
                        <span className='block-2'>Edit Account</span>
                      </div>
                    </NavLink>
                  </li>
                  <li className='sidebar-inner-element'>
                    <NavLink
                      to='/setting/changepassword'
                      className='path-inner-link'
                    >
                      <div className='sidebar-inner-link'>
                        <span className='block-2'>Change Password</span>
                      </div>
                    </NavLink>
                  </li>
                  <li className='sidebar-inner-element'>
                    <NavLink
                      to='/setting/manageuser'
                      className='path-inner-link'
                    >
                      <div className='sidebar-inner-link'>
                        <span className='block-2'>Manage Users</span>
                      </div>
                    </NavLink>
                  </li>
                  <li className='sidebar-inner-element'>
                    <NavLink
                      to='/setting/manageconnectedaccount'
                      className='path-inner-link'
                    >
                      <div className='sidebar-inner-link'>
                        <span className='block-2'>
                          Manage Connected Accounts
                        </span>
                      </div>
                    </NavLink>
                  </li>
                  <li className='sidebar-inner-element'>
                    <NavLink
                      to='/setting/whitelabelbranding'
                      className='path-inner-link'
                    >
                      <div className='sidebar-inner-link'>
                        <span className='block-2'>White-Label Branding</span>
                      </div>
                    </NavLink>
                  </li>
                  <li className='sidebar-inner-element'>
                    <NavLink
                      to='/setting/subscription'
                      className='path-inner-link'
                    >
                      <div className='sidebar-inner-link'>
                        <span className='block-2'>
                          Upgrade / Cancel Account
                        </span>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className='sidebar-link-wrappper'>
              <NavLink
                to='/login'
                className='path-link'
                onClick={() => {
                  this.logout()
                }}
              >
                <div className='sidebar-link'>
                  <span className='block-1'>{ComonIcons.logout}</span>
                  <span className='block-2'>logout</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('dvjsbjvbj', state)
  const { adminPanelFlag } = state.design
  return {
    adminPanelFlag
  }
}

export default connect(mapStateToProps, {
  setadminPanelStatus, setLoginFlag
})(sidebar)
