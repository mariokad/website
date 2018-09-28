import React from 'react';

const rootClassName = 'about';

const About = () =>  {
  return (
    <div className={rootClassName}>
      <p className={`${rootClassName}__description`}>
        I'm a software engineer based in the San Francisco Bay Area.
      </p>
    </div>
  );
}

export default About;
