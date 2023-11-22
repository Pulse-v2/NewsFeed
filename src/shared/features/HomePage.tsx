import useGetData from "../hooks/useGetData";
import {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container} from "@mui/material";
import TopHeadline from "../components/TopHeadline";
import NewsFeedHeader from "../components/NewsFeedHeader";
import NewsFeed from "../components/NewsFeed";

export type Props = {
    urlToImage: string,
    title: string,
    author: string,
    description: string,
    publishedAt: string,
    url: string
};

export function HomePageComponent() {
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState('')
    const [category, setCategory] = useState('')
    const [data] = useGetData()
    const [newData, setNewData] = useState([])

    const getData = async (notEmptyQuery: boolean, search?: string, country?: string, category?: string) => {
        let response
        if (search) {
            response = await data(notEmptyQuery, search);
            if (response.status === 200) {
                setNewData(response.data.articles)
            }
        }
        if (country || category) {
            response = await data(notEmptyQuery, '', country, category);
            if (response.status === 200) {
                setNewData(response.data.articles)
            }
        }

    }

    useEffect(() => {
        if (search.length > 1){
            getData(true, search)
        }
        if (country || category) {
            getData(false, '', country, category)
        }
    }, [search, country, category])
    useEffect(() => {
        setSearch('')
    }, [category, country])

    return (
        <>
            <Header/>
            <TopHeadline setSearch={setSearch} setCountry={setCountry} setCategory={setCategory}/>
            <Container fixed>
                <NewsFeedHeader/>
                {newData.length > 0 ? <NewsFeed data={newData}/> : <NewsFeed/>}
            </Container>
            <Footer/>
        </>
    );
}

export default HomePageComponent;
