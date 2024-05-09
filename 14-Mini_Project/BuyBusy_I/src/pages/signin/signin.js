import { Link } from "react-router-dom";
import styles from "./signin.module.css";
import { useForm } from "react-hook-form";
function Signin() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className={styles.signinContainer}>
      <h1 className={styles.title}>Signin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          {...register("name")}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          {...register("password")}
          placeholder="Enter Password"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className={styles.signupLinkContainer}>
        <Link to="/users/signup" className={styles.signupLink}>
          Or Instead signup
        </Link>
      </div>
    </div>
  );
}

export default Signin;
