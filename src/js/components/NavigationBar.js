import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const className = 'navigationBar';

const NavigationBar = () =>  {
  return (
    <nav className={className}>
      <Link className={`${className}__home`} to="/">Home</Link>
      <Link className={`${className}__about`} to="/about">About</Link>
      <Link className={`${className}__experience`} to="/experience">Experience</Link>
    </nav>
  );
}

export default NavigationBar;
