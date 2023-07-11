import React, { useEffect, useState } from 'react';
import HomePageCSS from './styles.module.css'
// import {ProductList} from 'components';
import { Products } from "components";
import img from "assets/images/DS.jpg";
import image from "assets/images/OSBook.jpg"
import network from "assets/images/Networking.jpg"
import Internet from "assets/images/internet.jpg"
import cloud from "assets/images/cloud.jpg"
import mba from 'assets/images/tancet-mba.jpg'
import pharmacy from "assets/images/phar.jpg"
import phar from "assets/images/ph.jpg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (books) {
      fetchBooks();
    }

  }, []);

  const handleBookClick = (bookId) => {
    // console.log(bookId);
    // const res = await fetch(`/api/books/details?_id=${bookId}`);
    // const data = await res.json();
    navigate(`/BooksDescription/${bookId}`);


  };

  const fetchBooks = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    await axios.get(`/api/books?books`, config)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      })

  };

  return (
    <div className={HomePageCSS.First}>
      <div className={HomePageCSS.Products} >
        <div className={HomePageCSS.Heading}>
          <h2>Recommendations</h2>
        </div>
        {
          books.length > 0 &&
          books.map((books, index) => {
            return (
              <Products
                onClick={() => handleBookClick(books._id)}
                key={books._id}
                pics={books.pics[0]}
                title={books.title}
                by={books.author}
                year={books.year}
                mrp={books.mrp}
                rate={books.rate}

              />
            )
          })
        }

      </div>
    </div>
  )
};

