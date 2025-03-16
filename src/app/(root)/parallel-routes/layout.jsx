const ParallelLayout = ({ children, analytics, notifications }) => {
  return (
    <div>
      <div className="font-bold text-6xl text-center py-4">{children}</div>
      <div className="flex gap-3 justify-center">
        <div>{analytics}</div>
        <div>{notifications}</div>
      </div>
    </div>
  );
};

export default ParallelLayout;
