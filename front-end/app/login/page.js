"use client";
import { useRouter } from "next/navigation";
import { Card, LoginForm } from "@/components/index";
import { useState } from "react";
const Page = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      {loading ? (
        <p>hi</p>
      ) : (
        <Card header={"Login"}>
          <LoginForm />
          <button onClick={() => router.push("/")}>
            New here? Create an account
          </button>
        </Card>
      )}
    </main>
  );
};

export default Page;
