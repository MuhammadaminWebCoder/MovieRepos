import React, { useState } from 'react'
import { getRequest } from '../services/getRequest'
import { IMG_URL, KEY } from '../hooks/getEnv'
import MovieCard from '../components/MovieCard'
import { Pagination } from '@mui/material'
import MovieSkeleton from './MovieSkeleton'
const MoviePage = ({URL}) => {
  const [isLoading,setIsLoading] = useState(true)
    const [page,setPage] = useState(1)
    const data = getRequest(`${URL}?language=en-US&page=${page}&key=${KEY}`,page,setIsLoading)
    function handlePaginationChange(val) {
      setPage(val)
      setIsLoading(true)
    }
  return (
    <>
      <div className='flex flex-wrap gap-5 px-10 justify-center mt-8'>
          {isLoading ? <MovieSkeleton/> : data?.results?.map((item,ind) => <MovieCard key={ind} item={item}/>)}
      </div>
      <div className='flex justify-center my-5'>
        <Pagination onChange={(a,b) => handlePaginationChange(b)} count={data?.total_pages} color='primary' />
      </div>
    </>
  )
}

export default MoviePage
