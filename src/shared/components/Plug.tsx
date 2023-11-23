import {Grid} from "@mui/material";
import logo from './../../assets/img/Logo.png';

export function Plug() {

    return (
        <Grid container height={'500px'} color={'rgba(33, 41, 50, 0.5)'} fontSize={'40px'} display={'flex'}
              flexDirection={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
            Enter the news you are looking for in the search field or use the filter!
        </Grid>
    );
}

export default Plug;
