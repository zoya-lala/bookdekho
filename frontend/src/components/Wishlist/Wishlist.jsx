import WishlistCSS from './styles.module.css';
import BookCover from '../../assets/images/BookCover.jpg'
import { Button, Chip, Divider, IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Wish from '../../assets/images/Wish.svg'
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import pharmacy from "assets/images/phar.jpg"
import cloud from "assets/images/cloud.jpg"
export const Wishlist = () => {
  return (
    <div className={WishlistCSS.Wishlist}>
    <div className={WishlistCSS.LeftCard}>
        <img src={Wish} alt="Wishlist" />
    </div>
    <div className={WishlistCSS.RightCard}>
    <div className={WishlistCSS.Header}>
        Wishlist
    </div>
    <div className={WishlistCSS.Body}>
        <div className={WishlistCSS.Book1}>
            <div className={WishlistCSS.Image}>
                <img src={BookCover} alt="Book"></img>
            </div>
            <div className={WishlistCSS.BookDetails}>
                <div className={WishlistCSS.Title}>Essential Computer Science</div>
                <div className={WishlistCSS.Author}>Paul D. Cructher</div>
                <div className={WishlistCSS.Interests}>3 people are interested in this book</div>
                <div className={WishlistCSS.Condition}>Book Condition : <b>Very Good </b></div>
                <div className={WishlistCSS.Price}>
                    <CurrencyRupeeRoundedIcon />
                {/* <Chip icon={<CurrencyRupeeRoundedIcon />} label="Free" variant="outlined" size='large'/> */}
                    280
                    </div>
                <div className={WishlistCSS.Button}>
                <Button variant='contained' >View Book</Button>
                <div className={WishlistCSS.Delete}>
                <IconButton aria-label="delete">
                    <DeleteOutlinedIcon/>
                </IconButton>
                </div>
                </div>
            </div>
            </div>

            <div className={WishlistCSS.Book1}>
            <div className={WishlistCSS.Image}>
                <img src={pharmacy} alt="Book"></img>
            </div>
            <div className={WishlistCSS.BookDetails}>
                <div className={WishlistCSS.Title}>The Pharmacy Technician</div>
                <div className={WishlistCSS.Author}>Rose Menon</div>
                <div className={WishlistCSS.Interests}>2 people are interested in this book</div>
                <div className={WishlistCSS.Condition}>Book Condition : <b>Good </b></div>
                <div className={WishlistCSS.Price}>
                    {/* <CurrencyRupeeRoundedIcon /> */}
                {/* <Chip icon={<CurrencyRupeeRoundedIcon />} label="Free" variant="outlined" size='large'/> */}
                    Free
                    </div>
                <div className={WishlistCSS.Button}>
                <Button variant='contained' >View Book</Button>
                <div className={WishlistCSS.Delete}>
                <IconButton aria-label="delete">
                    <DeleteOutlinedIcon/>
                </IconButton>
                </div>
                </div>
            </div>
            </div>
            <div className={WishlistCSS.Book1}>
            <div className={WishlistCSS.Image}>
                <img src={cloud} alt="Book"></img>
            </div>
            <div className={WishlistCSS.BookDetails}>
                <div className={WishlistCSS.Title}>The Invisible Cloud</div>
                <div className={WishlistCSS.Author}>Nick Smith</div>
                <div className={WishlistCSS.Interests}>7 people are interested in this book</div>
                <div className={WishlistCSS.Condition}>Book Condition : <b>Very Good </b></div>
                <div className={WishlistCSS.Price}>
                    <CurrencyRupeeRoundedIcon />
                {/* <Chip icon={<CurrencyRupeeRoundedIcon />} label="Free" variant="outlined" size='large'/> */}
                    Free
                    </div>
                <div className={WishlistCSS.Button}>
                <Button variant='contained' >View Book</Button>
                <div className={WishlistCSS.Delete}>
                <IconButton aria-label="delete">
                    <DeleteOutlinedIcon/>
                </IconButton>
                </div>
                </div>
            </div>
            </div>
    </div>
    </div>
</div>
)
}