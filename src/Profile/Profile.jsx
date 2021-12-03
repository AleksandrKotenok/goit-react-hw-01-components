
export const Profile = (p) => {
   return (
      <div className="profile">
         <div className="description">
            <img
            src={p.avatar}
            alt="User avatar"
            className="avatar"
            />
            <p className="name">{p.username}</p>
            <p className="tag">@{p.tag}</p>
            <p className="location">{p.location}</p>
         </div>
         <ul className="stats">
            <li className="statsItem">
               <span className="label">Followers</span>
               <span className="quantity">{p.stats.followers}</span>
            </li>
            <li className="statsItem">
               <span className="label">Views</span>
               <span className="quantity">{p.stats.views}</span>
            </li>
            <li className="statsItem">
               <span className="label">Likes</span>
               <span className="quantity">{p.stats.likes}</span>
            </li>
         </ul>
      </div>
   )
}


