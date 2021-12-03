import { friendItem } from './FriendItem.jsx'
export const FriendList = (data) => {
   
   return (
      <ul className="friend-list">
         {friendItem(data)}
    </ul>
   )
 }