import styled from 'styled-components'


export const NavHoverStyled= styled.div`

.divHover {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.divHover:hover .linkHover:not(:hover) {
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
}

.linkHover:hover {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}


`