import {Grid, Typography, useTheme} from "@mui/material";
import './newsFeedHeader.css'
export function NewsFeedHeader() {

    return (
        <Grid container className={'news-feed-header__container'}>
            <Grid item xs={1.5}>
                <Typography className={'news-feed-header__item'}>
                    {'Image'}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography className={'news-feed-header__item'}>
                    {'Title'}
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography className={'news-feed-header__item'}>
                    {'Authors'}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography className={'news-feed-header__item'}>
                    {'Description'}
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography className={'news-feed-header__item'}>
                    {'Publication date'}
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography className={'news-feed-header__item'}>
                    {'Original URL'}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default NewsFeedHeader;
