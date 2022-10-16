
import css from './PageTitle.moodule.css';

export const PageTitle = ({ text }) => {
    return <h1 className={css.title}>{text}</h1>
};