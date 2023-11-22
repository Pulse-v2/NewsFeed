import useGetData from "../hooks/useGetData";
import {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container} from "@mui/material";
import TopHeadline from "../components/TopHeadline";
import NewsFeedHeader from "../components/NewsFeedHeader";
import Pagination from "../components/Pagination";

export function HomePageComponent() {
    const [search, setSearch] = useState('')
    const [country, setCountry] = useState('')
    const [category, setCategory] = useState('')
    const [data] = useGetData()
    const [newData, setNewData] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Adjust the number of items per page as needed

    const getData = async (notEmptyQuery: boolean, search?: string, country?: string, category?: string) => {
        if (search) {
            await data(notEmptyQuery, search).then((data) => {
                return setNewData(data.data.articles);
            });

        }
        if (country || category) {
            await data(notEmptyQuery, '', country, category).then((data) => {
                return setNewData(data.data.articles);
            });
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

    const handlePageChange = (selectedPage: number) => {
        setCurrentPage(selectedPage);
    };
    return (
        <>
            <Header/>
            <TopHeadline setSearch={setSearch} setCountry={setCountry} setCategory={setCategory}/>
            <Container fixed>
                <NewsFeedHeader/>
                <Pagination
                    data={newData}
                    itemsPerPage={itemsPerPage}
                    onPageChange={handlePageChange}
                />
            </Container>
            <Footer/>
        </>
    );
}

export default HomePageComponent;
