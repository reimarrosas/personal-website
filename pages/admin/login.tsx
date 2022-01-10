import { NextPage } from "next";
import { FormEvent, useState } from "react";

import Header from "../../components/Header/Header";
import styles from "../../styles/Admin/Login.module.css";

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.form}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setEmail(evt.currentTarget.value)
              }
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setPassword(evt.currentTarget.value)
              }
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input type="submit" value="Login" />
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
