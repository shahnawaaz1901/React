import { Link } from "react-router-dom";
import styles from "./signup.module.css";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.title}>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          {...register("name")}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          {...register("email")}
        />
        <br />
        <input
          type="password"
          name="password"
          {...register("password")}
          placeholder="Enter Password"
        />
        <br />
        <button type="submit">Create Account</button>
      </form>
      <div className={styles.signupLinkContainer}>
        <Link to="/users/signin" className={styles.signupLink}>
          Already User.?
        </Link>
      </div>
    </div>
  );
}

export default Signup;
