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
        {/* <TopBarMenu /> */}
        <IntroSection />
      </header>

      <main className="h-full">
        <Section title="About the property" subtitle="A bright, quiet house close to the beach, ideal for families or a home office.">
          <QuickInfoPanel />
        </Section>
        <Section title="Location" subtitle="The property is located in a quiet neighborhood, just a few minutes from the beach and commercial areas.">
          <MapLoader />
        </Section>
        <Section title="Owner" subtitle="Get to know the property owner and learn more about him.">
          <OwnerInfo />
        </Section>

        <Section title="Testimonials" subtitle="See what other guests have to say about their experience staying at the property.">
          <CommentCarousel />
        </Section>

        <Section title="Gallery" subtitle="Explore the photos of the property to get a better idea of the space and the amenities offered.">
          <GalleryPhotos />
        </Section>
      </main>
    </>
  )
}

export default App
