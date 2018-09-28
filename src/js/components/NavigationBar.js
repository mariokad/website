import React from 'react';
import { Link } from 'react-router-dom';

const rootClassName = 'navigationBar';

const NavigationBar = () =>  {
  return (
    <nav className={rootClassName}>
      <Link className={`${rootClassName}__home`} to="/">Home</Link>
      <Link className={`${rootClassName}__about`} to="/about">About</Link>
      <Link className={`${rootClassName}__experience`} to="/experience">Experience</Link>
    </nav>
  );
}

export default NavigationBar;
