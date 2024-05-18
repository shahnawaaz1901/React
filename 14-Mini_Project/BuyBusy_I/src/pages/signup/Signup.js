import { Link } from "react-router-dom";
import styles from "./signup.module.css";
import { useForm, FormProvider } from "react-hook-form";
import InputText from "../../components/inputFields/Text";
import InputPassword from "../../components/inputFields/Password";

function Signup() {
  const methods = useForm();
  function onSubmit(data) {
    methods.reset();
    console.log(data);
  }
  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.title}>Signup</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
          <InputText name="name" placeholder="Enter Name" />
          <br />
          <InputText name="email" placeholder="Enter Email" />
          <br />
          <InputPassword name="password" placeholder="Enter Password" />
          <InputPassword
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <button type="submit">Create Account</button>
        </form>
      </FormProvider>
      <div className={styles.signupLinkContainer}>
        <Link to="/users/signin" className={styles.signupLink}>
          Already User.?
        </Link>
      </div>
    </div>
  );
}

export default Signup;
