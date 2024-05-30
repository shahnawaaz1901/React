import { Link } from "react-router-dom";
import styles from "./signin.module.css";
import { useForm } from "react-hook-form";
import InputText from "../../components/inputFields/Text";
import InputPassword from "../../components/inputFields/Password";

function Signin() {
  const methods = useForm();
  function onSubmit(data) {
    methods.reset();
    console.log(data);
  }

  return (
    <div className={styles.signinContainer}>
      <h1 className={styles.title}>Signin</h1>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <InputText
          name="email"
          placeholder="Enter Email"
          formReg={{
            ...methods.register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-z]{2,5}$/,
                message: "Email is Invalid",
              },
            }),
          }}
          errors={methods.formState.errors}
        />
        <br />
        <InputPassword
          name="password"
          placeholder="Enter Password"
          formReg={{
            ...methods.register("password", {
              required: { value: true, message: "Password is Required" },
              minLength: {
                value: 8,
                message: "Password must be atleast 8 Characters",
              },
              maxLength: {
                value: 15,
                message: "Password must be within 15 Characters",
              },
            }),
          }}
          errors={methods.formState.errors}
        />
        <br />
        <button type="submit">Signin</button>
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
