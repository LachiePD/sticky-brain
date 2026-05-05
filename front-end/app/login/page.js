"use client";
import { useRouter } from "next/navigation";
import { Card, LoginForm, Loading } from "@/components/index";
import { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      <Card className={"flex flex-col  justify-center"} header={"Login"}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <LoginForm setLoading={setLoading} />
            <button onClick={() => router.push("/")}>
              New here? Create an account
            </button>
          </>
        )}
      </Card>
    </main>
  );
};

export default Page;
