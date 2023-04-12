import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ArticleCard from "./assets/components/ArticleCard";

function App() {
  const [news, setNews] = useState([]);

  const handleSubmit = (e) => { 
    e.preventDefault()
    
    const search = e.target.searchText.value

    const endPoint = `https://newsapi.org/v2/everything?q=${search}&apiKey=55a627ebcb1748e99fb7ba1d05bd6c05`

    axios
      .get(endPoint)
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
   }


  useEffect(() => {
    const endPoint =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=55a627ebcb1748e99fb7ba1d05bd6c05";

    axios
      .get(endPoint)
      .then((res) => setNews(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="text-center bg-cyan-600 text-stone-100 h-16 flex justify-center items-center text-2xl mb-5">Desho News</h1>
      <form onSubmit={handleSubmit} className=" flex justify-center gap-2 pb-5">
        <input id="searchText" type="text" className="border-2 border-black rounded-md p-2 " />
        <button className=" bg-red-500 p-2 text-white rounded-md" >Search</button>
      </form>
      <section className=" flex flex-wrap gap-4 justify-center max-w-[1200px] mx-auto">
        {news[0] && <ArticleCard article={news[0]} />}
        {news[1] && <ArticleCard article={news[1]} />}
        {news[2] && <ArticleCard article={news[2]} />}
        {news[3] && <ArticleCard article={news[3]} />}
        {news[4] && <ArticleCard article={news[4]} />}
        {news[5] && <ArticleCard article={news[5]} />}
      </section>
    </div>
  );
}

export default App;
