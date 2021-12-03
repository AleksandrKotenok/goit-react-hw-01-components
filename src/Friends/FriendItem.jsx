export const friendItem = ( fr ) => {
   console.log(fr);
   return (
   <div>
      {fr.friends.map(p => (
         //console.log(p.id)
         <li className="friendItem" key={p.id} >
            {p.isOnline === true ? (<span className="statusOn">Online</span>) : (<span className="statusOff">Offline</span>)}
            <img className="avatar" src={p.avatar} alt="User avatar" width="48" />
            <p className="friendsName">{p.name}</p>
         </li>
        ))}
   </div>
   )
 }