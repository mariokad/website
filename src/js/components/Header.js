import React from 'react';

const rootClassName = 'header';

const Header = () =>  {
  return (
    <header className={rootClassName}>
      <h1 className={`${rootClassName}__welcome`}>
        Welcome!
      </h1>
      <h2 className={`${rootClassName}__name`}>
        I'm Marissa Okada 👩🏻‍💻
      </h2>
    </header>
  );
}

export default Header;
