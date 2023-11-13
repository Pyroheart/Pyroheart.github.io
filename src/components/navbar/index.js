import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"
import NetflixLogo from '../../assets/svg/netflix-icon.svg'
import routes from '../../data/routes'
import useWindowSize from '../../functions/useWindowSize'

function Navbar({selectedProfile}) {
    let arrOptions = [{ id: 1, title: "Home" }, { id: 2, title: "TV Shows" }, { id: 3, title: "Movies" }, { id: 4, title: "News & Popular" }, { id: 5, title: "My List" }, { id: 6, title: "Browse by Language" }];
    const navigate = useNavigate();
    const screenSize = useWindowSize();
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navigateToProfile = () => {
        navigate(routes.profile)
    }

    return (
        <div className={`container-navbar ${offset > 30 && `after-scroll`}`}>
            <div className='inner-container'>
                <a href="#browse"><img className='netflix-logo' alt="netflix logo" src={NetflixLogo} aria-label="TopPage" tabindex="1"/></a>
                {screenSize.width > 640 ?
                    arrOptions.map((element, index) => <h5 className="arrOptionsHover" tabindex={index+1} style={{ paddingLeft: 16, color: index === 0 ? 'white' : null }}>{element.title}</h5>)
                    : null}
            </div>

            <div tabindex="8" className='inner-container'>
                <div style={{ color: '#fff', fontSize: 20 }} ><i className="fa fa-search" ></i></div>
                <h5 style={{ paddingLeft: 16, color: '#fff' }}>{selectedProfile.title}</h5>
                <div style={{ color: '#fff', fontSize: 20, paddingLeft: 16 }} ><i className="fa fa-bell" ></i></div>
                <img onClick={navigateToProfile} className="hoveringProfile" width={40} style={{ objectFit: 'contain', borderRadius: 6, marginLeft: 16 }} src={selectedProfile.asset} alt="profile pic" />
                <div style={{ color: '#fff', fontSize: 20, paddingLeft: 16 }} ><i className="fa fa-caret-down" ></i></div>
            </div>

        </div>
    )
}

export default Navbar