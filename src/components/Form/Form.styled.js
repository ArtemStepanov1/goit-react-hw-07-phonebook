import styled from 'styled-components';

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid gray;
    padding: 16px;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 32px;
`;

export const NameInput = styled.input`
    margin-bottom: 8px;
`;

export const ContactsFormBtn = styled.button`
    width: 10vw;
    margin-top: 32px;
    border: 2px solid lightgray;
    border-radius: 4px;
    &:hover {border: 2px solid springgreen};
`;