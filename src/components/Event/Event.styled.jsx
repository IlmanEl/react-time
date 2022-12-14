import styled from "@emotion/styled";
import { type } from "@testing-library/user-event/dist/type";

export const Card = styled.div`
    position: relative;
    border: 2px solid ; ;
    padding: 8px;
    border-radius: 4px;`;

export const Title = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;`;

export const Info = styled.p`
     display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: var(--color-primary-text);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;
    svg {
    display: block; 
    margin-right: 20px;
    color: var(--color-secondary-text);
    }
   
    `;


export const Chip = styled.span`
        position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    color: #fff;
    

background-color: ${props => { 

    switch (props.type) {
        case 'free': 
            return 'grey';
          case 'paid': 
            return 'skyblue';
          case 'vip': 
            return 'tomato';
 default: return '#000'    
    }
}};

    `;

// .icon {

// }


