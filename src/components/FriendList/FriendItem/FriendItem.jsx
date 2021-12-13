import PropTypes from 'prop-types'
import s from './FriendItem.module.css'

export const FriendItem = ({ id, name, avatar, isOnline }) => {
   return (
      <li key={id} className={s.friendItem}>
         <span className={isOnline ? s.statusOn : s.statusOff}></span>
         <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
         <p className={s.friendsName}>{name}</p>
      </li>
   )
}
FriendItem.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired,
}