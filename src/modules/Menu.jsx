import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { NavbarMenuList } from '../hooks/routes';
import { NavLink } from 'react-router-dom';
import getContext from '../hooks/getContext';
import DrawerCustom from './DrawerCustom';
import { Autocomplete, TextField } from '@mui/material';
import { instanceV2 } from '../hooks/instance';
import { KEY } from '../hooks/getEnv';


export default function Menu() {
    const { openDrawer, setOpenDrawer } = getContext()
    const [filmsData, setFilmsData] = React.useState([])
    function handleSearch(evt) {
        instanceV2().get(`/search/movie?query=${evt.target.value}&include_adult=false&api_key=${KEY}`).then(res => {
            setFilmsData(res.data.results.map(item => {
                const data = {
                    label:item.original_title,
                    id:item.id
                }
                return data
            }));
        })
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={() => setOpenDrawer(!openDrawer)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon onClick={() => setOpenDrawer(!openDrawer)} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Movies
                        </Typography>
                        <nav className='flex items-center gap-5 mr-8'>
                            {NavbarMenuList.map(item => <NavLink className={'pb-1 border-b-[2px] border-transparent'} key={item.id} to={item.path}>{item.value}</NavLink>)}
                        </nav>
                        <Autocomplete
                            onInput={(e) => handleSearch(e)}
                            size='small'
                            options={filmsData}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} placeholder='Search...' />}
                        />
                    </Toolbar>
                </AppBar>
            </Box>
            <DrawerCustom />
        </>
    );
}