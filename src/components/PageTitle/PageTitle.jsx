import s from './PageTitle.module.css';
import PropTypes from 'prop-types';

export const PageTitle = ({ text }) => {
    return <h1 className={s.title}>{text}</h1>
    
};

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
};
  