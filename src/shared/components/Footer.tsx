import {Typography, useTheme, Grid, Container} from '@mui/material';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';

export function Footer() {

    const theme = useTheme();

    return (
        <Container>
            <Grid container spacing={2} justifyContent={"space-between"} bgcolor={theme.palette.background.default}>
                <Grid item xs={3}>
                    <Typography
                        fontWeight={'light'}
                        variant='h6'>
                        {'Formula'}
                    </Typography>
                    <Typography
                        fontWeight={'light'}
                        variant='h6'>
                        {'©Formula 2023. All Rights Reserved'}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <MailOutlineSharpIcon/>
                    <Typography
                        fontFamily='Noto Sans'
                        fontWeight={'light'}
                        variant='h6'
                        color={theme.palette.text.primary}>
                        {'info@formula.com'}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
