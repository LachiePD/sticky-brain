"use client";
import { useRouter } from "next/navigation";
import { Card, LoginForm } from "@/components/index";

const Page = () => {
  const router = useRouter();
  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      <Card header={"Login"}>
        <LoginForm />
        <button onClick={() => router.push("/")}>
          New here? Create an account
        </button>
      </Card>
    </main>
  );
};

export default Page;
