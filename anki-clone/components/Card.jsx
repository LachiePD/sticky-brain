const styles = {
  card: `
	bg-primary shadow-xl rounded-2xl flex-1  flex flex-col
	border border-secondary 
	items-center
	justify-center
	`,
};

const Card = ({ header, children }) => {
  return (
    <div className={`${styles.card}`}>
      <h1 className={"text-2xl "}>{header}</h1>
      {children}
    </div>
  );
};

export default Card;
