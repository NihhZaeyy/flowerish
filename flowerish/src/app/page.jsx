const HomePage = () => {
  return (
    <main className="flex justify-around text-center items-center py-10">
      <div>LOGO</div>
      <div className="flex gap-10">
        <div>HOME</div>
        <a href="/about">ABOUT</a>
        <div>CONTACT</div>
      </div>
      <div>AVATAR</div>
    </main>
  );
};

export default HomePage;
