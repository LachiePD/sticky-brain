import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApi, useAuth } from "@/providers/index.mjs";

export const LoginForm = ({ setLoading }) => {
  const api = useApi();
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await api.auth.login({
      userName: formData.userName,
      password: formData.password,
    });

    api.auth.login;
    router.push("/homescreen");
  };

  return (
    <form className={" flex mx-auto gap-4 flex-col "} onSubmit={handleSubmit}>
      <label>Username: </label>
      <input name="userName" type="text" onChange={handleChange} />

      <label>Password: </label>
      <input name="password" type="password" onChange={handleChange} />

      <button type={"submit"} className={"button"}>
        Login
      </button>
    </form>
  );
};
