import CommentCarousel from "./Components/Menus/Comentary/CommentCarousel"
import CTACard from "./Components/Menus/CTACard"
import GalleryPhotos from "./Components/Menus/Gallery/GalleryPhotos"
import IntroSection from "./Components/Menus/Intro/IntroSection"
import OwnerInfo from "./Components/Menus/Owner/OwnerInfo"
import QuickInfoPanel from "./Components/Menus/QuickInfo/QuickInfoPanel"
import Section from "./Components/Menus/Section"
import MapLoader from "./Components/Util/MapLoader"

function App() {
  return (
    <>
      <header className="h-[40vh] w-full">
        {/* <TopBarMenu /> */}
        <IntroSection />
      </header>

      <main className="h-full w-full flex flex-col gap-8 p-8">
        <div className="flex flex-col lg:flex-row justify-center w-full gap-8">
          <Section title="About the property" subtitle="A bright, quiet house close to the beach, ideal for families or a home office.">
            <QuickInfoPanel />
          </Section>
          <Section title="Location" subtitle="The property is located in a quiet neighborhood, just a few minutes from the beach and commercial areas.">
            <MapLoader />
          </Section>
        </div>
        <div className="flex flex-col lg:flex-row justify-center w-full gap-8">
          <Section title="Owner" subtitle="Get to know the property owner and learn more about him.">
            <OwnerInfo />
          </Section>

          <Section title="Testimonials" subtitle="See what other guests have to say about their experience staying at the property.">
            <CommentCarousel />
          </Section>
        </div>

        <Section title="Gallery" subtitle="Explore the photos of the property to get a better idea of the space and the amenities offered.">
          <GalleryPhotos />
        </Section>

        <CTACard />
      </main>
    </>
  )
}

export default App
