import {Typography, useTheme, Grid, Container} from '@mui/material';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';

export function Footer() {

    const theme = useTheme();

    return (
        <Container fixed>
            <Grid container justifyContent={"space-between"} marginBottom={'12px'}>
                <Grid item xs={5}>
                    <Typography
                        fontWeight={'light'}
                        variant='h6'>
                        {'Formula'}
                    </Typography>
                    <Typography
                        fontWeight={'light'}
                        fontSize={'13px'}>
                        {'©Formula 2023. All Rights Reserved'}
                    </Typography>
                </Grid>
                <Grid item xs={2} display={'flex'} flexDirection={'row'} justifyContent={'space-around'} alignItems={'flex-end'}>
                    <MailOutlineSharpIcon/>
                    <Typography
                        fontFamily='Noto Sans'
                        fontWeight={'light'}
                        fontSize={'13px'}
                        color={theme.palette.text.primary}>
                        {'info@formula.com'}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
