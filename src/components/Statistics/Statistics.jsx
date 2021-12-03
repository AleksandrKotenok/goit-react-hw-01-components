import styles from './Statistics.module.css'
export const Statistics = (data) => {
  console.log(data);
  return (
    <section className={styles.Statistics}>
      {data.title !== undefined && (
        <h2 className={styles.Title}>{data.title}</h2>)}
      <ul className={styles.StatList}>
        {data.stats.map(p => (
          <li className={styles.Item} key={p.id}>
            <span className={styles.Label}>{p.label}</span>
            <span className={styles.Percentage}>{p.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}