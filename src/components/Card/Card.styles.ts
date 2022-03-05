import styled from 'styled-components';

export const Wrapper = styled.div`
  --border-radius: 10px;
  --transition-time: 0.3s;
  position: relative;
  background-color:#000 ;
  padding-top: 57%;
  cursor: pointer;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);
  :hover {
    height: calc(180%);
    transform:scale(1.3) ;
    
    z-index: 20;
    video {
      opacity: 100;
      height:50% ;
    }
    img{
        opacity: 0;
    }
  }
  
  img {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    pointer-events: none;
    border-radius: var(--border-radius);
  }
  video {
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  .details {
    padding:10px ;
    color:#fff ;
    position: absolute;
    top:50% ;
    width:100% ;

  }
`;