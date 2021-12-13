import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

export const TransactionHistory = (data) => {
   return (
      <table className={s.transactionHistory}>
         <thead className={s.tableTitle}>
            <tr>
               <th className={s.tableRow}>Type</th>
               <th className={s.tableRow}>Amount</th>
               <th className={s.tableRow}>Currency</th>
            </tr>
         </thead>
         <tbody className={s.tableTitle}>
            {data.items.map(item => (
               <tr key={item.id}>
                  <td className={s.tableRow}>{item.type}</td>
                  <td className={s.tableRow}>{item.amount}</td>
                  <td className={s.tableRow}>{item.currency}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}
TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
      PropTypes.shape({
         currency: PropTypes.string,
         type: PropTypes.string,
         amount: PropTypes.string,
         id: PropTypes.string,
      })
   )
}