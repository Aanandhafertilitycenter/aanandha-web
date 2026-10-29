import React from 'react';

const GoogleReviewButton = () => {
  const reviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJQ3UCEQDxqzsR1qtAMduB_v4';

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#329290',
    // backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    padding: '12px 20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    fontSize: '16px',
    cursor: 'pointer',
    zIndex: 1000,
  };

  return (
    <a href={reviewUrl} target="_blank" rel="noopener noreferrer">
      <button style={buttonStyle}>
        {/* Leave a  */}
        Google Review</button>
    </a>
  );
};

export default GoogleReviewButton;
