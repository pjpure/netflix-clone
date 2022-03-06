import styled from 'styled-components';
interface Props {
  width: number;
  height: number;
  isSelected: boolean;
}

export const Wrapper = styled.div<Props>`
  --border-radius: 8px;
  --transition-time: 0.3s;
  position: relative;
  background-color:#000 ;
  padding-top: 56.25%;
  width:${props => props.width}px;
  height:${props => props.height}px ;
  cursor: pointer;
  transition: all var(--transition-time);
  border-radius: var(--border-radius);
  ${props => props.isSelected && 'height: calc(190%); transform:scale(1.3) ; z-index: 20;'}
  /* :hover {
    height: calc(190%);
    transform:scale(1.3) ;
    z-index: 20;
  } */
  
  img {
    ${props => props.isSelected ? 'opacity:0;' : 'opacity: 100;'}
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
    ${props => props.isSelected ? 'opacity: 100; height:50% ;' : 'opacity: 0;'}
    position: absolute;
    top: 0;
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }
  .details {
    ${props => props.isSelected ? ' display:block;' : 'display:none ;'}
    padding:10px ;
    color:#fff ;
    position: absolute;
    top:50% ;
    width:100% ;
    margin-top:10px ;
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