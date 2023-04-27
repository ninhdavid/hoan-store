import styled from 'styled-components';


export const ReviewsStyled = styled.div`
      .swiper-pagination {
        position: absolute;
        bottom: 0;
      }
      .swiper-pagination-bullet.swiper-pagination-bullet-active{
        background:black;
        color:black;
      }
      .swiper-button-next, .swiper-button-prev{
        bottom:0;
        top:auto; 
      }
      .swiper-button-next,
          .swiper-button-prev{
              padding:5px;
              width:30px;
              height:30px;
              background-color:#dadada;
              border-radius:999px;
              filter: drop-shadow(0 0 0.1rem #999);
              transform:translateY(-24px);
              &:hover{
                  background-color:#fff;
              }
          }
        .swiper-button-prev:after,
          .swiper-button-next:after{
              font-size:12px;
              border-radius:999px;     
              color:black;
          }     


        @media screen and (min-width:1024px){
          .swiper-button-next {
            right:24px;
            transform:translateY(8px);

          }
          .swiper-button-prev {
            left:24px;
            transform:translateY(8px);

          }
        }
        @media screen and (min-width:1440px){
          .swiper-button-next {
            right:32px;
            padding:8px;
          }
          .swiper-button-prev {
            left:32px;
            padding:8px;
          }
        }
        @media screen and (min-width:1920px){

          .swiper-button-next,
              .swiper-button-prev{
              width:40px;
              height:40px;
                  transform:translateY(8px);
              }
            .swiper-button-next {
              right:-10px;
            }
            .swiper-button-prev {
              left:-12px;
            }
            .swiper-button-prev:after,
              .swiper-button-next:after{
                  font-size:14px;
                  border-radius:999px;     
                  color:black;
              }
            }

`