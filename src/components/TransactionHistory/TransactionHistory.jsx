import styles from './TransactionHistory.module.css'

export const TransactionHistory = (data) => {
   console.log(data);
   return (
      <table className={styles.TransactionHistory}>
         <thead className={styles.TableTitle}>
            <tr>
               <th className={styles.TableRow}>Type</th>
               <th className={styles.TableRow}>Amount</th>
               <th className={styles.TableRow}>Currency</th>
            </tr>
         </thead>
         <tbody className={styles.TableTitle}>
            {data.items.map(p => (
               <tr key={p.id}>
                  <td className={styles.TableRow}>{p.type}</td>
                  <td className={styles.TableRow}>{p.amount}</td>
                  <td className={styles.TableRow}>{p.currency}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}