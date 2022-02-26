import styles from '../../styles/Dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.titles}>
            <h1>Dashboard</h1>
            <h2>This is the best place to see the apps that use the most resources on your computer.</h2>
            </div>
        </div>
    )
}