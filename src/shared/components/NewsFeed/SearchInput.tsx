import {Grid, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useEffect, useState} from "react";

export type Props = {
    clearSearch: boolean;
    setClearSearch: (clear: boolean) => void;
    setClearFilter: (clear: boolean) => void;
    setSearch: (search: string) => void;
}

export function SearchInput(props: Props) {
    const {clearSearch, setClearSearch, setClearFilter, setSearch} = props
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        if (!clearSearch) {
            setSearch(searchValue);
        } else {
            setSearch('');
            setSearchValue('');
            setClearSearch(false);
        }
    }, [clearSearch, searchValue])
    return (
        <Grid container className={'search-input__container'}>
            <Grid item>
                <TextField
                    className={'search-input__textfield'}
                    id="search-input"
                    size={'small'}
                    placeholder={'Search article'}
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                        setClearFilter(true)

                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default SearchInput;
