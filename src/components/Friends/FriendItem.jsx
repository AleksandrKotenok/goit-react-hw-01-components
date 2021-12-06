import styles from './FriendItem.module.css'

export const FriendItem = (data) => {
   return (
   <div>
         {data.friends.map(p => (
            <li className={styles.FriendItem} key={p.id} >
               {p.isOnline === true ? (<span className={styles.StatusOn}>Online</span>) : (<span className={styles.StatusOff}>Offline</span>)}
               <img className={styles.Avatar} src={p.avatar} alt="User avatar" width="48" />
               <p className={styles.FriendsName}>{p.name}</p>
            </li>
         ))}
   </div>
   )
}
