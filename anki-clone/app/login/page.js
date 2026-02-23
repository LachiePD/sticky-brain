"use client";
import Card from "@/components/Card.jsx";
import LoginForm from "@/app/login/LoginForm.jsx";

const Page = () => {
  return (
    <main className={"flex p-20 mx-auto"}>
      <Card header={"LOGIN"} className={"flex-1 max-w-4xl"}>
        <LoginForm />
      </Card>
    </main>
  );
};

export default Page;
