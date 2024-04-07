import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  actions.resetForm();
};

const BasicForm = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className={errors.email && touched.email ? "input-error" : ""}
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        className={errors.age && touched.age ? "input-error" : ""}
        value={values.age}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? "input-error" : ""}
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
        value={values.confirmPassword}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
