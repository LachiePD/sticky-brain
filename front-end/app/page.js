"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CreateUserForm } from "@/components/index.mjs";
import { Card, Loading } from "@/components/index";
import { useState } from "react";
const page = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      <Card header={"Create Account"}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <CreateUserForm setLoading={setLoading} />
            <button onClick={() => router.push("/login")}>
              Already have an account? Login
            </button>
          </>
        )}
      </Card>
    </main>
  );
};

export default page;
