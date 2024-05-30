import { Link } from "react-router-dom";
import styles from "./signup.module.css";
import { useForm } from "react-hook-form";
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
      {/* <FormProvider {...methods}> */}
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <InputText
          name="name"
          placeholder="Enter Name"
          formReg={{
            ...methods.register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
              minLength: {
                value: 5,
                message: "Name must be greater then 5 Characters",
              },
              maxLength: {
                value: 25,
                message: "Name should be less then 25 Characters",
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: "Name Only Contains Alphabets",
              },
            }),
          }}
          errors={methods.formState.errors}
        />
        <br />
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
              validate: {
                notAdmin: (value) =>
                  value !== "admin@buybusy.in" || "Try to Use Different Email",
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
              validate: (value) =>
                /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z\d])/.test(value) ||
                "Password must be Combination of Characters",
            }),
          }}
          errors={methods.formState.errors}
        />
        <InputPassword
          name="confirmPassword"
          placeholder="Confirm Password"
          formReg={{
            ...methods.register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is Required",
              },
              validate: (value) => {
                if (value !== methods.watch("password")) {
                  return "Password not matched";
                }
                return true;
              },
            }),
          }}
          errors={methods.formState.errors}
        />

        <button type="submit">Create Account</button>
      </form>
      {/* </FormProvider> */}
      <div className={styles.signinLinkContainer}>
        <Link to="/users/signin" className={styles.signinLink}>
          Already User.?
        </Link>
      </div>
    </div>
  );
}

export default Signup;
