import React, { ReactNode } from 'react';
import cx from 'clsx';

interface MainProps {
  className?: string;
  children: ReactNode; // Add children property
}

const Main: React.FC<MainProps> = ({ children, className, ...props }) => {
  return (
    <div
      id="main-content"
      className={cx(
        "flex flex-col flex-1 h-full w-full max-w-5xl mx-auto pt-0 px-2 md:pt-11 md:px-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Main;
