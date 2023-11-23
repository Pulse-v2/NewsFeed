import {Grid, Typography} from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import './newsFeedItem.css'
import defaultImage from '../../../assets/img/no-image.png';
import {Link} from "react-router-dom";

export type Props = {
    urlToImage: string,
    title: string,
    author: string,
    description: string,
    publishedAt: string,
    content: string,
    url: string,
    source: {}
};

function trimText(text: string, maxLength: number) {
    if (text && text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    } else {
        return text;
    }
}


export function NewsFeedItem(props: Props) {
    const article = props;
    const time = new Date(article.publishedAt);
    const changeDateFormat = (t: Date) => {
        const addZero = (n: number) => {
            if (n < 10) {
                return `0${n}`
            } else {
                return n
            }
        }
        const year = t.getUTCFullYear();
        const month = t.getUTCMonth();
        const day = t.getUTCDate();

        return `${year}-${addZero(month + 1)}-${addZero(day)}`
    }
    return (
        <Grid container>
            <Grid item xs={1.5} padding={'8px 16px'} display={'flex'} flexDirection={'column'} textAlign={'center'} justifyContent={'center'} border={'1px solid #353d6a14'}>
                <Link to={{pathname: '/item'}} state={{data: article}}>
                    <img
                        className={'news-feed-item__image'}
                        src={article.urlToImage ? article.urlToImage : defaultImage}
                        alt={'title'}
                        loading="lazy"
                    />
                </Link>
            </Grid>
            <Grid item xs={3} padding={'8px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'center'} border={'1px solid #353d6a14'}>
                <Link to={{pathname: '/item'}} state={{data: article}}>
                    <Typography>
                        {article.title}
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={1.5} padding={'8px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'center'} border={'1px solid #353d6a14'}>
                <Link to={{pathname: '/item'}} state={{data: article}}>
                    <Typography overflow={'hidden'} textOverflow={'ellipsis'} width={'100%'}>
                        {article.author}
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={3} padding={'8px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'center'} border={'1px solid #353d6a14'}>
                <Link to={{pathname: '/item'}} state={{data: article}}>
                    <Typography>
                        {trimText(article.description, 120)}
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={1.5} padding={'8px 16px'} display={'flex'} flexDirection={'column'} textAlign={'center'} justifyContent={'center'} border={'1px solid #353d6a14'}>
                <Link to={{pathname: '/item'}} state={{data: article}}>
                    <Typography>
                        {changeDateFormat(time)}
                    </Typography>
                </Link>
            </Grid>
            <Grid item xs={1.5} padding={'8px 16px'} display={'flex'} flexDirection={'column'} textAlign={'center'} justifyContent={'center'} border={'1px solid #353d6a14'}>
                <Link to={article.url}>
                    <LinkIcon/>
                </Link>
            </Grid>
        </Grid>
    );
}

export default NewsFeedItem;
