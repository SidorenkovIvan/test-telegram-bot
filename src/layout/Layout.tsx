import React, { FC, ReactNode } from 'react';

import styles from './Layout.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <section className={styles.section}>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
