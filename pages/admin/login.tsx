import { NextPage } from "next";
import { useRouter } from "next/router";
import {
  FormEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import Footer from "../../components/Footer/Footer";

import Header from "../../components/Header/Header";
import { LoginContext } from "../../context/LoginProvider";
import styles from "../../styles/Admin/Login.module.css";

const Login: NextPage = () => {
  const { state: isLoggedIn, setState: setIsLoggedIn } =
    useContext(LoginContext);
  const router = useRouter();

  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/admin/add-projects");
    }
  }, [isLoggedIn]);

  const handleSubmit = async (evt: SyntheticEvent) => {
    evt.preventDefault();

    const res = await fetch("/api/login", {
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    if (res.ok) {
      setIsValid(true);
      setIsLoggedIn(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Login</h1>
          {!isValid && (
            <div className={styles.valid}>
              <span>Username or Password Invalid!</span>
            </div>
          )}
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
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
      <Footer />
    </>
  );
};

export default Login;
