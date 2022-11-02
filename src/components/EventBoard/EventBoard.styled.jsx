import styled from "@emotion/styled";

export const Board = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(240px, auto));
    gap: 24px;
    padding-left: 16px;
    padding-right: 16px;
    border: 4px solid rgb(255, 255, 255);
    `

// .eventBoard {
//     display: grid;
//     grid-template-columns:repeat(auto-fit, minmax(240px, auto));
//     gap: 24px;
//     padding-left: 16px;
//     padding-right: 16px;
//     border: 4px solid rgb(255, 255, 255);
//     /* background-color: bisque; */
// }