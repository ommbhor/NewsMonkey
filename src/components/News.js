import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general'
    }
    // static propTypes = {
    //     country: this.propTypes.string,
    //     pageSize: this.propTypes.number
    // }
    capitalizeFL = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("Hello I am a Constructor from News Component")
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalizeFL(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6371b59dd4044ea29076b4bbe1c76d2d&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata)
        this.setState({
            articles: parseddata.articles,
            totalResults: parseddata.totalResults,
            loading: false,
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

     fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6371b59dd4044ea29076b4bbe1c76d2d&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata)
        this.setState({
            articles: this.state.articles.concat(parseddata.articles),
            totalResults: parseddata.totalResults,
            loading: false,
        })
    };

    render() {
        console.log("render")
        return (
            <div className='container my-4'>
                <h1 className='text-center my-3' style={{padding: "20px;"}}>NewsMonkey - Top {this.capitalizeFL(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}

                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

export default News
