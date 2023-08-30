import styles from"../page.module.css"

export default function login(){
    return(
        <main className={styles.main}>
        <div class="login-form"/>
            <centre><h1>Login form</h1></centre>
            <form action="#" method="post"/>
                <p>Username</p>
                <input type="text" name="user" placeholder="Username"></input>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Password"></input>
                        <button type="Submit">Login</button>
                         <form/>
        <div/>

        </main>
    
    )
}