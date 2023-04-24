import React, { useEffect, useState } from 'react';
import AnimeCards from './animeCards';
import './index.css';


export default function AnimeData (props) {

    const [anime, setAnime] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const url = `https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=${query}&order_by=favorit`

    useEffect(()=>{
        fetchAnime();
    }, [page, query])

    const fetchAnime = async () => {
        setLoading(true)
        const res = await fetch(url)
        const animeData = await res.json()

        setAnime(animeData.data)
        setTotalPage(animeData.pagination.items.total)
        setLoading(false)
        console.log("anime", anime)
    }

    const changePage = (value) => {
        console.log("changepage", page)
        if(value === "Prev"){
            setpage(page-1)
        }
        if(value === "Next"){
            setpage(page+1)
        }
    }

    return(
        <div>
            <div className='header'>
                <h1>Search Anime characters</h1>
            </div>
            <div className='searchBox'>
                <input className='searchAnime' alt='search' type='text' placeholder='Search Anime' onChange={(e) => setQuery(e.target.value)} value={query}></input>
                
                <h3>Total {totalPage} matching anime characters found.</h3>
                
                { totalPage === 0 ? <h3> No result found!</h3> : ""}
            </div>
            <AnimeCards
            anime = {anime}
            page = {page}
            loading = {loading}
            totalPage = {totalPage}
            changePage = {changePage}
            />
        </div>
    )
}