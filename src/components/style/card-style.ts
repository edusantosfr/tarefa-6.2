import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 300px;
    border-radius: 5px;
    background: rgb(255, 230, 0);
    align-items: center;
    justify-content: flex-start;
    font-family: Arial, Helvetica, sans-serif;
    
    img {
        width: 190px;
        height: 130px;
        border: 2px solid rgb(255, 208, 0);
        object-fit: cover;
    }

    h1, h2, p {
        margin-block-start: 5px !important;
        margin-block-end: 5px !important;
        font-size: 1.2rem;
        text-transform: capitalize;
    }

    p {
        font-size: .5rem;
    }
`

export const Container = styled.div`
    display: flex;
    width: 230px;
    height: 320px;  
    border-radius: 10px;
    background: rgb(255, 208, 0);
    align-items: center;
    justify-content: center;
`

export const CardHeader = styled.div`
    width: 180px;
    display: flex;  
    justify-content: space-between;
`

export const PSContainer = styled.div`
    display: flex;
    align-items: flex-end;
`

export const CardBody = styled.div`
    font-size: .5rem;
    width: 190px;
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    margin-bottom: 18px;
    gap: 5px;

    h3, p {
        margin-block-start: 0px !important;
        margin-block-end: 0px !important;
    }
`

export const CardFooter = styled.div`
    display: flex;
    justify-content:center;
    width: 210px;
    background-color: rgb(255, 217, 0);
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 2px solid rgb(240, 193, 9);
    border-end-end-radius: 5px;
    border-bottom-left-radius: 5px;

    h4, p {
        margin-block-start: 0px !important;
        margin-block-end: 0px !important;
    }
`

export const FooterText = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    font-size: .4rem;
    justify-content: space-between;
    
    p {
        font-size: .3rem;
        text-align: end;
    }
`