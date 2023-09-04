import styles from "../page.module.css"

export default function error() {
    return (
        <main className={styles.main}>
            <div className={styles.errorPage}>
                <div className={styles.errorContent}>
                    <h1>404</h1>
                    <h4>Opps! Page not found </h4>
                    <p>Sorry, the page you're looking for doesn't exist. if you think something is broken, report a problem</p>
                    <div className={styles.btns}>
                        <a href="#">return home</a>
                        <a href="#">report problem</a>

                    </div>

                </div>
            </div>

        </main>
    )
}