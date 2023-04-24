import React from 'react';
import './index.css';


export default function AnimeCards (props) {

    return(
        <div className='animeCard'>
            {props.loading === true  ? <div>
                <p style={{textAlign: "center", fontSize:"25px"}}>Loading...</p>
            </div> : props.anime.map((item, index) => {
                return (<div key={index}>
                    <div className='cardDetails'>
                        <div className='animeImg'>
                            <img alt='animeImg' src={item.images.jpg.image_url} />
                        </div>
                        <div className='animeInfo'>
                            <h3>{item.name}</h3>
                            {item.nicknames.map((nickname, nicknameIndex) => {
                                return (
                                    <p key={nicknameIndex} className='nicknames'>{nickname}</p>
                                )
                            })}
                        </div>
                        <div className='fav'>
                            <p>♥  {item.favorites}</p>
                        </div>
                    </div>
                </div>)
            })}
            <div className='pagination'>
                {props.page >= 1 && props.totalPage !== 0 && <button onClick={() => props.changePage("Prev")}>Prev</button>}
                {props.page <= props.totalPage && props.totalPage !== 0 && <button onClick={() => props.changePage("Next")}>Next</button>}
            </div>
        </div>
    )
}