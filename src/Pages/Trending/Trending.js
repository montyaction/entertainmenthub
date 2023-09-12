import axios from 'axios';
import { useState, useEffect } from 'react';
import CustomPagination from '../../Components/Pagination/CustomPagination';
import SingleContent from '../../Components/SingleContent/SingleContent';
import "./Trending.css";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <spna className="pageTitle">Trending Today</spna>
      <div className="trending">
        {
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
            ))
        }
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  )
}

export default Trending;