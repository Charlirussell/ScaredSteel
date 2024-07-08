import React from 'react';
import './Layout.scss';

const Layout = ({ children, backgroundImage }) => {
  return (
    <div className="layout" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;