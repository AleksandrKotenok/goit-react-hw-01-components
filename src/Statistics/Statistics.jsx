export const Statistics = ( data ) => {
  console.log(data);
  return (
    <section className="statistics">
      {data.title !== undefined && (
        <h2 className="title">{data.title}</h2>)}
      <ul className="stat-list">
        {data.stats.map(p => (
          <li className="item" key={p.id}>
            <span className="label">{p.label}</span>
            <span className="percentage">{p.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}