import { Grid } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import {useState} from "react";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export function Filter(props: any) {
    const [selected, setSelected] = useState(false);
    const {onClick} = props

    return (
        <Grid container>
            <Grid item>
                <ToggleButton
                    value="check"
                    size={'small'}
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                        onClick(selected)
                    }}>
                    {selected ? <FilterAltIcon/>: <FilterAltOutlinedIcon/>}
                    Filters
                </ToggleButton>
            </Grid>
        </Grid>
    );
}

export default Filter;
