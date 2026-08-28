function MainLayout({ children }) {
  return (
    <main className="bg-[rgb(255,253,243)] min-h-screen w-full">
      <div className=" max-w-380 mx-auto flex items-center justify-center flex-col gap-5 md:gap-10 p-10 md:py-12">
        {children}
      </div>
    </main>
  );
}

export default MainLayout;
