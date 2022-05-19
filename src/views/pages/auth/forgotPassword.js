// import external modules
import React from 'react'

import SimpleReactValidator from 'simple-react-validator'

import { connect } from 'react-redux'
import { ClipLoader } from 'react-spinners'
import { forgetPassword } from '../../../redux/actions/api/apiAction'

import { Form, Row, Col, Input, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
import { history } from '../../../history'
import { ComonIcons } from '../../../content/commonIcons'
class ForgotPassword extends React.Component {
  state = {
    email: '',
    emailError: '',
    dissable: false,
    loading: false
  }
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator({ autoForceUpdate: this })
    // if (localStorage.getItem('user')) {
    //   history.replace('/forgot-password')
    // }
  }

  forgotPass = async () => {
    if (this.validator.fieldValid('email')) {
      await this.setState({ loading: true })
      const data = {
        email: this.state.email
      }
      await this.props.forgetPassword(data)
      await this.setState({ loading: false })
    } else {
      this.validator.showMessages()
    }
  }
  setData = (name, val) => {
    this.setState({ [name]: val })
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
                  <div>
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
                      <div>
                        <h3 className='des-tx-black f-600'> Forgot Password</h3>
                        <div className='note pt-1 pt-md-3'>
                          <h5 className='des-tx-fifth'>
                            Enter your email below, and we’ll send you the
                            Verification code
                          </h5>
                        </div>
                        <Form className='pt-3 pt-md-4'>
                          <FormGroup className='position-relative'>
                            <Input
                              type='email'
                              name='email'
                              id='exampleEmail'
                              placeholder='Email Id'
                              className='with-icons'
                              value={this.state.email}
                              onChange={e =>
                                this.setData('email', e.target.value)
                              }
                              onBlur={() =>
                                this.validator.showMessageFor('email')
                              }
                            />
                            {this.validator.message(
                              'email',
                              this.state.email,
                              'required|email',
                              { className: 'text-danger' }
                            )}
                            <span className='absolute-icon'>
                              {ComonIcons.mailer}
                            </span>
                          </FormGroup>

                          {/* <div className="forget-password pt-3">
                            <Link className="red-link link">
                              Forgot Password
                            </Link>
                          </div> */}

                          <div className='pt-3 pt-md-5'>
                            <button
                              type='button'
                              className='btn btn-custom-primary w-100'
                              onClick={() => this.forgotPass()}
                            >
                              Send Reset link
                            </button>
                          </div>
                          {/* <div className="border-block or-block-wrapper text-center">
                            <h4 className="or-block f-bold ">OR</h4>
                          </div> */}
                          <div className='pt-4 text-center'>
                            <span className='h4 des-tx-primary f-700'>
                              Back To{' '}
                            </span>
                            <span>
                              {' '}
                              <Link to=""
                                className='link des-tx-black f-700'
                                onClick={() => {
                                  history.push('/login')
                                }}
                              >
                                {' '}
                                login
                              </Link>
                            </span>

                            {/* <button className="btn btn-custom-secondary w-100">
                              <span></span>
                            </button> */}
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

export default connect(null, { forgetPassword })(ForgotPassword)
