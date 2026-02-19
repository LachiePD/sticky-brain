"use client";
import {useContext} from 'react';
import { UserContext } from "../UserContext.js";
import {useDeckList} from './DeckListContext.jsx';
import Library from "./Library.jsx";
import SideBar from "./SideBar.js";
import Creator from "./Creator.jsx";
import Controller from "./Views/Controller.jsx";

const Page = () => {
	//TODO remove this context, not sure how far it goes
  const { user, setUser } = useContext(UserContext);

	const deckList = useDeckList();
  return (
    <div className={"flex bg-green-200 w-full h-screen p-4 flex-row wrap"}>
	  //TODO remove Sidebar
      <SideBar>
        <Library />
      </SideBar>
      <div className={"flex w-full flex-col h-full rounded  bg-purple-200 "}>
        <div
          className={"flex justify-center bg-blue-200   w-full h-30 mx-auto"}
        >
          <h1> my sticky brain :)</h1>
        </div>
        {deckList.selectedDeck ? (
          <Controller  />
        ) : (
          <Creator />
        )}
      </div>
    </div>
  );
};

export default Page;
