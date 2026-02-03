const Status = ({ text, icon: Icon, bg, color }) => {
  return (
    <div
      className={`flex items-center gap-2 text-sm font-medium ${bg} ${color} py-1 px-2 rounded-md`}
    >
      {Icon && <Icon />}
      {text}
    </div>
  );
};
export default Status;
