import { createContext, useEffect, useState } from "react";
import {requestData} from "../requestData.js";

export const BooksContext = createContext();

export const BooksProvider = ({children}) => {

    const [books, setBooks] = useState([]);
    const [booksList, setBooksList] = useState([]);
    const [range, setRange] = useState(0);
    const [filterBooks, setFilterBooks] = useState([]);
    const [genderBooks, setGenderBooks] = useState([]);


    useEffect(() => {
        requestData()
            .then((res) => {
                setBooks(res);    
            });   
    }, []);
    
    useEffect(() => {
        setFilterBooks(books);
        setGenderBooks(books);
    }, [books]);

    const addBookToList = (book) => {
        setBooksList([...booksList, book]);
        setBooks(books.filter((b) => b !== book));
    };

    const removeBookToList = (book) => {
        setBooksList(booksList.filter((b) => b !== book));
        setBooks(() => {
            const updatedBooks = [...books, book];
            updatedBooks.sort((a, b) => a.id - b.id);
            return updatedBooks;
        });
    };

    const handleRangeFilter = (e) => {
        const rangeInput = parseInt(e.target.value);
        setRange(rangeInput);
        
        const filterPageBooks = () => {
            return genderBooks.filter((book) => book.pages >= rangeInput);
        };
        setFilterBooks(filterPageBooks);
    };

    const handleGenderFilter = (e) => {
        const genderInput = e.target.value;

        const filterGenderBooks = () => {
            return books.filter((book) => book.gender === genderInput);
        };

        setGenderBooks(filterGenderBooks);
        setFilterBooks(filterGenderBooks);
        
        if (genderInput === 'all') {
            setGenderBooks(books);
            setFilterBooks(books);
        };
    };

    return (
        <BooksContext.Provider value={{
            books, 
            booksList,
            addBookToList,
            removeBookToList,
            handleRangeFilter,
            range,
            handleGenderFilter,
            filterBooks
        }}>
            {children}
        </BooksContext.Provider>
    )
};