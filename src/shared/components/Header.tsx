import {Grid} from "@mui/material";
import logo from './../../assets/img/Logo.png';

export function Header() {

    return (
        <Grid container bgcolor={'#1A232E'} height={'64px'} display={'flex'} flexDirection={'row'} alignItems={'center'} marginBottom={'32px'} justifyContent={'center'}>
            <Grid item>
                <img src={logo} alt="logo"/>
            </Grid>
        </Grid>
    );
}

export default Header;
