"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApi } from "@/providers/index.mjs";

export const CreateUserForm = ({ setLoading }) => {
  const api = useApi();
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    secondPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //TODO , assert data for second password= first password
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await api.auth.createUser({
      userName: formData.userName,
      password: formData.password,
    });

    if (result.status !== 200) {
      console.log("Create user failed");
      return;
    }

    router.push("/login");
  };

  return (
    <form
      className={"flex flex-col gap-4 items-center"}
      onSubmit={handleSubmit}
    >
      <input
        name={"userName"}
        placeholder={"Enter your username"}
        onChange={handleChange}
      />
      <input
        name={"password"}
        placeholder={"Enter your password"}
        type={"password"}
        onChange={handleChange}
      />
      <input
        name={"secondPassword"}
        placeholder={"Enter password again"}
        type={"password"}
        onChange={handleChange}
      />
      <button className={"button"} type={"submit"}>
        Create User
      </button>
    </form>
  );
};
