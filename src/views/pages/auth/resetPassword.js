// import external modules
import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Form, FormGroup, Input } from 'reactstrap'
import { ComonIcons } from '../../../content/commonIcons'
import { history } from '../../../history'

import SimpleReactValidator from 'simple-react-validator'

import { ClipLoader } from 'react-spinners'
import {
  forgetPassword,
  forgetPasswordSend
} from '../../../redux/actions/api/apiAction'

class ReSetPassword extends React.Component {
  state = {
    token: '',
    password: '',
    cpass: '',
    loading: false
  }
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      messages: {
        in: 'Passwords need to match!'
      }
    })
  }
  setData = (name, val) => {
    this.setState({ [name]: val })
  }
  componentDidMount = () => {
    if (!localStorage.getItem('email')) {
      history.replace('/login')
    }
    if (localStorage.getItem('user')) {
      history.replace('/dashboard')
    }
  }
  forgotPass = async () => {
    if (this.validator.allValid()) {
      this.setState({ loading: true })
      const data = {
        token: this.state.token,
        password: this.state.password
      }
      await this.props.forgetPasswordSend(data)
      this.setState({ loading: false })
    } else {
      this.validator.showMessages()
    }
  }
  sendAgain = async () => {
    this.setState({ loading: true })
    await this.props.forgetPassword(localStorage.getItem('email'))
    this.setState({ loading: false })
  }
  render() {
    return this.state.loading ? (
      <ClipLoader />
    ) : (
      <div>
        {' '}
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
                  <Row>
                    <Col sm='12'>
                      <div className>
                        <h3 className='des-tx-black f-600'> Reset Password</h3>
                        <Form className='pt-0 pt-md-3 mt-3'>
                          <FormGroup className='position-relative'>
                            <Input
                              type='text'
                              name='code'
                              id='code'
                              placeholder='Code'
                              className='pl-0'
                              value={this.state.token}
                              onChange={e =>
                                this.setData('token', e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor('Code')
                              }
                            />
                            {this.validator.message(
                              'Code',
                              this.state.token,
                              `required`,
                              { className: 'text-danger' }
                            )}
                          </FormGroup>
                          <FormGroup className='position-relative'>
                            <Input
                              type='password'
                              name='password'
                              id='password'
                              placeholder='New Password'
                              className='with-icons'
                              value={this.state.password}
                              onChange={e =>
                                this.setData('password', e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor('Password')
                              }
                            />
                            {this.validator.message(
                              'Password',
                              this.state.password,
                              `required|min:7`,
                              { className: 'text-danger' }
                            )}
                            <span className='absolute-icon'>
                              {ComonIcons.lock}
                            </span>
                          </FormGroup>

                          <FormGroup className='position-relative'>
                            <Input
                              type='password'
                              name='password'
                              id='password'
                              placeholder='Confirm Password'
                              className='with-icons'
                              value={this.state.cpass}
                              onChange={e =>
                                this.setData('cpass', e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor(
                                  'Confirm Password'
                                )
                              }
                            />
                            {this.validator.message(
                              'Confirm Password',
                              this.state.cpass,
                              `required|min:7|in:${this.state.password}`,
                              { className: 'text-danger' }
                            )}
                            <span className='absolute-icon'>
                              {ComonIcons.lock}
                            </span>
                          </FormGroup>

                          {/* <div className="forget-password pt-3">
                            <Link className="red-link link">
                              Forgot Password
                            </Link>
                          </div> */}

                          <div className='pt-3'>
                            <button
                              className='btn btn-custom-primary w-100'
                              type='button'
                              onClick={() => this.sendAgain()}
                            >
                              Resend code
                            </button>
                          </div>
                          {/* <div className="border-block or-block-wrapper text-center">
                            <h4 className="or-block f-bold ">OR</h4>
                          </div> */}
                          <div className='pt-3'>
                            <button
                              className='btn btn-custom-secondary w-100'
                              type='button'
                              onClick={() => this.forgotPass()}
                            >
                              <span> reset Password</span>
                            </button>
                          </div>
                        </Form>
                      </div>{' '}
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  forgetPassword,
  forgetPasswordSend
})(ReSetPassword)
