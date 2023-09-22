import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import './News.css'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
const [articles, setArticles] = useState([])
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalResults, setTotalResults] = useState(0)


   

    const updateNews= async ()=> {
        let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=2c649df290b3441db496a9e27cc18e34`;
setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
      
    }
    useEffect(()=>
    {
        updateNews();
    }, []
    )
   const fetchMoreData = async () => {
       setPage(page + 1)
        let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=2c649df290b3441db496a9e27cc18e34`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
       
    }




         return (
            <div>

                <h1 className='top-heading'>28-News   Top Headlines </h1>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.lnght !== totalResults}
                    loader={<Spinner />}
                >
                    <div className='cards-container'>

                        {articles.map((element) => {

                            return (<div key={element.url} className='cards-container'>
                                <NewsItem title={element.title ? element.title : 'The iPhone 15 and Other Apple Products We Still Expect in 2023 - CNET'} description={element.description ? element.description : 'One investor who is probably paying attention to Apples risks is Warren Buffett, as Berkshire Hathaway owns a $180 billion stake in the company.'} url={element.url} imageUrl={element.urlToImage ? element.urlToImage : 'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/08/Smartphone-market-worsening.webp?resize=1200%2C628&quality=82&strip=all&ssl=1'} />
                            </div>)
                        })}




                    </div>
                </InfiniteScroll>


            </div>

        )
}

// News.defaultProps={
//     country:'in',
//     pageSize: 8,
//     category: 'general',
// }
// News.propTypes ={
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,


// }

export default News
