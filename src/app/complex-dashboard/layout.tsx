export default function ComplexDashboardLayout({
  children,
  // 通过props获取组件
  // 从此可以看到同级的page.tsx其实也是layout的插槽之一
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      {/* 传统情况下，在dashboard里我们分三个区域，放三个component
     <UserAnalytics></UserAnalytics>
     <RevenueMetrics></RevenueMetrics>
     <Notifications></Notifications> */}
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  );
}
