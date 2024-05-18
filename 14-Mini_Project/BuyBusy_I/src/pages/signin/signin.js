import { Link } from "react-router-dom";
import styles from "./signin.module.css";
import { useForm, FormProvider } from "react-hook-form";
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
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
          <InputText name="email" placeholder="Enter Email" />
          <br />
          <InputPassword name="password" placeholder="Enter Password" />
          <br />
          <button type="submit">Signin</button>
        </form>
      </FormProvider>
      <div className={styles.signupLinkContainer}>
        <Link to="/users/signup" className={styles.signupLink}>
          Or Instead signup
        </Link>
      </div>
    </div>
  );
}

export default Signin;
