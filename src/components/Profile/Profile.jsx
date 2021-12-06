import PropTypes from 'prop-types';
import styles from './Profile.module.css'
export const Profile = (p) => {
   return (
      <div className={styles.Profile}>
         <div className={styles.Description}>
            <img
               src={p.avatar}
               alt="User avatar"
               className={styles.Avatar}
            />
            <p className={styles.Name}>{p.username}</p>
            <p className={styles.Tag}>@{p.tag}</p>
            <p className={styles.Location}>{p.location}</p>
         </div>
         <ul className={styles.Stats}>
            <li className={styles.StatsItem}>
               <span className={styles.Label}>Followers</span>
               <span className={styles.Quantity}>{p.stats.followers}</span>
            </li>
            <li className={styles.StatsItem}>
               <span className={styles.Label}>Views</span>
               <span className={styles.Quantity}>{p.stats.views}</span>
            </li>
            <li className={styles.StatsItem}>
               <span className={styles.Label}>Likes</span>
               <span className={styles.Quantity}>{p.stats.likes}</span>
            </li>
         </ul>
      </div>
   )
};
Profile.defaultProps = {
   avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png"
}
Profile.propTypes = {
   
   username: PropTypes.string,
   tag: PropTypes.string,
   location: PropTypes.string,
   avatar: PropTypes.string,
   stats: PropTypes.objectOf(PropTypes.number),
};
