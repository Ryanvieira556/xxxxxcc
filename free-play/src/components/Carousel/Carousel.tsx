import { Header } from "../Header/Header";
import * as C from "./styles";

export const Carousel = () => {
  return (
    <C.Container>
   
      <C.Banner >

        <C.ContainerContent>
        <Header />
          <C.ContainerBannerSpanPC>PC</C.ContainerBannerSpanPC>
          <C.ContainerBannerTitle>LEAGUE OF LEGENDS</C.ContainerBannerTitle>
          <C.ContainerBannerDesc>
            League of Legends é um jogo em equipes com mais de 140 Campeões com
            os quais você pode fazer jogadas insanas. Jogue agora, é grátis!
          </C.ContainerBannerDesc>
          <C.ContainerBannerArrows>

          </C.ContainerBannerArrows>
        </C.ContainerContent>
      </C.Banner>
    </C.Container>
  );
};
