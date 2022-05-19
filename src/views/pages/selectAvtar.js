import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Dropzone from 'react-dropzone'
import { toastr } from "react-redux-toastr";


import Select from 'react-select'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { connect } from 'react-redux'
import { getInds } from '../../redux/actions/api/apiAction'
import { history } from '../../history';
import SimpleReactValidator from 'simple-react-validator';
import { ClipLoader } from 'react-spinners';

class SelectAvatar extends Component {
  state = {
    selectedOption: null,
    address: '',
    ind: [
      { value: 'Information & Technology', label: 'Information & Technology' },
      { value: 'Banking', label: 'Banking' },
      { value: 'Engineering', label: 'Engineering' }
    ],
    imgData: '',
    imgSrc: '',
    avatar: '',
    coordinates: [
      { lat: null },
      { lng: null }
    ],
    loading: false
  }
  images = [
    { img1: require('../../assets/images/input-1.svg') },
    { img2: require('../../assets/images/input-2.svg') },
    { img3: require('../../assets/images/input-3.svg') },
    { img4: require('../../assets/images/input-4.svg') },
    { img5: require('../../assets/images/input-5.svg') },
    { img6: require('../../assets/images/input-6.svg') },
  ]


  setData = (name, val) => {
    this.setState({ [name]: val })
  }

  uploadImage = (files) => {
    const file = files[0]
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    // setImage(fileReader.result)
    // this.setState({
    //   avatar: URL.createObjectURL(file)
    // });

    fileReader.onloadend = () => {
      // img.src = reader.result;
      // console.log(fileReader.result);
      this.setState({ avatar: fileReader.result })
    };
  }

  handleChange = address => {
    // console.log(address);
    this.setState({ address });
  };
  handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      // .then(latLng => console.log("Success", latLng))
      // .then(() => this.setState({ storedAddress: address }))
      .catch(error => console.error("Error", error));
    this.setState({ address });
  };

  // setImage = (imgs) => {
  //   console.log(imgs);
  //   const img = this.images.filter((item) => Object.keys(item)[0] === imgs)
  //   console.log(Object.values(img[0])[0]);
  //   const imgData = new FileReader();
  //   imgData.readAsDataURL(Object.values(img[0])[0])
  // }

  // componentDidMount = async () => {
  //   //   await this.props.getInds()
  //   //   let newa = []
  //   //   if (this.props.ids.length) {
  //   //     for (let index = 0; index < this.props.ids.length; index++) {
  //   //       newa.push({
  //   //         value: this.props.ids[index].id,
  //   //         label: this.props.ids[index].name
  //   //       })
  //   //     }
  //   //   }
  //   //   await this.setState({ ind: newa })
  // }
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
    });
  }
  submit = () => {
    if (this.validator.allValid()
    ) {
      toastr.success("Avatar added successfully");
      history.push("/whatsbring");
      return false
    } else {
      this.validator.showMessages();
    }
  }

  render() {
    // console.log(this.state.address);
    // console.log(this.state.avatar);
    return this.state.loading ? (
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
                <Col sm={12} md={12} xl={10} className="ml-auto px-0" >
                  <div>
                    <h1 className='f-bold'>Welcome! Let’s create your profile</h1>
                    <h5 className='des-tx-fourth'>
                      let others get to know you beter! You can do these later
                    </h5>
                  </div>
                  <div className='edit-image-portion'>
                    <div className='block-1'>
                      <h3 className='f-bold'>Add an avatar</h3>
                      <div className='drop-input-block'>
                        <Dropzone
                          onDrop={acceptedFiles => { this.uploadImage(acceptedFiles) }}
                          accept="image/jpeg, image/jpg, image/png, image/jfif"
                          onChange={(e) => this.setData("avatar", e.target.value)}
                          onBlur={() => this.validator.showMessageFor("avatar")}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <section>
                              <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>
                                  Drag 'n' drop some files here, or click to
                                  select files
                                </p>
                                <div className="custom-avatar-box">
                                  {this.state.avatar !== '' ? <img src={this.state.avatar} className="custom-avatar-img" alt="Avatar"></img>
                                    :
                                    <i className="fa fa-camera" aria-hidden="true"></i>
                                  }
                                </div>
                                <div>
                                  {/* <h4 className="f-bold" style={{ paddingLeft: "10px", paddingTop: "7px" }}>+ Add Image</h4> */}
                                </div>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                        {this.validator.message(
                          "avatar",
                          this.state.avatar,
                          "required",
                          {
                            className: "error-massage",
                          }
                        )}
                      </div>
                    </div>
                    <div className='or-extra-block or-extra-block-hr'>
                      <span className='or'>
                        <h3 className='f-bold des-tx-black'>OR</h3>
                      </span>
                    </div>
                    <div className='block-2'>
                      <h3 className='f-bold'>Choose Image</h3>
                      <p className='des-tx-primary'>
                        or choose one of the defaults
                      </p>
                      <ul className='list-default-images'>
                        <li className='element-default'>
                          <img
                            onClick={(e) => this.setState({
                              "avatar": this.images[0].img1
                            })}
                            src={require('../../assets/images/input-1.svg')}
                            alt='input-1'
                            className='img-fluid'
                            id='img1'
                          />
                        </li>
                        <li className='element-default'>
                          <img
                            onClick={(e) => this.setState({
                              "avatar": this.images[1].img2
                            })}
                            src={require('../../assets/images/input-2.svg')}
                            alt='input-1'
                            className='img-fluid'
                            id='img2'
                          />
                        </li>
                        <li className='element-default'>
                          <img
                            onClick={(e) => this.setState({
                              "avatar": this.images[2].img3
                            })}
                            src={require('../../assets/images/input-3.svg')}
                            alt='input-1'
                            className='img-fluid'
                            id='img3'
                          />
                        </li>
                        <li className='element-default'>
                          <img
                            onClick={(e) => this.setState({
                              "avatar": this.images[3].img4
                            })}
                            src={require('../../assets/images/input-4.svg')}
                            alt='input-1'
                            className='img-fluid'
                            id='img4'
                          />
                        </li>
                        <li className='element-default'>
                          <img
                            onClick={(e) => this.setState({
                              "avatar": this.images[4].img5
                            })}
                            src={require('../../assets/images/input-5.svg')}
                            alt='input-1'
                            className='img-fluid'
                            id='img5'
                          />
                        </li>
                        <li className='element-default'>
                          <img
                            onClick={(e) => this.setState({
                              "avatar": this.images[5].img6
                            })}
                            src={require('../../assets/images/input-6.svg')}
                            alt='input-1'
                            className='img-fluid'
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='py-3'>
                    <Form>
                      <Row>
                        <Col md={7}>
                          <h3 className='f-bold'>Add your location </h3>
                          <FormGroup className='position-relative'>
                            {/* {suggestions.map(suggestion => {
                              return ( */}
                            <PlacesAutocomplete
                              value={this.state.address}
                              onChange={this.handleChange}
                              onSelect={this.handleSelect}
                              onBlur={() => this.validator.showMessageFor("address")}
                            >
                              {({
                                getInputProps,
                                suggestions,
                                getSuggestionItemProps,
                                loading
                              }) => (
                                <div>
                                  <Input
                                    {...getInputProps({
                                      placeholder: 'Search Places ...',
                                      className: 'location-search-input'
                                    })}
                                  />
                                  <div className='autocomplete-dropdown-container'>
                                    {loading && <div>Loading...</div>}
                                    {suggestions.map(suggestion => {
                                      const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item'
                                      // inline style for demonstration purpose
                                      const style = suggestion.active
                                        ? {
                                          backgroundColor: '#4ab6e6',
                                        }
                                        : {
                                          backgroundColor: '#ffffff',
                                        }
                                      return (
                                        <div
                                          {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style
                                          })}
                                          key={suggestion.placeId}
                                        >
                                          {/* key={suggestion.placeId} */}
                                          <span>{suggestion.description}</span>
                                        </div>
                                      )
                                    })}
                                  </div>
                                </div>
                              )}
                            </PlacesAutocomplete>
                            {
                              this.validator.message(
                                "address",
                                this.state.address,
                                "required",
                                {
                                  className: "error-massage",
                                }
                              )
                            }
                            {/* })} */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={7}>
                          <h3 className='f-bold pt-4'>Add your Industry </h3>
                          <FormGroup className='position-relative custom-select-box'>
                            <Select
                              // defaultInputValue={
                              //   this.state.ind.length ? this.state.ind[0] : ''
                              // }
                              value={this.state.selectedOption}
                              onChange={e => this.setData('selectedOption', e)}
                              options={this.state.ind}
                              onBlur={() => this.validator.showMessageFor("selectedOption")}
                            />
                            {this.validator.message(
                              "selectedOption",
                              this.state.selectedOption,
                              "required",
                              {
                                className: "error-massage",
                              }
                            )}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <div className='pt-3 pt-md-5'>
                            <button className='btn btn-custom-primary w-100' type="button" onClick={() => this.submit()} >
                              Continue
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
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
                      alt='logo-image'
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
    );
  }
}
const mapStateToProps = state => {
  return {
    ids: state.login.inds
  }
}

export default connect(mapStateToProps, { getInds })(SelectAvatar)
