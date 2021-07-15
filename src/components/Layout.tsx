import React from 'react';

const Layout = ({ children }: any) => {
  return (
    <div>
      <h1 style={{ backgroundColor: '#333', height: '10rem' }}>Layout</h1>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
