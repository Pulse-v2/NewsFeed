import {Grid, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from "react";

export type Props = {
    setSearch: (search: string) => void
}

export function SearchInput(props: Props) {
    const { setSearch} = props
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        setSearch(searchValue)
    }, [searchValue])
    return (
        <Grid container className={'search-input__container'}>
            <Grid item>
                <TextField
                    className={'search-input__textfield'}
                    id="outlined-start-adornment"
                    size={'small'}
                    placeholder={'Search article'}
                    value={searchValue}
                    onChange={(e) => {setSearchValue(e.target.value)}}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default SearchInput;
