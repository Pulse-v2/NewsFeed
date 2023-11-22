import Header from "../components/Header";
import Footer from "../components/Footer";
import {Container, Grid, Typography} from "@mui/material";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import defaultImage from '../../assets/img/no-image-large.png';

export function NewsItemPageComponent() {
    const location = useLocation();
    const {data} = location.state
    const time = new Date(data.publishedAt)

    const changeDateFormat = (t: Date) => {
        const addZero = (n: number) => {
            if (n < 10) {
                return `0${n}`
            } else {
                return n
            }
        }

        const year = t.getUTCFullYear()
        const month = t.getUTCMonth()
        const day = t.getUTCDate()
        return `${year}-${addZero(month + 1)}-${addZero(day)}`
    }
    return (
        <>
            <Header/>
            <Container fixed>
                <Grid container>
                    <Grid item xs={0.3} className={'news-item-page__back-button__container'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} paddingTop={'5px'} marginBottom={'38px'}>
                        <Link to={{pathname: '/'}}><ArrowBackIcon/></Link>
                    </Grid>
                    <Grid item xs={11.7} marginBottom={'38px'}>
                        <Typography fontSize={'22px'}>
                            {data.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={9} marginBottom={'20px'}>
                        <Typography color={'rgba(33, 41, 50, 0.5)'}>
                            Source: {data.source.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} marginBottom={'20px'}>
                        <Typography color={'rgba(33, 41, 50, 0.5)'} textAlign={'right'}>
                            Publication date: {changeDateFormat(time)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography fontSize={'16px'} fontWeight={'700'} marginBottom={'16px'}>
                            Description
                        </Typography>
                        <Typography marginBottom={'32px'} fontSize={'16px'} fontWeight={'500'}>
                            {data.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid item marginBottom={'32px'}>
                <img src={data.urlToImage ? data.urlToImage : defaultImage} width={'100%'} alt="img"/>
            </Grid>
            <Container fixed>
                <Grid>
                    <Typography fontSize={'16px'} fontWeight={'700'} marginBottom={'16px'}>
                        Content
                    </Typography>
                    <Typography marginBottom={'32px'} fontSize={'16px'} fontWeight={'500'}>
                        {data.content}
                    </Typography>
                </Grid>
                <Grid>
                    <Typography color={'rgba(33, 41, 50, 0.5)'} marginBottom={'60px'}>
                        {data.author.includes(',') ? `Authors: ${data.author}` : `Author: ${data.author}`}
                    </Typography>
                </Grid>
            </Container>
            <Footer/>
        </>
    );
}

export default NewsItemPageComponent;
