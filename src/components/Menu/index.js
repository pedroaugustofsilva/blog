import React from 'react'
import { Link } from 'gatsby'

import * as styles from './index.module.css'

import i18n from '../../i18n'
import LanguageSwitcher from '../LanguageSwitcher'

const Menu = ({ lang, translations }) => {
  const locale = i18n[lang]

  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <div>
          <Link style={{fontWeight: 'bold', color: '#fff', textTransform: 'none', fontSize: '16px' }}className={styles.menu_link} to={'/'}> Pedro Augusto </Link>
          <Link className={styles.menu_link} to={'/'}> {locale['ia']} </Link>
          <Link className={styles.menu_link} to={'/'}> {locale['datascience']} </Link>
          <Link className={styles.menu_link} to={'/'}> {locale['ror']} </Link>
          <Link className={styles.menu_link} to={'/'}> {locale['reading_list']} </Link>
          <Link className={styles.menu_link} to={'/'}> {locale['quotes']} </Link>
        </div>

        <div>
          <div><LanguageSwitcher className={styles.menu_link} language={lang} translations={translations} /></div>
        </div>
      </div>
    </nav>
  )
}

export default Menu

