function Loader({ position = "absolute" }) {
  return (
    <div
      className={`  inset-0 backdrop-blur-sm flex items-center justify-center ${position === "absolute" ? "bg-slate-200/20" : ""}`}
    >
      <div
        className="loader"
        style={{
          width: position === "absolute" ? "100px" : "30px",
          height: position === "relative" ? "30px" : "100px",
        }}
      ></div>
    </div>
  );
}
export default Loader;
