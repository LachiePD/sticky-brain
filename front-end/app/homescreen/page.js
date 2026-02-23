"use client";
import { useDeckList, Creator, DeckController } from "@/features/deck/index.js";
import Card from "@/components/ui/Card.jsx";
import SideBar from "@/features/Sidebar.jsx";

const page = () => {
  const deckList = useDeckList();
  return (
    <main className={"flex w-full"}>
      <SideBar />
      <section className={" flex flex-1 flex-col min-h-screen p-5 bg-primary "}>
        {/*TODO , make a directive for section headers*/}
        <header className={"min-h-24"}>
          <h1 className={"text-3xl "}>my sticky brain :)</h1>
        </header>
        <div className={"flex-1 flex justify-center  px-40 "}>
          <Card className={"flex-1"}>
            {/*	//TODO look at simplifying this, selectedDeck should have different naming if its being used as a conditional*/}
            {deckList.selectedDeck ? (
              <DeckController key={deckList.selectedDeck.id} />
            ) : (
              <Creator />
            )}
          </Card>
        </div>
      </section>
    </main>
  );
};

export default page;
