const BasicForm = () => {
  return (
    <form autoComplete="off">
      <label htmlFor="email">Email</label>
      <input id="email" type="email" placeholder="Enter your email" />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"

      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
      />

      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
