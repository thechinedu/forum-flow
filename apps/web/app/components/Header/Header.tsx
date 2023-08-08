import logo from 'public/logo.svg';

import styles from './Header.module.css';

import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logoContainer}>
          <Image alt="app logo" src={logo} width={24} height={24} />
          <span>ForumFlow</span>
        </Link>

        <input type="search" placeholder="Search Forum Flow" />

        <Link href="#" className={styles.cta}>
          Log in
        </Link>
      </nav>
    </header>
  );
};
