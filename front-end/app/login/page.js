"use client";
import { useRouter } from "next/navigation";
import { Card, LoginForm } from "@/components/index";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      <Card className={"flex"} header={"Login"}>
        {loading ? (
          <>
            <Spinner className={"size-8"} />
            <p>
              Please note, if you had to wait for the frontend to boot up, then
              the backend is probably still booting up too, please wait
            </p>
          </>
        ) : (
          <>
            <LoginForm />
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
