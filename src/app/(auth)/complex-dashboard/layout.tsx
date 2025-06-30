const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) => {
  return (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col ">
          <div className="bg-rose-500">{users}</div>
          <div className="bg-emerald-500">{revenue}</div>
        </div>
        <div className="flex flex-1 bg-indigo-500">{notifications}</div>
      </div>
    </div>
  );
};
export default ComplexDashboardLayout;
