import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { createStructuredSelector } from 'reselect';

import { setLocale, setTheme } from '@containers/App/actions';

import classes from './style.module.scss';
import logo from '../../assets/images/Icon.png';
import logoBlack from '../../assets/images/IconBlack.png';
import profile from '../../assets/images/profile.jpg';
import Button from '@components/Button';

const Navbar = ({ locale, theme, token }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isLogin, isSetLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuPosition, setMenuPosition] = useState(null);
  const open = Boolean(menuPosition);

  useEffect(() => {
    if (location?.pathname === '/') {
      setScrolled(false);
      window.addEventListener('scroll', handleScroll);
    } else {
      setScrolled(true);
    }
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 410) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  const handleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className={`${classes.headerWrapper} ${scrolled ? classes.scrolled : ''}`} data-testid="navbar">
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img className={classes.logoFont} src={scrolled ? logoBlack : logo} alt="" />
        </div>
        <div className={classes.toolbar}>
          <div className={classes.toggle} onClick={handleClick}>
            <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
            <div className={classes.lang}>{locale}</div>
            <ExpandMoreIcon />
          </div>
          {token ? (
            <Avatar className={classes.avatar} src={profile} />
          ) : (
            <div className={classes.Containerbutton}>
              <div onClick={() => navigate('/login')} className={`${classes.button} ${scrolled ? classes.buttonActive : ''}`}><FormattedMessage id="navbar_text_login" /></div>
              <Button onClick={() => navigate('/register')} text={<FormattedMessage id="navbar_text_register" />} />
            </div>
          )}
        </div>
        <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/id.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_id" />
              </div>
            </div>
          </MenuItem>
          <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/en.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_en" />
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  token: (state) => state.client.token,
});

export default connect(mapStateToProps)(Navbar);
