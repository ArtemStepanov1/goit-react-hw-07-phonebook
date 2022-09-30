import styled from 'styled-components';

export const ContactList = styled.ul`
    padding: 16px;
`;

export const ContactItem = styled.li`
    margin-bottom: 8px;
    border-bottom: 2px solid lightgray;
    display: flex;
    justify-content: space-between;
    &:hover,
    &:focus {
        border-bottom: 2px solid springgreen;
    };

`;

export const DelContactBtn = styled.button`
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    &:hover .delContactBtnIcon,
    &:focus .delContactBtnIcon {
        fill: tomato;
        transform: scale(1.25);
    };
`;

