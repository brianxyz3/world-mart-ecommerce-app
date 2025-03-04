import { useState } from "react";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Login as LoginIcon } from "@mui/icons-material";
import { Menu as MenuIcon, Close as CloseIcon, ShoppingBagOutlined } from "@mui/icons-material";


const Navbar = ({ handleToggle }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [checked, setChecked] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = () => {
        handleToggle();
        setChecked(!checked)
    }


    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
            margin: 1,
            padding: 0,
            transform: 'translateX(6px)',
            '&.Mui-checked': {
                color: '#fff',
                transform: 'translateX(22px)',
                '& .MuiSwitch-thumb:before': {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                        '#fff',
                    )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
                },
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: '#aab4be',
                    ...theme.applyStyles('dark', {
                        backgroundColor: '#8796A5',
                    }),
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: '#001e3c',
            width: 32,
            height: 32,
            '&::before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            },
            ...theme.applyStyles('dark', {
                backgroundColor: '#003892',
            }),
        },
        '& .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: '#aab4be',
            borderRadius: 20 / 2,
            ...theme.applyStyles('dark', {
                backgroundColor: '#8796A5',
            }),
        },
    }))

    const navItems = [
        {
            title: "Home",
            link: "home"
        },
        {
            title: "About",
            link: "about"
        },
        {
            title: "Fashion",
            link: "fashion"
        },
        {
            title: "Offers",
            link: "offers"
        },
    ]

    return (
        <>
            <nav className="bg-blue-800 lg:bg-white py-4 dark:bg-black dark:text-blue-200">
                <div className="flex justify-between mx-4 lg:mx-10 mt-6 lg:items-center">
                    {/* Logo */}
                    <section>
                        <div className="logo w-16 lg:w-24 text-xl lg:text-4xl dark:bg-black"><p className="logo-text-w">W</p><p className="logo-text-m">M</p></div>
                    </section>

                    <section className={`lg:flex ${isOpen ? "block" : "hidden"} justify-between w-[87%]`}>
                        <div className="w-2/3 mx-auto flex justify-center lg:border lg:bg-blue-800  text-blue-100 rounded-2xl py-1">
                            <div className="flex flex-col lg:flex-row text-center lg:justify-between gap-1 lg:mt-0 mt-8">
                                {
                                    navItems.map((item, idx) => (
                                        <a key={idx} href={`#${item.link}`} className="border-b-2 px-5 lg:py-2 p-1 lg:border-b-0 hover:bg-blue-900 hover:rounded-2xl duration-300">{item.title}</a>
                                    ))}
                                <a className="border-b-2 px-5 lg:py-2 p-1 lg:border-b-0 hover:bg-blue-900 hover:rounded-2xl cursor-pointer flex flex-nowrap">Services <ExpandMoreIcon /></a>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center ms-4 my-0">
                            <FormGroup>
                                <FormControlLabel
                                    control={<MaterialUISwitch sx={{ m: 1 }} checked={checked}
                                        onChange={handleClick} />}
                                />
                            </FormGroup>
                            <IconButton size="large" aria-label="search" color="inherit">
                                <SearchIcon />
                            </IconButton>
                            <IconButton size="large" aria-label="shopping bag" color="inherit">
                                <ShoppingBagOutlined />
                            </IconButton>
                        </div>
                        <div className="flex items-center justify-center gap-2 lg:bg-blue-800 text-center text-blue-100 duration-150 lg:border lg:rounded-3xl lg:my-2 lg:px-10 py-1 cursor-pointer hover:rounded-3xl hover:scale-105 hover:text-blue-300 hover:shadow-xl">
                            <LoginIcon /><p> Login</p>
                        </div>
                    </section>
                    {/* Menu Icon for Mobile */}
                    <section>
                        <div className="flex items-center gap-x-4">
                            <div className="lg:hidden duration-150 border-2 border-transparent hover:border-blue-200 hover:rounded-md h-fit w-auto">
                        <button onClick={toggleNavbar}>
                            {isOpen ? (
                                <CloseIcon className="text-blue-200" />
                            ) : (
                                <MenuIcon className="text-blue-200" />
                            )}
                                </button>
                            </div>
                            <div className="md:hidden">
                                <FormGroup>
                                    <FormControlLabel
                                        control={<MaterialUISwitch sx={{ m: 1 }} checked={checked}
                                            onChange={handleClick} />}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </section>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

