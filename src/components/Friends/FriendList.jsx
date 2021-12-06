import PropTypes from 'prop-types';
import styles from './FriendList.module.css'
import { FriendItem } from './FriendItem.jsx'
export const FriendList = (data) => {
   
   return (
      <ul className={styles.FriendList}>
         {FriendItem(data)}
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
