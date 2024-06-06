import React from 'react';
import toast from 'react-hot-toast';

export default function Card({book,remove=false,removeFromBookshelf}) {

    function handleAddToBookshelf(){
     console.log('added',book);
     const existingBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
     const isBookInBookshelf = existingBookshelf.some(existingBook => existingBook.edition_key[0] === book.edition_key[0]);
     if (isBookInBookshelf) {
      toast.error("Book already in bookshelf");
      return; 
    }
     const updatedBookshelf = [...existingBookshelf, book];
     localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
     toast.success("Book added")
    }
    
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-md w-[300px] h-[250px] justify-between">
      <div className="flex flex-col gap-2">
        <div className='flex gap-1'>
        <div className="text-xl font-semibold w-2/5">Book title:</div>
        <div className='text-[18px]'>{book.title}</div>
        </div>
        <div>
          <span className="text-xl font-semibold">Edition:</span> {book.edition_count}
        </div>
      </div>
      <button onClick={remove?()=>removeFromBookshelf(book):handleAddToBookshelf}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        {remove? <span>remove</span> : <span>Add to Bookshelf</span>}
      </button>
    </div>
  );
}
