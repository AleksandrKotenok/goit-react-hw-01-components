import { FriendItem } from './FriendItem/FriendItem.jsx'
import PropTypes from 'prop-types'
import s from './FriendList.module.css'

export const FriendList = ({friends}) => {
   return (
      <ul className={s.friendList}>
         {friends.map(friend => (
            <FriendItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
            />
         ))}
      </ul>
   )
}
FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.shape({
         avatar: PropTypes.string,
         name: PropTypes.string,
         isOnline: PropTypes.bool,
         id: PropTypes.number,
      })
   )
}
