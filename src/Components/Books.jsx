import React from 'react';
// import { useEffect } from 'react';
// import { getBooks } from '../Redux/AppReducer/action';
// import { useDispatch, useSelector } from 'react-redux';
import { BookList } from './BookList';
import styled from "styled-components";
import { Filter } from './Filter';

export const Books = () => {


  return (
    <div>
    <BookPageWrapper> 
     <FilterWrapper>
     <Filter />
     </FilterWrapper>
      <BookWrapper>
      <BookList />
      </BookWrapper>
    </BookPageWrapper>
    
    </div>
  )
}


const BookWrapper = styled.div`
width: 100%;
bolder: 2px solid green;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-row: repeat(1, auto)
grid-gap: 10px;
justify-content: center;
`

const FilterWrapper = styled.div`
   width: 300px;
   border: 1px solid blue
`;

const BookPageWrapper = styled.div`

display: flex;
border: 1px solid red;
`