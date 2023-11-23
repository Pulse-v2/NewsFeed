import useGetArticles from "../hooks/useGetArticles";
import {useCallback, useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container} from "@mui/material";
import TopHeadline from "../components/NewsFeed/TopHeadline";
import NewsFeedHeader from "../components/NewsFeed/NewsFeedHeader";
import NewsFeedContainerWithPagination from "../components/NewsFeed/NewsFeedContainerWithPagination";
import './homePage.css';

export function HomePageComponent() {
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState('')
    const [category, setCategory] = useState('')
    const [articles] = useGetArticles()
    const [newArticles, setNewArticles] = useState([])
    const [, setCurrentPage] = useState(0);

    const getArticles = useCallback(async (notEmptyQuery: boolean, search?: string, country?: string, category?: string) => {
        try {
            let data;
            if (search) {
                data = await articles(notEmptyQuery, search);
            } else if (country || category) {
                data = await articles(notEmptyQuery, '', country, category);
            }

            if (data) {
                setNewArticles(data.data.articles);
            }
        } catch (error) {
            console.error("Error fetching articles", error);
        }
    }, [articles]);
    useEffect(() => {
        setSearch('')
    }, [category, country])

    useEffect(() => {
        setCategory('')
        setCountry('')
    }, [search])
    useEffect(() => {
        if (search !== '') {
            getArticles(true, search)
        }
        if (country || category) {
            getArticles(false, '', country, category)
        }
    }, [search, country, category])

    const handlePageChange = (selectedPage: number) => {
        setCurrentPage(selectedPage);
    };
    return (
        <>
            <Header/>
            <TopHeadline setSearch={setSearch} setCountry={setCountry} setCategory={setCategory}/>
            <Container fixed className={'main-container'}>
                <NewsFeedHeader/>
                <NewsFeedContainerWithPagination
                    data={newArticles}
                    onPageChange={handlePageChange}
                />
            </Container>
            <Footer/>
        </>
    );
}

export default HomePageComponent;
