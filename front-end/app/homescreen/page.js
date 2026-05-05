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
          " flex flex-col min-h-screen p-5 justify-between bg-background "
        }
      >
        <header className={"min-h-24 flex items-center gap-4"}>
          <HamburgerBar handleClick={toggleVisible} />
          <h1 className={"text-3xl"}>sticky brain</h1>
        </header>
        <div className="w-full max-w-2xl mx-auto">
          <Stage />
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <Interface />
        </div>
      </main>
    </>
  );
};

export default page;
