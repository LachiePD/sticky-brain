
import { attemptLogin } from "@/api/auth/auth.js";
import { UserContext } from "../UserContext.js";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";


const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e, credential) => {
    switch (credential) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const result = await attemptLogin({ userName, password });

    if (result.status !== 200) {
      console.log("Problem with login");
      console.log(result.status);
      setError(result.message);
      return;
    }
    setUser(userName);
    router.push("/homescreen");
  };

  return (
    <form className={" flex mx-auto gap-4"} onSubmit={(e) => handleSubmit(e)}>
      <label>Username: </label>
      <input
        type="text"
        className={"border-2"}
        onChange={(e) => {
          handleChange(e, "userName");
        }}
      />
      <br />

      <label>Password: </label>
      <input
        type="password"
        className={"border-2"}
        onChange={(e) => {
          handleChange(e, "password");
        }}
      />
      <br />
      <button
        type={"submit"}
        className={
          "block mx-auto hover:cursor-pointer bg-gray-200 rounded border-1 active:bg-gray-700 "
        }
      >
        Login
      </button>
    </form>
  );
};
export default LoginForm;
