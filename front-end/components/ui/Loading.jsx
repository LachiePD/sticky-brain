import { Spinner } from "@/components/ui/spinner";
export const Loading = ({ children }) => {
  return (
    <>
      <Spinner className={"size-8"} />
      <p className={"max-w-150"}>
        Please note, if you had to wait for the frontend to boot up, then the
        backend is probably still booting up too, please wait
      </p>
    </>
  );
};
