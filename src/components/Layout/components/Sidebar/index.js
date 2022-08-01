import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  return <aside className={cx('wrapper')}>Sidebar content</aside>;
}

export default Sidebar;
