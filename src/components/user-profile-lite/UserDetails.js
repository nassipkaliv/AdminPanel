import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
  CardBody,
  CardFooter,
} from "shards-react";

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-3 pt-3">

    <CardBody className="text-left d-flex flex-row align-items-center position-relative pt-0 border-bottom">
      
     
      
      {/* User Image */}
      <div className="mb-3 mx-2 mr-4">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>


      {/* User Details */}
      <div>
      <div className="flex-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="mb-0" style={{ fontSize: '26px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>{userDetails.name}</h1>
          {/* Settiings Button */}
        <div className="xs-1 mb-0" style={{ display: 'flex', alignItems: 'center' }}>
          <button className="text-right" style={{ border: 'none', background: 'none', marginLeft: '70px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        {/* SVG Path */}
        <path d="M11.4415 1.99988H12.5585C13.4193 1.99988 14.1836 2.55074 14.4558 3.36742L14.88 4.63987C14.9573 4.87181 15.1169 5.06739 15.3286 5.18964L16.2334 5.71208C16.4451 5.83435 16.6943 5.8748 16.9339 5.82578L18.2479 5.55689C19.0913 5.38431 19.9505 5.77076 20.3809 6.51629L20.9394 7.48361C21.3698 8.22913 21.2749 9.16645 20.7037 9.81055L19.8139 10.8141C19.6516 10.997 19.5621 11.2331 19.5621 11.4776V12.5223C19.5621 12.7668 19.6517 13.0028 19.8139 13.1858L20.7038 14.1893C21.275 14.8334 21.3699 15.7707 20.9395 16.5162L20.381 17.4836C19.9506 18.2291 19.0914 18.6155 18.248 18.443L16.934 18.1741C16.6944 18.125 16.4452 18.1655 16.2335 18.2877L15.3286 18.8101C15.1169 18.9324 14.9573 19.128 14.88 19.3599L14.4558 20.6324C14.1836 21.449 13.4193 21.9999 12.5585 21.9999H11.4415C10.5806 21.9999 9.81635 21.449 9.54412 20.6324L9.11999 19.36C9.04267 19.128 8.88304 18.9324 8.67128 18.8101L7.76643 18.2878C7.55469 18.1655 7.30551 18.1251 7.06598 18.1741L5.75195 18.443C4.90856 18.6156 4.04937 18.2292 3.61893 17.4836L3.06045 16.5163C2.63002 15.7708 2.72494 14.8335 3.2961 14.1894L4.18598 13.1858C4.3482 13.0029 4.43777 12.7669 4.43778 12.5224L4.43779 11.4775C4.43779 11.233 4.34822 10.997 4.18599 10.814L3.29612 9.81048C2.72497 9.16638 2.63005 8.22907 3.06048 7.48354L3.61896 6.51622C4.04939 5.77069 4.90859 5.38424 5.75197 5.55683L7.06598 5.82572C7.30552 5.87474 7.55472 5.8343 7.76646 5.71205L8.6713 5.18964C8.88305 5.06739 9.04267 4.8718 9.11999 4.63984L9.54412 3.36742C9.81635 2.55074 10.5806 1.99988 11.4415 1.99988ZM12 15.4999C13.933 15.4999 15.5 13.9329 15.5 11.9999C15.5 10.0669 13.933 8.49988 12 8.49988C10.067 8.49988 8.5 10.0669 8.5 11.9999C8.5 13.9329 10.067 15.4999 12 15.4999Z" fill="#A9B0BA"/>

        </svg>
      </button>
      </div>
    </div>
        <h3 className="mb-2 mt-0" style={{ fontSize: '13px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>{userDetails.email}</h3>

        <div className="mb-1" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100%', padding: '4px 4px', borderRadius: '8px', background: 'var(--pimary-light-blue, #ECF5FF)' }}>
          <h3 className="mb-0" style={{ fontSize: '13px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Ref link
          </h3>
          <h3 className="mb-0" style={{ fontSize: '13px', fontWeight: 600, lineHeight: '140%', color: 'var(--pimary-blue, #1877EE)' }}>
            http://some_ref...
          </h3>
          <button style={{ border: 'none', background: 'none' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5.625 2.25H10.95C12.6302 2.25 13.4702 2.25 14.112 2.57698C14.6765 2.8646 15.1354 3.32354 15.423 3.88803C15.75 4.52976 15.75 5.36984 15.75 7.05V12.375M4.65 15.75H10.725C11.5651 15.75 11.9851 15.75 12.306 15.5865C12.5882 15.4427 12.8177 15.2132 12.9615 14.931C13.125 14.6101 13.125 14.1901 13.125 13.35V7.275C13.125 6.43492 13.125 6.01488 12.9615 5.69401C12.8177 5.41177 12.5882 5.1823 12.306 5.03849C11.9851 4.875 11.5651 4.875 10.725 4.875H4.65C3.80992 4.875 3.38988 4.875 3.06901 5.03849C2.78677 5.1823 2.5573 5.41177 2.41349 5.69401C2.25 6.01488 2.25 6.43492 2.25 7.275V13.35C2.25 14.1901 2.25 14.6101 2.41349 14.931C2.5573 15.2132 2.78677 15.4427 3.06901 15.5865C3.38988 15.75 3.80992 15.75 4.65 15.75Z" stroke="#1877EE" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
        </div>
        <div className="mb-1" style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '100%', padding: '4px 4px', borderRadius: '8px' }}>
          <h3 className="mb-0" style={{ fontSize: '13px', fontWeight: 600, lineHeight: '140%', color: 'var(--light-grey, #A9B0BA)' }}>
            Wallet
          </h3>
          <h3 className="mb-0" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '140%', color: 'var(--black, #1D2226)' }}>
            0x0000000000
          </h3>
        </div>
      </div>

    </CardBody>
    
    <CardBody className="text-left d-flex flex-row align-items-center position-relative pt-0 border-bottom">
      <div className="py-5 mb-4">
        <h3 className="mb-1 " style={{ fontSize: '17px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.17px', color: 'var(--black, #1D2226)' }}>
          Закрытые квалификации
        </h3>
        <div className="flex-row text-align-center ">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 62 63" fill="none" style={{ marginRight: '5px'}}>
          <circle cx="31" cy="31.5" r="31" fill="url(#paint0_linear_12_595)"/>
          <defs>
            <linearGradient id="paint0_linear_12_595" x1="20" y1="4.5" x2="56" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A996FE"/>
              <stop offset="1" stop-color="#C481F8"/>
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 62 63" fill="none" style={{ marginRight: '5px'}}>
          <circle cx="31" cy="31.5" r="31" fill="url(#paint0_linear_12_595)"/>
          <defs>
            <linearGradient id="paint0_linear_12_595" x1="20" y1="4.5" x2="56" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A996FE"/>
              <stop offset="1" stop-color="#C481F8"/>
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 62 63" fill="none" style={{ marginRight: '5px'}}>
          <circle cx="31" cy="31.5" r="31" fill="url(#paint0_linear_12_595)"/>
          <defs>
            <linearGradient id="paint0_linear_12_595" x1="20" y1="4.5" x2="56" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A996FE"/>
              <stop offset="1" stop-color="#C481F8"/>
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 62 63" fill="none" style={{ marginRight: '5px'}}>
          <circle cx="31" cy="31.5" r="31" fill="url(#paint0_linear_12_595)"/>
          <defs>
            <linearGradient id="paint0_linear_12_595" x1="20" y1="4.5" x2="56" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A996FE"/>
              <stop offset="1" stop-color="#C481F8"/>
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 62 63" fill="none" style={{ marginRight: '5px'}}>
          <circle cx="31" cy="31.5" r="31" fill="url(#paint0_linear_12_595)"/>
          <defs>
            <linearGradient id="paint0_linear_12_595" x1="20" y1="4.5" x2="56" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A996FE"/>
              <stop offset="1" stop-color="#C481F8"/>
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 62 63" fill="none" style={{ marginRight: '5px'}}>
          <circle cx="31" cy="31.5" r="31" fill="url(#paint0_linear_12_595)"/>
          <defs>
            <linearGradient id="paint0_linear_12_595" x1="20" y1="4.5" x2="56" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A996FE"/>
              <stop offset="1" stop-color="#C481F8"/>
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 62 63" fill="none" style={{ marginRight: '5px'}}>
          <circle cx="31" cy="31.5" r="31" fill="url(#paint0_linear_12_595)"/>
          <defs>
            <linearGradient id="paint0_linear_12_595" x1="20" y1="4.5" x2="56" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A996FE"/>
              <stop offset="1" stop-color="#C481F8"/>
            </linearGradient>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 62 63" fill="none" style={{ marginRight: '5px'}}>
          <circle cx="31" cy="31.5" r="31" fill="url(#paint0_linear_12_595)"/>
          <defs>
            <linearGradient id="paint0_linear_12_595" x1="20" y1="4.5" x2="56" y2="76" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A996FE"/>
              <stop offset="1" stop-color="#C481F8"/>
            </linearGradient>
          </defs>
        </svg>
        
        </div>
      </div>
    </CardBody>
    
    <CardFooter className="text-center border-none">
      <h3 className="mb-0 " style={{ fontSize: '13px', fontWeight: 600, lineHeight: '140%', letterSpacing: '0.52px', color: 'var(--grey, #7E838E)' }}>
        ДАТА РЕГИСТРАЦИИ 19.08.2023
      </h3>
    </CardFooter>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Наталья Шугитова",
    avatar: require("./../../images/avatars/Ellipse 924.png"),
    email: "shugovitova96@gmail.com",
  }
};

export default UserDetails;