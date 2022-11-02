import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { BsClockFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { formatEventStart, formatEventDuration } from 'utils';
import { Card , Title , Info , Chip} from "./Event.styled";

export const Event = ({ name, location, speaker, type, start, end }) => {
    
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);
  
    
  
    return (


        <Card>
            <Title>{name}</Title>
            <Info>
                <IoLocationSharp  size={22} />
                {location}
            </Info>
            <Info>
                <IoIosPerson  size={22} />
                {speaker}
            </Info>
            <Info>
                <FaCalendarAlt  size={20} />
                {formattedStart}
            </Info>
            <Info>
                <BsClockFill  size={20} />
                {duration}
            </Info>
            <Chip type={type}>{type}</Chip>
        </Card>
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
