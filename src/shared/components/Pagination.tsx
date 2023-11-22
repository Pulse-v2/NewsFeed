import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import NewsFeedItem from "./NewsFeedItem";
import './pagination.css'

export type Article = {
    urlToImage: string,
    title: string,
    author: string,
    description: string,
    publishedAt: string,
    url: string,
    source: {}
};

interface PaginationProps {
    data: Article[]; // Replace YourItemType with the type of your data items
    itemsPerPage: number;
    onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({data, itemsPerPage, onPageChange}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
        onPageChange(selectedPage.selected);
    };
    const pageCount = Math.ceil(data.length / itemsPerPage);
    return (
        <div>
            {data
                .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                .map((article, index) => {
                    return (<NewsFeedItem key={index}
                                          urlToImage={article.urlToImage}
                                          title={article.title}
                                          author={article.author}
                                          description={article.description}
                                          publishedAt={article.publishedAt}
                                          url={article.url}
                                          source={article.source}/>)
                })}
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;
