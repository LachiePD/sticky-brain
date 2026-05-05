"use client";
import { useRouter } from "next/navigation";
import { Card, LoginForm } from "@/components/index";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      <Card className={"flex flex-col  justify-center"} header={"Login"}>
        {loading ? (
          <>
            <Spinner className={"size-8"} />
            <p className={"max-w-150"}>
              Please note, if you had to wait for the frontend to boot up, then
              the backend is probably still booting up too, please wait
            </p>
          </>
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
