import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import NewsFeedItem from "./NewsFeedItem";
import './newsFeedContainerWithPagination.css'
import {FormControl, Grid, Typography} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export type Article = {
    urlToImage: string,
    title: string,
    author: string,
    description: string,
    publishedAt: string,
    content: string,
    url: string,
    source: {}
};

interface PaginationProps {
    data: Article[]; // Replace YourItemType with the type of your data items
    onPageChange: (selectedPage: number) => void;
}

const NewsFeedContainerWithPagination: React.FC<PaginationProps> = ({data, onPageChange}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [amountValue, setAmountValue] = useState('5')

    const handlePageClick = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
        onPageChange(selectedPage.selected);
    };
    const handleChangeAmount = (event: SelectChangeEvent) => {
        setAmountValue(event.target.value);
    };
    const pageCount = Math.ceil(data.length / parseInt(amountValue));
    return (
        <div>
            {data
                .slice(currentPage * parseInt(amountValue), (currentPage + 1) * parseInt(amountValue))
                .map((article, index) => {
                    return (<NewsFeedItem key={index}
                                          urlToImage={article.urlToImage}
                                          title={article.title}
                                          author={article.author}
                                          description={article.description}
                                          publishedAt={article.publishedAt}
                                          content={article.content}
                                          url={article.url}
                                          source={article.source}/>)
                })}
            <Grid container display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
                {data.length > 0 && (<Grid item xs={3} display={'flex'} flexDirection={'row'} padding={'10px'}
                       justifyContent={'flex-end'} alignItems={'center'}>
                    <Typography color={'rgba(33, 41, 50, 0.5)'}>
                        Rows per page:
                    </Typography>
                    <FormControl sx={{m: 1, width: 65}}>
                        <Select
                            value={amountValue}
                            onChange={handleChangeAmount}
                            id={'amount'}
                            size={'small'}
                            inputProps={{'aria-label': 'Without label',id: 'uncontrolled-native'}}>
                            <MenuItem value={'5'}>5</MenuItem>
                            <MenuItem value={'10'}>10</MenuItem>
                            <MenuItem value={'20'}>20</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>)}
                <Grid item>
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        renderOnZeroPageCount={null}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default NewsFeedContainerWithPagination;
