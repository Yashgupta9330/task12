import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import "../App.css"
export default function Home(){

  const [search, setSearch] = useState('YOUR_QUERY');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading state to true while fetching data
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${search}&limit=10&page=1`);
        setBooks(response.data.docs);
      } 
      catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false); // Set loading state to false after data fetching is done
    }
    if(search.trim() != "") {
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
