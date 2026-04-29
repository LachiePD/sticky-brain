import { useActiveDeck } from "@/providers/index.mjs";
export const Practice = () => {
  const { card } = useActiveDeck();
  return (
    <div className="flex flex-col gap-3 py-2">
      <span
        className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
          !card.revealed ? "text-accent" : "text-success"
        }`}
      >
        {!card.revealed ? "Question" : "Answer"}
      </span>
      <p className="text-4xl font-medium leading-snug">
        {!card.revealed ? card.front : card.back}
      </p>
    </div>
  );
};
