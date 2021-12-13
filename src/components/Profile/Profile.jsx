import PropTypes from 'prop-types'
import s from './Profile.module.css'

export const Profile = (data) => {
   return (
      <div className={s.profile}>
         <div className={s.description}>
            <img
               src={data.avatar}
               alt="User avatar"
               className={s.avatar}
            />
            <p className={s.name}>{data.username}</p>
            <p className={s.tag}>@{data.tag}</p>
            <p className={s.location}>{data.location}</p>
         </div>
         <ul className={s.stats}>
            <li className={s.statsItem}>
               <span className={s.label}>Followers</span>
               <span className={s.quantity}>{data.stats.followers}</span>
            </li>
            <li className={s.statsItem}>
               <span className={s.label}>Views</span>
               <span className={s.quantity}>{data.stats.views}</span>
            </li>
            <li className={s.statsItem}>
               <span className={s.label}>Likes</span>
               <span className={s.quantity}>{data.stats.likes}</span>
            </li>
         </ul>
      </div>
   )
}
Profile.defaultProps = {
   avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png"
}
Profile.propTypes = {
   username: PropTypes.string,
   tag: PropTypes.string,
   location: PropTypes.string,
   avatar: PropTypes.string,
   stats: PropTypes.objectOf(PropTypes.number),
}
