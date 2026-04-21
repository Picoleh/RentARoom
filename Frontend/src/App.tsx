import CommentCarousel from "./Components/Menus/Comentary/CommentCarousel"
import GalleryPhotos from "./Components/Menus/Gallery/GalleryPhotos"
import IntroSection from "./Components/Menus/Intro/IntroSection"
import OwnerInfo from "./Components/Menus/Owner/OwnerInfo"
import QuickInfoPanel from "./Components/Menus/QuickInfo/QuickInfoPanel"
import Section from "./Components/Menus/Section"
import TopBarMenu from "./Components/Menus/TopBar/TopBarMenu"
import MapLoader from "./Components/Util/MapLoader"

function App() {
  return (
    <>
      <header>
        <TopBarMenu />
      </header>

      <main className="h-full">
        <IntroSection />
        <Section title="Sobre o imóvel" subtitle="Uma casa iluminada, silenciosa e próxima da praia, ideal para famílias ou home office.">
          <QuickInfoPanel />
        </Section>
        <Section title="Localização" subtitle="A casa está localizada em um bairro tranquilo, a poucos minutos da praia e de áreas comerciais.">
          <MapLoader />
        </Section>
        <Section title="Owner" subtitle="Conheça o proprietário do imóvel e saiba mais sobre ele.">
          <OwnerInfo />
        </Section>

        <Section title="Depoimentos" subtitle="Veja o que outros hóspedes têm a dizer sobre a experiência de se hospedar na casa.">
          <CommentCarousel />
        </Section>

        <Section title="Galeria de Fotos" subtitle="Explore as fotos do imóvel para ter uma ideia melhor do espaço e das comodidades oferecidas.">
          <GalleryPhotos />
        </Section>
      </main>
    </>
  )
}

export default App
