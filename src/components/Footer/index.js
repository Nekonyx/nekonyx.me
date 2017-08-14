import React from 'react';
import Icon from 'react-fontawesome';
import Tooltip from 'react-tooltip';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="links animated fadeInUp">
          <a href="https://github.com/nekonyx" target="blank">
            <Icon name="github" data-tip="GitHub" />
          </a>
          <a href="https://vk.com/nekonyx" target="blank">
            <Icon name="vk" data-tip="VK" />
          </a>
          <a href="https://twitter.com/nekonyxz" target="blank">
            <Icon name="twitter" data-tip="Twitter" />
          </a>
          <a href="https://instagram.com/nekonyx" target="blank">
            <Icon name="instagram" data-tip="Instagram" />
          </a>
          <a href="mailto:nekonyx@mail.ru" target="blank">
            <Icon name="envelope" data-tip="Email" />
          </a>
        </div>
        <Tooltip place="top" type="dark" effect="float" />
      </footer>
    );
  }
}

export default Footer;
