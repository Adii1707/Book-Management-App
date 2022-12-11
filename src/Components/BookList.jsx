import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getBooks } from '../Redux/AppReducer/action';

export const BookList = () => {

const dispatch = useDispatch();
const [SearchParams] = useSearchParams();
const location = useLocation();

const Books = useSelector((store)=> {
 // console.log(store.Appreducer)
  return store.Appreducer.Books
})
const Loading = useSelector((store)=> {
 // console.log(store.Appreducer)
  return store.Appreducer.isLoading
})
//  console.log(Books.length)
     useEffect(()=>{
 
         if(location ){
          const getparams = {
               params: {
            category: SearchParams.getAll("category")
               }
          }
          dispatch(getBooks(getparams))
         }
  
       }, [dispatch, location]);


  return (
    <div>
    { Books?.map((book)=> 
   (
      <div key={book.id}>
        <img src="https://m.media-amazon.com/images/I/41DzsRcVp3L._SX348_BO1,204,203,200_.jpg" alt="developer" />
        <h4>{book.book_name}</h4>
        <p>{book.category}</p>
      </div>
    ))}
    </div>
  )
}

