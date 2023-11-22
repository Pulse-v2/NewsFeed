import {Container, FormControl, Grid, Typography} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchInput from "./Search-input";
import Filter from "./Filter";
import {useState} from "react";
import './topHeadline.css'

export type Props = {
    setSearch: (search: string) => void
    setCountry: (search: string) => void
    setCategory: (search: string) => void
}

export function TopHeadline(props: Props) {
    const {setSearch, setCountry, setCategory} = props;
    const [isOpen, setisOpen] = useState(false);
    const [countryValue, setCountryValue] = useState('')
    const [categoryValue, setCategoryValue] = useState('')
    const toggling = (): void => setisOpen(!isOpen);

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryValue(event.target.value);
        setCategory(event.target.value);
    };
    const handleChangeCountry = (event: SelectChangeEvent) => {
        setCountryValue(event.target.value);
        setCountry(event.target.value);
    };
    return (
        <Container>
            <Grid container className={'top-headline__container'}>
                <Grid item xs={8}>
                    <Typography
                        className={'top-headline__title'}
                        variant='h4'>
                        {'Formula Top Headlines'}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <SearchInput setSearch={setSearch}/>
                </Grid>
                <Grid item xs={1}>
                    <Filter onClick={toggling}/>
                </Grid>
            </Grid>
            {isOpen && (
                <>
                    <FormControl sx={{ m: 1, width: 250 }}>
                        <label htmlFor='category'>Category</label>
                        <Select
                            value={categoryValue}
                            onChange={handleChangeCategory}
                            displayEmpty
                            id={'category'}
                            size={'small'}
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem disabled value="">
                                Select
                            </MenuItem>
                            <MenuItem value={'business'}>Business</MenuItem>
                            <MenuItem value={'general'}>General</MenuItem>
                            <MenuItem value={'entertainment'}>Entertainment</MenuItem>
                            <MenuItem value={'health'}>Health</MenuItem>
                            <MenuItem value={'technology'}>Technology</MenuItem>
                            <MenuItem value={'science'}>Science</MenuItem>
                            <MenuItem value={'sports'}>Sports</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: 250 }}>
                        <label htmlFor="country">Country</label>
                        <Select
                            value={countryValue}
                            onChange={handleChangeCountry}
                            displayEmpty
                            id={'country'}
                            size={'small'}
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem disabled value="">
                                Select
                            </MenuItem>
                            <MenuItem value={'gb'}>United Kingdom</MenuItem>
                            <MenuItem value={'ua'}>Ukraine</MenuItem>
                            <MenuItem value={'de'}>Germany</MenuItem>
                            <MenuItem value={'pl'}>Poland</MenuItem>
                        </Select>
                    </FormControl>
                </>
            )}
        </Container>
    );
}

export default TopHeadline;
