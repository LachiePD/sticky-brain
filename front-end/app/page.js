"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CreateUserForm } from "@/components/index.mjs";
import { Card } from "@/components/index";

const page = () => {
  const router = useRouter();

  return (
    <main className={"flex w-full min-h-screen items-center justify-center"}>
      <Card header={"Create Account"}>
        <CreateUserForm />
        <button onClick={() => router.push("/login")}>
          Already have an account? Login
        </button>
      </Card>
    </main>
  );
};

export default page;
