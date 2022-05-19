import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import { history } from '../../history';
import { toastr } from "react-redux-toastr";
import { ClipLoader } from 'react-spinners';

function WhatsBring() {
  const [suggesion, setSuggesion] = useState("");
  let [loading, setLoading] = useState(false);


  const handleSubmit = () => {
    // console.log(suggesion);
    if (!suggesion || suggesion === "") {
      toastr.error("Please select atleast one option");
      return false
    } else {
      toastr.success("Successfully added");
      history.push("/subscription");
    }
  }
  return loading ? (
    <ClipLoader />
  ) : (
    <div>
      <div className='comon-full-layout bring-main-wrapper'>
        <Row className='no-gutters h-100'>
          <Col
            sm={{ size: '12', order: '2' }}
            xl={{ size: '8', order: '1' }}
            lg={{ size: '7', order: '1' }}
            md={{ size: '12', order: '2' }}
            xs={{ size: '12', order: '2' }}
          >
            <div className='subscription-wrapper slice-wrapper'>
              <div>
                <h1 className='f-bold'>What brings you to Descry?</h1>
                <h5 className='des-tx-fourth'>
                  Select the options that best describe you. Dont’s worry, you
                  can explore other options later.
                </h5>
              </div>
              <div className='d-flex pt-3 pt-md-5'>
                <Row>
                  <Col md={6} lg={6} xl={3}>
                    <div className='bring-block-wrapper'>
                      <div className='bring-block'>
                        <input id='bring1' name='bringblock' type='radio' />
                        <label htmlFor='bring1'>
                          <div className='img-block text-center'>
                            <img
                              src={require('../../assets/images/bring-1.svg')}
                              className='img-fluid'
                              alt='img-1'
                            />
                          </div>
                          <div
                            className='content'
                            onClick={(val) => setSuggesion("1")}
                          >
                            <h5>
                              {' '}
                              I want to monitor my own social media accounts, or
                              I am a social media influencer.
                            </h5>
                            <div className=' custom-content'>
                              <p className='small-11  des-tx-fifth'>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className='input-type-block'>
                            <span className='empty-input'></span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={6} xl={3}>
                    <div className='bring-block-wrapper'>
                      <div className='bring-block'>
                        <input id='bring2' name='bringblock' type='radio' />
                        <label htmlFor='bring2'>
                          <div className='img-block text-center'>
                            <img
                              src={require('../../assets/images/bring-2.svg')}
                              className='img-fluid'
                              alt='img-1'
                            />
                          </div>
                          <div
                            className='content'
                            onClick={(val) => setSuggesion("2")}                          >
                            <h5>
                              {' '}
                              I am a business owner seeking to understand the
                              needs & views of my clients.
                            </h5>
                            <div className=' custom-content'>
                              <p className='small-11  des-tx-fifth'>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className='input-type-block'>
                            <span className='empty-input'></span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={6} xl={3}>
                    <div className='bring-block-wrapper'>
                      <div className='bring-block'>
                        <input id='bring3' name='bringblock' type='radio' />
                        <label htmlFor='bring3'>
                          <div className='img-block text-center'>
                            <img
                              src={require('../../assets/images/bring-3.svg')}
                              className='img-fluid'
                              alt='img-1'
                            />
                          </div>
                          <div
                            className='content'
                            onClick={(val) => setSuggesion("3")}                          >
                            <h5>
                              {' '}
                              I am interested in monitoring my brand,
                              advertising and other topics of interest to my
                              businesses.
                            </h5>
                            <div className=' custom-content'>
                              <p className='small-11  des-tx-fifth'>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className='input-type-block'>
                            <span className='empty-input'></span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} lg={6} xl={3}>
                    <div className='bring-block-wrapper'>
                      <div className='bring-block'>
                        <input id='bring4' name='bringblock' type='radio' />
                        <label htmlFor='bring4'>
                          <div className='img-block text-center'>
                            <img
                              src={require('../../assets/images/bring-4.svg')}
                              className='img-fluid'
                              alt='img-1'
                            />
                          </div>
                          <div
                            className='content'
                            onClick={(val) => setSuggesion("4")}                          >
                            <h5>
                              {' '}
                              I work with a government agency or a non-profit
                              organization.
                            </h5>
                            <div className=' custom-content'>
                              <p className='small-11  des-tx-fifth'>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className='input-type-block'>
                            <span className='empty-input'></span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='pt-3 pt-md-4'>
                      <button className='btn btn-custom-primary w-100' type="submit" onClick={handleSubmit}>
                        Finish
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col
            xl={{ size: '4', order: '2' }}
            lg={{ size: '5', order: '2' }}
            md={{ size: '12', order: '1' }}
            sm={{ size: '12', order: '1' }}
            xs={{ size: '12', order: '1' }}
          >
            <div className='comon-block-1 d-flex justify-space-between'>
              <div className='main-logo'>
                <img
                  src={require('../../assets/images/logo.svg')}
                  className='img-fluid'
                  alt='logo'
                />
              </div>
              <div className='image-block pb-0'>
                <div>
                  <img
                    src={require('../../assets/images/whatsBring-1.svg')}
                    className='img-fluid'
                    alt='logo_image'
                  />
                </div>
              </div>
              <div>
                <h3 className=' des-tx-white  py-3 py-md-0 text-center'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default WhatsBring
