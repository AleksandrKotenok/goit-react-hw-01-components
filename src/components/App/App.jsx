import user from '../../data/user.json'
import data from '../../data/statistics.json'
import friends from '../../data/friends.json'
import transactions from '../../data/transactions.json'

import { Profile } from '../Profile/Profile.jsx'
import { Statistics } from '../Statistics/Statistics.jsx'
import { FriendList } from '../FriendList/FriendList.jsx'
import { TransactionHistory } from '../TransactionHistory/TransactionHistory.jsx'
import s from './App.module.css'

function App() {
  return (
    <div className={s.container}>
      <section className={s.firstTask}>
      <h2 className={s.task}>TASK #1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </section>
      <h2 className={s.task}>TASK #2</h2>
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <Statistics stats={data} />
      <section className={s.thirdTask}>
      <h2 className={s.task}>TASK #3</h2>
        <FriendList friends={friends}/>
      </section>
      <section className={s.thirdTask}>
        <h2 className={s.task}>TASK #4</h2>
        <TransactionHistory items={transactions}/>
    </section>
    </div>
  )
}

export default App;
