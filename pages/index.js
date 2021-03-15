import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
    console.log(articles)
    return (
        <div>
            <Head>
                <title>Ten Jack Home Inspections</title>
                <meta
                    name="keywords"
                    content="home inspections, home inspection, house inspection"
                />
            </Head>
            <h1>Welcome to Next</h1>
        </div>
    )
}

// Three separate methods we can use to fetch data with NextJS
// 1 - getStaticProps - fetch data at buildtime
// 2 - getServerSideProps - fetch data on each request
// 3 - getStaticPaths - dynamically generate paths to generate data

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json();

    return {
        props: {
            articles
        }
    }
}
