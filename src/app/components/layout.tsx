import SideBar from "@/components/componentsLayouts/sidebar";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SideBar />
      <main className="">{children}</main>
    </div>
  );
}
