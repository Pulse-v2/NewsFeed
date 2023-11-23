import {Grid, Typography} from "@mui/material";
export function NewsFeedHeader() {

    return (
        <Grid container bgcolor={'#ecf0f6'} height={'48px'} lineHeight={'24px'} fontSize={'14px'}>
            <Grid item xs={1.5}>
                <Typography padding={'12px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'left'}>
                    {'Image'}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography padding={'12px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'left'}>
                    {'Title'}
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography padding={'12px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'left'}>
                    {'Authors'}
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography padding={'12px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'left'}>
                    {'Description'}
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography padding={'12px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'left'}>
                    {'Publication date'}
                </Typography>
            </Grid>
            <Grid item xs={1.5}>
                <Typography padding={'12px 16px'} display={'flex'} flexDirection={'column'} textAlign={'left'} justifyContent={'left'}>
                    {'Original URL'}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default NewsFeedHeader;
