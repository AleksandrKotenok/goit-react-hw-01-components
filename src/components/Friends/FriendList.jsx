import styles from './FriendList.module.css'
import { friendItem } from './FriendItem.jsx'
export const FriendList = (data) => {
   
   return (
      <ul className={styles.FriendList}>
         {friendItem(data)}
    </ul>
   )
 }