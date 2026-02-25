import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{
        "source": {
            "id": "news24",
            "name": "News24"
        },
        "author": "Lynn Butler",
        "title": "SA20 delayed to accommodate England tour as Test cricket returns in SA summer",
        "description": "The start to the fifth season of South Africa’s marquee franchise tournament, the SA20, will be delayed to accommodate England’s visit in the summer.",
        "url": "https://www.news24.com/sport/cricket/proteas/test-cricket-returns-to-sa-shores-over-festive-period-sa20-moved-to-later-date-20260223-0602",
        "urlToImage": "https://news24cobalt.24.co.za/resources/029a-1dffabd75e0b-1201eb493ea4-1000/format/inline/temba2.jpeg",
        "publishedAt": "2026-02-23T10:39:35",
        "content": "\u003Cul\u003E\u003Cli\u003ECricket South Africa revealed its home schedule for the 2026/2027 season when the Proteas will host Australia, Bangladesh and England.\u003C/li\u003E\u003Cli\u003EThe Boxing Day and New Years Test will return as… [+5609 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }]
    constructor() {
        super();
        console.log("Hello I am a Constructor from News Component")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-4'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem  title={element.title.slice(0,40)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
