import React from 'react';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';

export class Footer extends React.Component {
    render() {
    return (
      <div className='row relative footer'>
        <div>
          <div className='iconBox'>
            <IconsFooter />
          </div>
        </div>
    </div>);
    }
  }
        class IconsFooter extends React.Component {
          render() {
              return (
                <div>
                  <a href='https://www.facebook.com' target='_blank' className='iconSocial'><FaFacebookOfficial /></a>
                  <a href='https://www.instagram.com' target='_blank' className='iconSocial'><FaInstagram /></a>
                  <p className='textFooter'>Created by Daria Ambroziak-Napora 2017   © Site code protected by law :-) </p>
                </div>)
          }
        }

export default Footer;
