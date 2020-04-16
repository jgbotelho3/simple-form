import styled from 'styled-components';

const Container = styled.div`

    width: 100%;
    max-width: ${props => (props.width? props.width: '1440px')};
    height: ${props => (props.height? props.height: '100vh')};
    background: ${props => (props.bg? props.bg: '#231F20')};
    display: flex;
    flex-direction: ${props => (props.direction? props.direction: 'column')};
    align-items:${props => (props.align? props.align: 'start')};
    justify-content: ${props => (props.justify? props.justify: 'start')};
    margin: ${props => (props.margin? props.margin: '')};
    padding: ${props => (props.padding? props.padding: '')};
`;

export default Container;