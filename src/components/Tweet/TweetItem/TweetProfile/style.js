import styled from 'styled-components'

export const ProfileSection = styled.section`
    padding: 15px 5px;
    justify-content: center;
    flex: 0 0 20%;    
    display: flex;
    flex-flow: column wrap;
    min-width: 160px;
`

export const ProfileName = styled.div`
    margin: 5px 0;
    width: 100%;
    font-size: 0.9rem;
    font-weight: bold;
`

export const ProfileImage = styled.img`
    border-radius: 50%;
    border:solid 1px #f8f8f8;
    max-width: 50px;
    align-self: center;
`

export const ProfileDesc = styled.p`
    font-size: 0.8rem;
    color: #c0c0c0;
`