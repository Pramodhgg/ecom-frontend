function Loader({ position = "absolute" }) {
  return (
    <div
      className={`absolute bg-slate-200/20 inset-0 backdrop-blur-sm flex items-center justify-center ${position}`}
    >
      <div className="loader" style={{ width: "100px", height: "100px" }}></div>
    </div>
  );
}
export default Loader;
