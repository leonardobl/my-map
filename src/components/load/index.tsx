import React from 'react'
import lottie from "lottie-web"
import * as S from "./styles"

export const Load = () => {

  React.useEffect(()=>{
    const container = document.querySelector("#lottie-container") as HTMLDivElement
    lottie.loadAnimation({
      container,
      autoplay: true,
      loop: true,
      path: "assets/imgs/load.json"
    })
  }, [])


  return (
    <S.LottieContainer >
      <S.Wrapper id='lottie-container'></S.Wrapper>
    </S.LottieContainer>
  )
}
