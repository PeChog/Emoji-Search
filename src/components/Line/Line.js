import "./style.scss";

const Line = ({ emoji }) => {
  return (
    <>
      <div className="line">
        <span>{emoji.title}</span>
        <span>{emoji.symbol}</span>
      </div>
    </>
  );
};
export default Line;
