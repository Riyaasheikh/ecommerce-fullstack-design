import React from 'react';
import SectionWrapper from '../../global/SectionWrapper';

const BreadCrumb = () => {
  // Custom styles to remove the blue color and handle the separator
  const breadcrumbStyle = {
    "--bs-breadcrumb-divider": "'>'",
    backgroundColor: 'transparent',
    padding: '10px 0',
    margin: 0
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#8B96A5', // Professional neutral gray
    fontSize: '16px'
  };

  const activeStyle = {
    color: '#8B96A5', // Darker color for the current page
  };

  return (
    <SectionWrapper>
      <nav aria-label="breadcrumb" style={breadcrumbStyle}>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="/" style={linkStyle}>Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/cloth" style={linkStyle}>Clothing</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/mens" style={linkStyle}>Mens Wear</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page" style={activeStyle}>
            Summer Clothing
          </li>
        </ol>
      </nav>
    </SectionWrapper>
  );
};

export default BreadCrumb;