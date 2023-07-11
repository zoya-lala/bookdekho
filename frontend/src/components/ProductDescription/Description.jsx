import { Breadcrumbs, Button, Chip, Divider, Fab, Link, Typography } from '@mui/material'
import DescriptionCSS from './styles.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookCover from '../../assets/images/BookCover.jpg';
import DoneIcon from '@mui/icons-material/Done';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ContactDetails } from 'components/ContactDetailsModal';

// const imageData = [
//   {
//     label: "Image 1",
//     alt: "image1",
//     url:
//       "https://lh5.googleusercontent.com/xo6zDzj4Mq8JTuh31DRdzWPkmeekU1ykdvy7gmdGNkBnVzHoULgCA_MpL1ybOV2GKEkbvmswUl0iQW0lvnNQe3gqOFi_-bbt3MBzOAla29FvVN753jPZS87Bn7HyXoQ-dwA-ioYg"
//   },
//   {
//     label: "Image 2",
//     alt: "image2",
//     url:
//       "https://cdn.thomasnet.com/insights-images/eaf2ea91-c0ca-488d-ab63-af480b6f78cb/750px.png"
//   },
//   {
//     label: "Image 3",
//     alt: "image3",
//     url: "https://moneyinc.com/wp-content/uploads/2018/11/Willow-750x500.jpg"
//   },
//   {
//     label: "Image 4",
//     alt: "image4",
//     url:
//       "https://japan.stripes.com/sites/default/files/styles/community_site_carousel_750x500/public/article-images/main_13.jpg?itok=_GELFbpY"
//   }
// ];

// const renderSlides = imageData.map((image) => (
//   <div className={DescriptionCSS.Images}>
//     <img src={image.url} alt={image.alt} />
//   </div>
// ));

export const Description = () => {
  const { _id } = useParams();
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState();
  const [CDactive, setCDactive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleChange(index) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const fetchBookData = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.get(`/api/books/details?_id=${_id}`, config)
        .then((res) => {
          const book = res.data.find(book => book._id === _id);
          console.log(res.data);
          setBooks(book);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        })
    };
    fetchBookData();
  }, [_id]);

  const handleContactDetailsModal = (oName, email) => {
    setName(oName);
    setEmail(email);
    setCDactive(true);
  }

  return (
    <>
      <div className={DescriptionCSS.Breadcrumb}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
          >
            MCA
          </Link>
          <Typography color="text.primary">Essential Computer Science</Typography>
        </Breadcrumbs>
      </div>
      <div className={DescriptionCSS.Top}>
        <div className={DescriptionCSS.PImage}>
          {/* <div className={DescriptionCSS.Images}> */}
          {/* <Carousel>
            {books.pics.map(image => (
              <div key={image}>
                <img src={image} alt={books.title} />
              </div>
            ))}
          </Carousel> */}
          {/* <img src={books.pics} alt={books.title} /> */}

          {/* </div> */}

        </div>

        <div className={DescriptionCSS.PDescription} >
          <div className={DescriptionCSS.YourAd}>
            <Chip label="Your Ad" color='primary' />
          </div>
          <div className={DescriptionCSS.BookName}>{books.title}</div>
          <div className={DescriptionCSS.Author}>{books.author}</div>
          <div className={DescriptionCSS.BCond}>Book Condition</div>
          <div className={DescriptionCSS.Cond}>
            <Chip icon={<DoneIcon />} label={books.bookCond} color='success' />
          </div>
          <div className={DescriptionCSS.Year}>Year Published: {books.year}</div>
          <div className={DescriptionCSS.Dept}>Department: MCA</div>
          <div className={DescriptionCSS.Interests}>
            3 people showed interest in this book.
            <Button variant='contained'>See Who</Button>
          </div>
          <div className={DescriptionCSS.TotalAmt}>
            <div className={DescriptionCSS.Cost}>
              {books.rate === 'free' ? 'Free' : `₹${books.rate}`}
            </div>
            <div className={DescriptionCSS.Price}><s>₹{books.mrp}</s></div>
          </div>
        </div>
      </div>
      <div className={DescriptionCSS.Bottom}>
        <div className={DescriptionCSS.Description}>
          <div className={DescriptionCSS.DTop}>
            Description:
          </div>
          <div className={DescriptionCSS.Content}> {books.description}</div>
          <Divider />
          <div className={DescriptionCSS.AdInfo}>  Ad posted by
            <div className={DescriptionCSS.Banner}>
              <div className={DescriptionCSS.Left}>
                <div className={DescriptionCSS.Image}></div>
                <div className={DescriptionCSS.SubRight}>
                  <div className={DescriptionCSS.Name}>{books.owner}</div>
                  <div className={DescriptionCSS.Sem}>545</div>
                </div>
              </div>
              <div className={DescriptionCSS.Right}>
                <Button variant="contained" onClick={() => { handleContactDetailsModal(books.oName, books.email) }} >View Contact Details</Button>
              </div>
            </div>
          </div>
        </div>
        <ContactDetails Name={name} Email={email} />
      </div>
    </>
  )

}


