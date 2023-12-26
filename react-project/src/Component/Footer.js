import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-secondary text-white'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h2 className='text-uppercase'>RenDes</h2>

            <p>
              Explore the possibilities of transforming your space with our expert renovation and design services. From concept to completion, we bring your vision to life, creating functional and aesthetic spaces tailored to your needs.
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Quick Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a id='Designs' className='text-white'>
                  Designs
                </a>
              </li>
              <li>
              <a href=""id='Gallery' className='text-white'>
                Gallery
              </a>
              </li>
              <li>
                <a id='Testimonials' className='text-white'>
                  Testimonials
                </a>
              </li>
              <li>
                <a id='Contact' className='text-white'>
                  Contact Us
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Connect With Us</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-white'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#1F4959' }}>
        © {new Date().getFullYear()} RenDes
        <a className='text-white' href=''>
     
        </a>
      </div>
    </MDBFooter>
  );
}
