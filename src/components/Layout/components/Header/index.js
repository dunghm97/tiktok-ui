import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        <div className={cx('searchBox')}>
          <input type="text" placeholder="Search accounts and videos" spellCheck="false" />
          <button className={cx('clear-btn')}>
            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
          </button>
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
