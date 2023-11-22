import React from 'react';
import NewsFeedItem from "./NewsFeedItem";

export type Article = {
    urlToImage: string,
    title: string,
    author: string,
    description: string,
    publishedAt: string,
    url: string,
    source: {}
};

export function NewsFeed(props: any) {
    const {data} = props
    return (
        <>
            {data ? (
                data.map((article: Article, index: string) => {
                    return (<NewsFeedItem key={index}
                                          urlToImage={article.urlToImage}
                                          title={article.title}
                                          author={article.author}
                                          description={article.description}
                                          publishedAt={article.publishedAt}
                                          url={article.url}
                                          source={article.source}/>)
                })
            ) : (
                <div>
                    Unfortunately, the information is not available! Try it later!
                </div>
            )
            }
        </>
    );
}

export default NewsFeed;
