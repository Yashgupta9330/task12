import { useState, useEffect } from 'react';
import Card from "../components/Card";

export default function Selfbooks() {
  const [bookshelf, setBookshelf] = useState([]);

  function removeFromBookshelf(bookToRemove) {
    const updatedBookshelf = bookshelf.filter(book => book.edition_key[0] !== bookToRemove.edition_key[0]);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    toast.success("Book Removed")
  }

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col items-center mt-4 gap-4'>
      <h1 className='text-xl font-semibold'>My Bookshelf</h1>
      {bookshelf.length === 0 ? (
        <p>Your bookshelf is empty.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 p-8">
          {bookshelf.map((book, index) => (
            <Card key={index} book={book} remove={true} removeFromBookshelf={removeFromBookshelf} />
          ))}
        </div>
      )}
    </div>
  );
}
