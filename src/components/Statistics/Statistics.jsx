import PropTypes from 'prop-types'
import s from './Statistics.module.css'

export const Statistics = (data) => {
  return (
    <section className={s.statistics}>
      {!data.title && (
        <h2 className={s.title}>{data.title}</h2>)}
        <ul className={s.statList}>
        {data.stats.map(stat => (
          <li className={s.item} key={stat.id}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        )
      )}
      </ul>
    </section>
  )
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired
    })
  )
}