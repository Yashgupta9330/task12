import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import "../App.css"
export default function Home(){

  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setLoading(true); 
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${search}&limit=10&page=1`,
          {signal:abortControllerRef.current?.signal});
        setBooks(response.data.docs);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false); 
    }
      if(search.trim()!=""){
      fetchData();
      }

  }, [search]);

  return(
    <div className="w-full min-h-screen">
      <Navbar search={search} setSearch={setSearch}/>
      {loading ? (
       <div className="flex justify-center items-center h-screen">
       <div className="loader"></div> 
       </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 p-8">
          {books?.map((book, index) => (
            <Card key={index} book={book}/>
          ))}
        </div>
      )}
    </div>
  );
}
