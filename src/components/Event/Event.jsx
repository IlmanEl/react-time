import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import css  from "./Event.module.css";
import { IoIosPerson } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
// import { formatEventStart } from 'utils/formatEventStart'
// import { formatEventDuration } from 'utils/formatEventDuration'
import {formatEventStart , formatEventDuration  } from 'utils';
export const Event = ({ name, location, speaker, type, start, end }) => {
    
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);
  
    
  
    return (


        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
                <IoLocationSharp className={css.icon} size={22} />
                {location}
            </p>
            <p className={css.info}>
                <IoIosPerson className={css.icon} size={22} />
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt className={css.icon} size={20} />
                {formattedStart}
            </p>
            <p className={css.info}>
                <BsClockFill className={css.icon} size={20} />
                {duration}
            </p>
            <span className={`${css.chip} ${css[type]}`}>{type}</span>
        </div>
    );
    
};

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: PropTypes.exact ({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
    })
};
