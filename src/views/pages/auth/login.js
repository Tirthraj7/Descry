// import external modules
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { history } from '../../../history'
import SignTab from './signTabPanel'

class Login extends Component {
  componentDidMount = () => {
    if (localStorage.getItem('user')) {
      history.replace('/dashboard')
    }
    if (localStorage.getItem('email')) {
      localStorage.removeItem('email')
    }
  }
  render () {
    return (
      <div className='comon-full-layout'>
        <Row className='no-gutters h-100'>
          <Col xl={4} lg={5} md={12}>
            <div className='comon-block-1'>
              <div className='main-logo'>
                <img
                  src={require('../../../assets/images/logo.svg')}
                  className='img-fluid'
                  alt='logo'
                />
              </div>
              <div className='image-block'>
                <div className>
                  <img
                    src={require('../../../assets/images/login-img.svg')}
                    className='img-fluid'
                    alt='logo-image'
                  />
                </div>
              </div>
              <div className='footer'>
                <h4 className='des-tx-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </h4>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7} md={12}>
            <div className='comon-block-2 h-100 d-flex align-items-center justify-content-center'>
              <div className='login-block common-block-wrapper'>
                <SignTab />
                {/* <div className>
                  <input type="text" placeholder="Email"></input>
                  <input type="password" placeholder="Password"></input>

                  <button onClick={this.loginClick}>submit</button>
                  <Button color="danger">save</Button>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Login
