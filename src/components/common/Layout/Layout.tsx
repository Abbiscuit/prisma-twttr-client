import React from 'react';
import type { ReactNode } from 'react';

import s from './Layout.module.scss';

interface LayoutProps {
  readonly children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={s.container}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
