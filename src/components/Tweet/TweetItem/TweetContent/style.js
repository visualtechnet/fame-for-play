import styled from 'styled-components'

export const ContentSection = styled.div`
    padding: 0;
    background-color: #f8f8f8;        
    display:flex;
    width: 100%;
    flex-flow: column wrap;
`

export const TweetTextContent = styled.article`
    flex: 4;
    display: flex;
    align-items: center;
`

export const TweetText = styled.blockquote`
  & {
    font-style: italic;
    quotes: "“" "”" "‘" "’";            
  }
  
  &::before {
    content: open-quote;
  }
  
  &::after {
    content: close-quote;
  }
  
`

export const TweetContentFooter = styled.section`
  font-size: .9rem;
  color: #808080;    
  flex: 1;
  padding-right: 20px;
  text-align: right;
`