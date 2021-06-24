import react, {useState} from 'react'
import cn from 'classnames'
import styles from './paginator.module.css'
import style from "../../components/Users/Users.module.css";
import React from "react";


type PaginatorPropsType ={
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
}

let Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged} : PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
        return <div>
            {
            pages.map(p=> {
                return    <span className={currentPage === p ? style.selectedPage: ''}
                                onClick={(event)=>{onPageChanged(p)}}> {p}</span>
            })
            }
        </div>
//
//     let portionCount = Math.ceil(pagesCount / portionSize)
//     let [portionNumber, setPortionNumber] = useState(1)
//     let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
//     let rightPortionPageNumber = portionNumber * portionSize
//
//     return (
//         <>
//             <div>
//                 {portionNumber > 1 &&
//                 <button onClick={() => {
//                     setPortionNumber(portionNumber - 1)
//                 }}>PREV </button>
//                 }
//                 {pages
//                     .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
//                     .map((p) => {
//                         return <span className={cn({
//                             [styles.selectedPage]: currentPage === p
//                         }, styles.pageNumber)}
//                                      key={p}
//                                      onClick={(e) => {
//                                          onPageChanged(p)
//                                      }}>{p} </span>
//                     })}
//                 {portionCount > portionNumber &&
//                 <button onClick={() => {
//                     setPortionNumber(portionNumber + 1)
//                 }}>NEXT </button>
//                 }
//             </div>
//         </>
//     )
}
export default Paginator
