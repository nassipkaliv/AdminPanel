import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Container,
  Row, Col
} from "shards-react";

class NavbarDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <Form className="main-navbar__search w-100 flex-row d-none d-md-flex d-lg-flex">
        <div className="py-2 mt-1 px-4" href="#">
          <img
            width={70}
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../images/avatars/0.jpg")}
            alt="User Avatar"
            style={{ borderRadius: '60px' }}
          />
        </div>
        <div className="mt-2 border-right">
          <div className="d-flex flex-column mr-2 px-2" href="#">
            <span className="mt-auto" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Anna Lover</span>
            <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>ID: 13931</span>
          </div>
        </div>
        <div className="mt-2 border-right">
          <div className="d-flex flex-column mr-2 px-2" href="#">
            <span className="mt-auto" style={{ fontSize: '18px', letterSpacing: '0.2px', fontWeight: '600', color: 'var(--black, #1D2226)' }}>Status</span>
            <span style={{ color: 'var(--grey, #7E838E)', fontSize: '14px', fontWeight: '500', letterSpacing: '0.16px' }}>Partner</span>
          </div>
        </div>
        <div className="mt-3 border-right">
          <div className="px-3" href="#">
            <p style={{ color: 'var(--black, #1D2226)', fontSize: '20px', letterSpacing: '-0.6px', fontWeight: '500' }}>$64,768<span style={{ color: 'var(--grey, #7E838E)' }}>.64</span></p>
          </div>
        </div>
        <div className="mt-3">
          <div className="px-2">
            <Button onClick={this.toggle} style={{ border: 'none', background: 'none', paddingTop: '0' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 33 32" fill="none">
                {/* Your SVG path data */}
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                  <path d="M23.8333 10.6667C25.6743 10.6667 27.1667 9.17427 27.1667 7.33333C27.1667 5.49239 25.6743 4 23.8333 4C21.9924 4 20.5 5.49239 20.5 7.33333C20.5 9.17427 21.9924 10.6667 23.8333 10.6667Z" fill="#A9B0BA"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 7.33333C19.5 4.9401 21.4401 3 23.8333 3C26.2265 3 28.1667 4.9401 28.1667 7.33333C28.1667 9.72655 26.2266 11.6667 23.8333 11.6667C21.4401 11.6667 19.5 9.72655 19.5 7.33333ZM23.8333 5C22.5447 5 21.5 6.04467 21.5 7.33333C21.5 8.62198 22.5447 9.66667 23.8333 9.66667C25.122 9.66667 26.1667 8.62198 26.1667 7.33333C26.1667 6.04467 25.122 5 23.8333 5Z" fill="#A9B0BA"/>
                  <path d="M9.16683 19.3332C11.0078 19.3332 12.5002 17.8408 12.5002 15.9998C12.5002 14.1589 11.0078 12.6665 9.16683 12.6665C7.3259 12.6665 5.8335 14.1589 5.8335 15.9998C5.8335 17.8408 7.3259 19.3332 9.16683 19.3332Z" fill="#A9B0BA"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8335 15.9998C4.8335 13.6066 6.77361 11.6665 9.16683 11.6665C11.56 11.6665 13.5002 13.6066 13.5002 15.9998C13.5002 18.3931 11.56 20.3332 9.16683 20.3332C6.77361 20.3332 4.8335 18.3931 4.8335 15.9998ZM9.16683 13.6665C7.87818 13.6665 6.8335 14.7112 6.8335 15.9998C6.8335 17.2885 7.87818 18.3332 9.16683 18.3332C10.4555 18.3332 11.5002 17.2885 11.5002 15.9998C11.5002 14.7112 10.4555 13.6665 9.16683 13.6665Z" fill="#A9B0BA"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3552 8.53129C21.6414 9.00364 21.4905 9.61855 21.0181 9.90474L12.5774 15.0187C12.1051 15.3049 11.4901 15.1539 11.204 14.6816C10.9178 14.2092 11.0687 13.5943 11.5411 13.3081L19.9818 8.19419C20.4541 7.90801 21.0691 8.05893 21.3552 8.53129Z" fill="#A9B0BA"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1983 17.2004C11.4793 16.7249 12.0925 16.5673 12.568 16.8482L21.4616 22.1035C21.937 22.3845 22.0947 22.9977 21.8138 23.4732C21.5328 23.9487 20.9196 24.1064 20.4441 23.8254L11.5505 18.5701C11.075 18.2891 10.9173 17.6759 11.1983 17.2004Z" fill="#A9B0BA"/>
                  <path d="M23.8333 21.3335C25.6743 21.3335 27.1667 22.8259 27.1667 24.6668C27.1667 26.5078 25.6743 28.0002 23.8333 28.0002C21.9924 28.0002 20.5 26.5078 20.5 24.6668C20.5 22.8259 21.9924 21.3335 23.8333 21.3335Z" fill="#A9B0BA"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8333 22.3335C22.5447 22.3335 21.5 23.3782 21.5 24.6668C21.5 25.9555 22.5447 27.0002 23.8333 27.0002C25.122 27.0002 26.1667 25.9555 26.1667 24.6668C26.1667 23.3782 25.122 22.3335 23.8333 22.3335ZM19.5 24.6668C19.5 22.2736 21.4401 20.3335 23.8333 20.3335C26.2266 20.3335 28.1667 22.2736 28.1667 24.6668C28.1667 27.06 26.2266 29.0002 23.8333 29.0002C21.4401 29.0002 19.5 27.06 19.5 24.6668Z" fill="#A9B0BA"/>
                </svg>
              </svg>
            </Button>
          </div>
        </div>
        {/* Your Modal component */}
        <Modal open={open} toggle={this.toggle}>
          <ModalBody>
          <img
              style={{ float: "right" }}
              src={require("../../../images/avatars/cross.png")}
              alt="close"
            />
            <h1 style={{ color: 'var(--black, #1D2226)', textAlign: 'center' }}>Forecast dialog</h1>
            <p style={{ color: 'var(--light-grey, #A9B0BA)', fontSize: '16px', textAlign: 'center' }}>Lorem Ipsum - это текст-"рыба", часто используемый в печати</p>

            <Container className="px-2 py-2 mb-4 d-flex align-items-center flex-column" style={{ background: 'linear-gradient(360deg, #ECF5FF 0%, rgba(244, 245, 247, 0.40) 100%)', borderRadius: '10px'}}>
              <img 
                src={require("../../../images/avatars/Ellipse 924.png")}
                alt="user avatar"
                className="mb-2"
              />
              <h2 style={{ color: 'var(--black, #1D2226)'}}>Наталья Шуговитова</h2>

              <Container className="py-2 px-2" style={{ background: 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)'}}> 
                <div className="d-flex justify-content-between align-items-center border-bottom">
                  <h3 className="d-inline" style={{ color: "var(--black, #1D2226)"}}>Доход за все время</h3>
                  <h1 className="d-inline" style={{ color: 'var(--pimary-blue, #1877EE)'}}>$9,768</h1>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3 className="d-inline" style={{ color: "var(--grey, #7E838E)", fontSize: '15px'}}>Доход за месяц</h3>
                  <h3 className="d-inline" style={{ color: 'var(--pimary-blue-2, #8BBEFF)', fontSize: '18px'}}>$3,468</h3>
                </div>
              </Container>
            </Container>

              <div className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100%', height: '40px', padding: '2px 4px', borderRadius: '8px', background: 'var(--primary-light-blue, #ECF5FF)' }}>
                <h3 className="mb-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
                  Link
                </h3>
                <h3 className="mb-0" style={{ color: 'var(--primary-blue, #1877EE)' }}>
                  http://some_ref_link=sadasasd
                </h3>
                <div style={{ marginLeft: 'auto' }}>
                  <button style={{ border: 'none', background: 'none' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M5.625 2.25H10.95C12.6302 2.25 13.4702 2.25 14.112 2.57698C14.6765 2.8646 15.1354 3.32354 15.423 3.88803C15.75 4.52976 15.75 5.36984 15.75 7.05V12.375M4.65 15.75H10.725C11.5651 15.75 11.9851 15.75 12.306 15.5865C12.5882 15.4427 12.8177 15.2132 12.9615 14.931C13.125 14.6101 13.125 14.1901 13.125 13.35V7.275C13.125 6.43492 13.125 6.01488 12.9615 5.69401C12.8177 5.41177 12.5882 5.1823 12.306 5.03849C11.9851 4.875 11.5651 4.875 10.725 4.875H4.65C3.80992 4.875 3.38988 4.875 3.06901 5.03849C2.78677 5.1823 2.5573 5.41177 2.41349 5.69401C2.25 6.01488 2.25 6.43492 2.25 7.275V13.35C2.25 14.1901 2.25 14.6101 2.41349 14.931C2.5573 15.2132 2.78677 15.4427 3.06901 15.5865C3.38988 15.75 3.80992 15.75 4.65 15.75Z" stroke="#1877EE" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <h3 style={{ color: 'var(--black, #1D2226)'}}>Social</h3>
              <Row>
                <Col>
                  <div className="text-align-center mb-3 py-2">
                    <img className="mr-1" src={require('../../../images/avatars/Telegraml.png')} alt="logo" />
                    <img className="mr-1" src={require('../../../images/avatars/Twitter.png')} alt="logo" />
                    <img className="mr-1" src={require('../../../images/avatars/Instagram.png')} alt="logo" />
                    <img className="mr-1" src={require('../../../images/avatars/Facebook.png')} alt="logo" />
                  </div>
                </Col>
              </Row>
          </ModalBody>
        </Modal>
      </Form>
    );
  }
}

export default NavbarDetails;
