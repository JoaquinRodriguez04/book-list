import { useState } from "react";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const BookListInteractive = () => {

  const {
    books, 
    booksList, 
    addBookToList, 
    handleRangeFilter,
    range,
    handleGenderFilter,
    filterBooks
  } = useContext(BooksContext);

  return (
    <div className="flex-flex2 overflow-auto">
        <h2 className="text-4xl">{filterBooks.length} libros disponiles</h2>
        <p className="text-xl font-normal">{booksList.length} en la lista de lectura</p>
        <div className="flex gap-5 flex-wrap">
          <div className="flex flex-col gap-1 w-52">
            <span>Filtrar por páginas</span>
            <input 
            type="range" 
            name="book-page"
            min={0}
            max={1200}
            onChange={(e) => handleRangeFilter(e)} />
            <span>desde {range} paginas</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>Filtrar por género</span>
            <select 
            className="bg-bgBookList text-txt-black p-1 rounded text-base outline-none" 
            name="select-gender"
            onChange={(e) => handleGenderFilter(e)}>
              <option 
              value="all">todos</option>
              <option value="fiction">Ciencia ficcion</option>
              <option value="terror">Terror</option>
              <option value="zombie">Zombies</option>
              <option value="fancy">Fantasia</option>
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-4 gap-5 p-2">
          {
            filterBooks.map((book, index) => {
              return (
                <li
                key={index}
                className="hover:translate-y-1 brightness-90 hover:brightness-105 transition cursor-pointer"
                onClick={() => addBookToList(book)}
                >
                  <img src={book.img} className='w-full h-full rounded-md' alt={book.alt} />
                </li>
              )
            })
          }
        </ul>
    </div>
  )
};

export default BookListInteractive;
