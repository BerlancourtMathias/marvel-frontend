//imports
import "./paginationButtons.css";

const PaginationButtons = ({ setSkip, skip, data }) => {
  return (
    <div className="previousNextButtonGlobal">
      {skip >= 100 && (
        <>
          <button
            onClick={() => {
              setSkip(0);
            }}
          >
            1
          </button>

          <button
            onClick={() => {
              setSkip(skip - 100);
            }}
          >
            ←
          </button>
        </>
      )}
      <div className="currentPageDisplay">page : {(skip + 100) / 100}</div>
      {skip < (Math.ceil(data.count - 100) / 100) * 100 && (
        <>
          <button
            onClick={() => {
              setSkip(skip + 100);
            }}
          >
            →
          </button>

          <button
            onClick={() => {
              setSkip(Math.ceil((data.count - 100) / 100) * 100);
            }}
          >
            {Math.ceil(data.count / 100)}
          </button>
        </>
      )}
    </div>
  );
};
export default PaginationButtons;
