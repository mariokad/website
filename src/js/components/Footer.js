import React from 'react';

const rootClassName = 'footer';

const Footer = () =>  {
  return (
    <footer className={rootClassName}>
      <nav className={`${rootClassName}__navigation`}>
        <a className={`${rootClassName}__email`} href="mailto:marissaokada@gmail.com">Email</a>
        <a className={`${rootClassName}__linkedin`} href="https://www.linkedin.com/in/marissaokada/">LinkedIn</a>
        <a className={`${rootClassName}__github`} href="https://github.com/mariokad">GitHub</a>
      </nav>
    </footer>

  );
}

export default Footer;
