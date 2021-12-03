
import { Profile } from '../Profile/Profile.jsx'
import { Statistics } from '../Statistics/Statistics.jsx'
import { FriendList } from '../Friends/FriendList.jsx'

import user from '../data/user.json'
import data from '../data/statistics.json'
import friends from '../data/friends.json'
import styles from './App.module.css'
function App() {
  return (
    <div className={styles.Container}>
      <section className={styles.FirstTask}>
      <h2 className={styles.Task}>TASK #1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </section>
      <h2 className={styles.Task}>TASK #2</h2>
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <Statistics stats={data} />
      <section className={styles.ThirdTask}>
      <h2 className={styles.Task}>TASK #3</h2>
        <FriendList friends={friends} />
      </section>
    </div>
  )
}

export default App;
