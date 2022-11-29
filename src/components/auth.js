import useInputValidation from "./hooks/useInputValidate";
const Auth = () => {
  const firstname = useInputValidation("");
  const lastname = useInputValidation("");

  return (
    <div className="w-50 shadow mt-5 mx-auto  p-3 rounded">
      <div className="title text-center h1 mb-2">Register</div>
      <div className="d-flex gap-3 mb-3">
        <input
          type="text"
          placeholder="First name"
          className={`form-control ${firstname.colorText}`}
          value={firstname.value}
          onChange={firstname.onChange}
        />
        <input
          type="text"
          placeholder="Last name"
          className={`form-control ${lastname.colorText}`}
          value={lastname.value}
          onChange={lastname.onChange}
        />
      </div>
    </div>
  );
};

export default Auth;
