import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import css  from "./Event.module.css";
import { IoIosPerson } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";


export const Event = ({ name, location, speaker, type, start, end }) => {
    return (
        <div className={css.event}>
            <h2 className={css.title}>{name}</h2>
            <p className={css.info}>
                <IoLocationSharp className={css.icon} size={22} />
                {location}
            </p>
            <p className={css.info}>
                <IoIosPerson className={css.icon} size={22}/>
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt className={css.icon} size={20}/>
                {start}
            </p>
            <p className={css.info}>
                <BsClockFill className={css.icon} size={20}/>
                Duration
            </p>
            {/* <span className="chip free|paid|vip">Event type</span> */}
        </div>
    );
};

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    time: {
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
    }
};