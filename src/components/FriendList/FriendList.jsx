import PropTypes from 'prop-types';
import style from './FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
      <section>
        <ul className={style.friendList}>
          {friends.map(friends => (
            <li className={style.item}>
              <span
                className={friends.isOnline ? style.circle_available : style.circle_notavailable }
              ></span>
              <img
                class="avatar"
                src={friends.avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{friends.name}</p>
            </li>
          ))}
        </ul>
      </section>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:PropTypes.number,
};