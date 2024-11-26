const HeroComponent = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col px-5 py-12 justify-center items-center">
        <img className="md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg" alt="movie cinema seats" src="https://c4.wallpaperflare.com/wallpaper/569/859/630/red-theater-seats-wallpaper-preview.jpg" />
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to the movie reservation system</h1>
          <p className="mb-8 leading-relaxed">This is a project to integrate the backend i developed</p>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;