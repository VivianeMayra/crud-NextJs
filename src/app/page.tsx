import Image from "next/image"
import girlsAndDogs from "../../assets/girl_and_dog.png"
import adestramento from "../../assets/adestramento.png"
import banho from "../../assets/banho.png"
import medicacao from "../../assets/medicacao.png"
import passeio from "../../assets/passeio.png"
import {
  Container,
  ContainerAbout,
  ContainerMain,
  ContainerServices,
  ImageContainer,
  TextContainer,
} from "@/styles/home"
import Link from "next/link"

export default function Home() {
  return (
    <ContainerMain>
      <Container>
        <TextContainer>
          <h2>O melhor cuidado para o seu melhor amigo</h2>
          <h3>
            Está esperando o quê para deixar seu pet mais feliz? Aqui você
            encontra o cuidado que seu pet merece!
          </h3>
          <Link href={`/crud`}>
            <button>Cadastre-se</button>
          </Link>
        </TextContainer>
        <ImageContainer>
          <Image src={girlsAndDogs} alt="" />
        </ImageContainer>
      </Container>
      <ContainerServices>
        <div>
          <Image src={banho} alt="" />
          <p>Banho</p>
        </div>
        <div>
          <Image src={passeio} alt="" />
          <p>Passeio</p>
        </div>
        <div>
          <Image src={adestramento} alt="" />
          <p>Adestramento</p>
        </div>
        <div>
          <Image src={medicacao} alt="" />
          <p>Medicação</p>
        </div>
      </ContainerServices>
      <ContainerAbout>
        <h3>Quem somos?</h3>
        <div>
          <p>
            Um e-commerce criado pela tech coders com a finalidade de melhorar a
            qualidade de vida dos pets e tornar a vida dos tutores mais prática.
            Unimos um profissional qualificado aos proprietários pelo tempo
            necessário!
          </p>
        </div>
      </ContainerAbout>
    </ContainerMain>
  )
}
