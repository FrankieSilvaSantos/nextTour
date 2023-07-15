"use client"

import { useParams } from 'next/navigation'
import styles from './post.module.css'


export default function Post(params) {
    //  const params = useParams()
    console.log(params)

    return(

        <>
        <section className={`${styles.containerPost}`}>
        <img className={`rounded-circle ${styles.imgPost}`} alt="avatar1" src="/img/gengar.jpg" />
        <h1 className={`${styles.tituloPost}`}>POST {params.searchParams.title}</h1>
        </section>
        </>

    )

}