export const AddCard = () => {
  return (
    <form>
      <div>
        <label>Front:</label>
        <input type="text" name="front" />
      </div>

      <div>
        <label>Back:</label>
        <input type="text" name="back" />
      </div>
      <button>Submit</button>
    </form>
  );
};
