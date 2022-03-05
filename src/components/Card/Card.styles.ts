import styled from 'styled-components';

export const Wrapper = styled.div`
  --border-radius: 8px;
  --transition-time: 0.3s;
  position: relative;
  background-color:#000 ;
  padding-top: 56.25%;
  width:320px;
  cursor: pointer;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);
  :hover {
    height: calc(190%);
    transform:scale(1.3) ;
    
    z-index: 20;
    .video-wrapper {
      opacity: 100;
      height:50% ;
    }
    img{
        opacity: 0;
    }
    .details {
        display:block ;
    }
  }
  
  img {
    position: absolute;
    top: 0;
    width: 100%;
    object-fit: cover;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    border-radius: var(--border-radius);
  }
  .video-wrapper {
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }
  .details {
    padding:10px ;
    color:#fff ;
    position: absolute;
    top:50% ;
    width:100% ;
    display:none ;
    margin-top:20px ;
  }

  .details-icon {
    display:flex ;
    flex-direction:row ;
    column-gap:10px ;
    color:#ccc ;
  }
  .details-icon :hover{
      color:white ;
  }
  .details-des{
      padding: 15px 0px;
  }

  .details-des p{
      font-size:10pt ;
      font-weight:300 ;
  }


`;