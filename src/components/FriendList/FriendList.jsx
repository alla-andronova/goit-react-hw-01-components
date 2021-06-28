import s from './FriendList.module.css';

export default function FriendList({ children }) {
  return <ul className={s.list}>{children}</ul>;
}
