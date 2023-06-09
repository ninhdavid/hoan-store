import styled from 'styled-components';

export interface ScrollCardContentProps {
    index?:number;
    scrollYProgress?: number;
    x?:number|string,
    y?:number|string,
}
const variables ={
    idxLength: 4
}


export const ScrollCardContent = styled.div<ScrollCardContentProps>`
    top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3.5 + 10}vh` : '25vh'};
    left: ${(props) => props.index % 2 === 0 ? 
    props.index === 0 ? `${(props.index +3) * 3}vw`:`${(props.index +2.5) * 3}vw`: 
    props.index === 1 ? `${props.index * 5}vw`:`${props.index * 3}vw`};

    .text-upright{
        writing-mode: vertical-rl;
        text-orientation: mixed;    
    }

    @media screen and (min-width: 768px){
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3.5 + 12}vh` : '30vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index +3) * 10}%`:`${(props.index + 9) * 3}%`: 
            props.index === 1 ? `${props.index * 25}%`:`${props.index * 7}%`};        
    }
    
    @media screen and (min-width: 1024px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 2   + 15}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 5 ) * 110}px`:`${(props.index + 4.5) * 90}px`: 
            props.index === 1 ? `${props.index * 510}px`:`${props.index * 160}px`};   
            left:${(props) => props.index ===variables.idxLength ? '620px': ''};
    }
            

    @media screen and (min-width:1280px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 2.5 + 15}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 6 ) * 110}px`:`${(props.index + 5.75) * 90}px`: 
            props.index === 1 ? `${props.index * 610}px`:`${props.index * 190}px`};   
            left:${(props) => props.index ===variables.idxLength ? '740px': ''};
    }
    @media screen and (min-width:1440px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3 + 17}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 7 ) * 110}px`:`${(props.index + 6.2) * 100}px`: 
            props.index === 1 ? `${props.index * 740}px`:`${props.index * 235}px`};   
            left:${(props) => props.index ===variables.idxLength ? '860px': ''};
    }
    @media screen and (min-width:1536px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3 + 17}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 8 ) * 105}px`:`${(props.index + 6.8) * 100}px`: 
            props.index === 1 ? `${props.index * 800}px`:`${props.index * 255}px`};   
            left:${(props) => props.index ===variables.idxLength ? '920px': ''};
    }
    @media screen and (min-width:1910px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3 + 10}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 10) * 110}px`:`${(props.index + 9.5) * 100}px`: 
            props.index === 1 ? `${props.index * 1050}px`:`${props.index * 335}px`};   
        left:${(props) => props.index ===variables.idxLength ? '1200px': ''};

    }
    @media screen and (min-width:2200px) {
        top: ${(props) => props.index !== variables.idxLength ? `${props.index * 3 + 15}vh` : '28vh'};
        left: ${(props) => props.index % 2 === 0 ? 
            props.index === 0 ? `${(props.index + 15.5) * 100}px`:`${(props.index + 14) * 100}px`: 
            props.index === 1 ? `${props.index * 1500}px`:`${props.index * 480}px`};   
        left:${(props) => props.index ===variables.idxLength ? '1750px': ''};
    }


`