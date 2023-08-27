import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

export default () => (
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
        <div className="px-3"href="#">
          <p style={{ color: 'var(--black, #1D2226)', fontSize: '20px', letterSpacing: '-0.6px', fontWeight: '500'}}>$64,768<span style={{ color: 'var(--grey, #7E838E)'}}>.64</span></p>
        </div>
      </div>
      <div  className="mt-3" >
        <div className="px-2">
          <button style={{ border: 'none', background: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 33 32" fill="none">
              <path d="M23.8333 10.6667C25.6743 10.6667 27.1667 9.17427 27.1667 7.33333C27.1667 5.49239 25.6743 4 23.8333 4C21.9924 4 20.5 5.49239 20.5 7.33333C20.5 9.17427 21.9924 10.6667 23.8333 10.6667Z" fill="#A9B0BA"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 7.33333C19.5 4.9401 21.4401 3 23.8333 3C26.2265 3 28.1667 4.9401 28.1667 7.33333C28.1667 9.72655 26.2266 11.6667 23.8333 11.6667C21.4401 11.6667 19.5 9.72655 19.5 7.33333ZM23.8333 5C22.5447 5 21.5 6.04467 21.5 7.33333C21.5 8.62198 22.5447 9.66667 23.8333 9.66667C25.122 9.66667 26.1667 8.62198 26.1667 7.33333C26.1667 6.04467 25.122 5 23.8333 5Z" fill="#A9B0BA"/>
              <path d="M9.16683 19.3333C11.0078 19.3333 12.5002 17.8409 12.5002 16C12.5002 14.159 11.0078 12.6666 9.16683 12.6666C7.3259 12.6666 5.8335 14.159 5.8335 16C5.8335 17.8409 7.3259 19.3333 9.16683 19.3333Z" fill="#A9B0BA"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.8335 16C4.8335 13.6067 6.77361 11.6666 9.16683 11.6666C11.56 11.6666 13.5002 13.6067 13.5002 16C13.5002 18.3932 11.56 20.3333 9.16683 20.3333C6.77361 20.3333 4.8335 18.3932 4.8335 16ZM9.16683 13.6666C7.87818 13.6666 6.8335 14.7113 6.8335 16C6.8335 17.2886 7.87818 18.3333 9.16683 18.3333C10.4555 18.3333 11.5002 17.2886 11.5002 16C11.5002 14.7113 10.4555 13.6666 9.16683 13.6666Z" fill="#A9B0BA"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3552 8.53141C21.6414 9.00376 21.4905 9.61868 21.0181 9.90486L12.5774 15.0188C12.1051 15.305 11.4901 15.1541 11.204 14.6817C10.9178 14.2093 11.0687 13.5944 11.5411 13.3082L19.9818 8.19431C20.4541 7.90813 21.0691 8.05905 21.3552 8.53141Z" fill="#A9B0BA"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1983 17.2005C11.4793 16.7251 12.0925 16.5674 12.568 16.8483L21.4616 22.1037C21.937 22.3846 22.0947 22.9979 21.8138 23.4733C21.5328 23.9488 20.9196 24.1065 20.4441 23.8255L11.5505 18.5702C11.075 18.2892 10.9173 17.676 11.1983 17.2005Z" fill="#A9B0BA"/>
              <path d="M23.8333 21.3334C25.6743 21.3334 27.1667 22.8258 27.1667 24.6667C27.1667 26.5076 25.6743 28 23.8333 28C21.9924 28 20.5 26.5076 20.5 24.6667C20.5 22.8258 21.9924 21.3334 23.8333 21.3334Z" fill="#A9B0BA"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8333 22.3334C22.5447 22.3334 21.5 23.3781 21.5 24.6667C21.5 25.9554 22.5447 27 23.8333 27C25.122 27 26.1667 25.9554 26.1667 24.6667C26.1667 23.3781 25.122 22.3334 23.8333 22.3334ZM19.5 24.6667C19.5 22.2735 21.4401 20.3334 23.8333 20.3334C26.2266 20.3334 28.1667 22.2735 28.1667 24.6667C28.1667 27.0599 26.2266 29 23.8333 29C21.4401 29 19.5 27.0599 19.5 24.6667Z" fill="#A9B0BA"/>
            </svg>
          </button>
        </div>
      </div>
  </Form>
);
