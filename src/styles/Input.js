import styled from 'styled-components';

const Input = styled.input`
    width: 90%;
    height: 40px;
    margin: 1rem auto;
    padding: 1rem auto;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    color: hsl(249, 10%, 26%);
    border: none;
    border-bottom: 1px solid #ccc;

    &:focus{
        border-bottom: 1px solid hsl(248, 32%, 49%);
    }
`;

export default Input;