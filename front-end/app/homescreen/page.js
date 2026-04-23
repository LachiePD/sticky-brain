"use client";
import { Sidebar, Interface, Stage } from "@/components/index.mjs";
import { HamburgerBar } from "@/components/sidebar/hamburgerbar/HamburgerBar.jsx";
import { useSidebar } from "@/components/sidebar/useSidebar";

const page = () => {
  const { visibleRef, toggleVisible, visible } = useSidebar();
  return (
    <>
      <Sidebar visible={visible} visibleRef={visibleRef} />
      <main
        className={
          " flex flex-col min-h-screen p-5 justify-between bg-primary "
        }
      >
        <header className={"min-h-24"}>
          <HamburgerBar handleClick={toggleVisible} />
          <h1 className={"text-3xl "}>sticky brain </h1>
        </header>
        <Stage />
        <Interface />
      </main>
    </>
  );
};

export default page;
