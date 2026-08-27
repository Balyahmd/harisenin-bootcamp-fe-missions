function MainLayout({ children }) {
  return (
    <main className="bg-[rgb(255,253,243)] min-h-screen w-full">
      <div className="flex items-center justify-center flex-col gap-5 md:gap-10 p-6 md:p-12">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;
