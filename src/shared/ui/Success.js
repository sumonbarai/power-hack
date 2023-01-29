const Success = ({ message }) => {
  return (
    <div className="flex items-center">
      <div className="relative bg-green-600 max-w-xl px-4 py-2 text-white rounded shadow w-full">
        <span className="block text-sm">{message}</span>
      </div>
    </div>
  );
};
export default Success;
