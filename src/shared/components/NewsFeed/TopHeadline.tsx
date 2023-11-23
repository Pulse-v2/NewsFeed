import {Container, FormControl, Grid, Typography} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import {useEffect, useState} from "react";

export type Props = {
    setSearch: (search: string) => void,
    setCountry: (search: string) => void,
    setCategory: (search: string) => void
}

export function TopHeadline(props: Props) {
    const {setSearch, setCountry, setCategory} = props;
    const [isOpen, setisOpen] = useState(false);
    const [clearSearch, setClearSearch] = useState(false);
    const [clearFilter, setClearFilter] = useState(false);
    const [countryValue, setCountryValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const toggling = (): void => setisOpen(!isOpen);

    const handleChangeCategory = (event: SelectChangeEvent) => {
        setCategoryValue(event.target.value);
        setCategory(event.target.value);
        setClearSearch(true);
    };
    const handleChangeCountry = (event: SelectChangeEvent) => {
        setCountryValue(event.target.value);
        setCountry(event.target.value);
        setClearSearch(true);
    };
    useEffect(() => {
        if (clearFilter) {
            setCountryValue('');
            setCategoryValue('');
            setisOpen(false)
            setClearFilter(false);
        }
    }, [clearFilter]);
    return (
        <Container>
            <Grid container marginBottom={'22px'}>
                <Grid item xs={8}>
                    <Typography
                        variant='h4'>
                        {'Formula Top Headlines'}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <SearchInput clearSearch={clearSearch} setClearFilter={setClearFilter} setClearSearch={setClearSearch} setSearch={setSearch}/>
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
                            id={'category'}
                            displayEmpty
                            size={'small'}
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem disabled value={''}>Select</MenuItem>
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
                            id={'country'}
                            displayEmpty
                            size={'small'}
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem disabled value={''}>Select</MenuItem>
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
