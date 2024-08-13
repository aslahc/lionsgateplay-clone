import BannerCarousel from "../components/Carousel/BannerCarousel";
import CardCarousel from "../components/Carousel/CardCarousel";
import CommingSoonCard from "../components/Carousel/CommingSoonCard";
import Footer from "../components/Footer/Footer";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import Nav from "../components/Navbar/Nav";
import useTVmaze from "../hooks/useTVmaze"; // Make sure the path is correct

const Home = () => {
  const { data: movies, loading, error } = useTVmaze();
  console.log(movies);
  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="  top-0 ">
        <Nav />
      </div>
      <BannerCarousel movies={movies} />
      <div className="mt-12">
        <h1 className="text-white font-semibold text-2xl pl-4 ml-6 p-4">
          Premieres Of Lionsgate Play
        </h1>
        <CardCarousel movies={movies} />
      </div>
      <div className="">
        <h1 className="text-white font-bold  ml-6 text-2xl p-4">
          Debutants Showcase
        </h1>
        <CardCarousel movies={movies} />
      </div>
      <div className="">
        <h1 className="text-white font-bold ml-6  text-2xl p-4">
          Top 10 in India
        </h1>
        <CardCarousel movies={movies} />
      </div>
      <div className="">
        <h1 className="text-white font-bold  ml-6 text-2xl p-4">
          Premieres Of Lionsgate Play
        </h1>
        <CardCarousel movies={movies} />
      </div>

      <div className="">
        <h1 className="text-white font-bold  ml-6 text-2xl p-4">
          Trending This Week
        </h1>
        <CardCarousel movies={movies} />
      </div>
      <div className="">
        <h1 className="text-white font-bold  ml-6 text-2xl p-4">
          Comming soon
        </h1>
        <CommingSoonCard movies={movies} />
      </div>

      <div className="">
        <h1 className="text-white font-bold  ml-6 text-2xl p-4">
          Popular TV Shows
        </h1>
        <CardCarousel movies={movies} />
      </div>

      <div className="">
        <h1 className="text-white font-bold  ml-6 text-2xl p-4">
          Dubbed For You
        </h1>
        <CardCarousel movies={movies} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
