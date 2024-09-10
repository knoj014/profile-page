import './MyButton.css';

import type React from 'react';

interface MyButtonProps {
    url: string;
    logoSrc: string;
    siteName: string;
}

const MyButton: React.FC<MyButtonProps> = ({url, logoSrc, siteName}) => {
    const handleRedirect = () => {
        window.open(url, '_blank');
      };
    
      return (
        <button onClick={handleRedirect} className="button">
          <img 
            src = {logoSrc} // 로고 이미지 URL
            alt={'${siteName}-logo'}
            className="logo"
          />
          <span className="text"> {siteName} </span>
        </button>
      );
}

export default MyButton;