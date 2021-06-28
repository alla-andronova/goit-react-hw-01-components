import PropTypes from 'prop-types';
import FriendList from '../FriendList/FriendList';
import s from './FriendItem.module.css';

export default function FriendItem({ friends }) {
  return (
    <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          <span className={isOnline ? s.online : s.offline}></span>
          <img className={s.avatar} src={avatar} alt="" width="130px" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </FriendList>
  );
}

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
