import { AuroraBackgroundDemo } from "./components/AuroraBackgroundDemo";
import { CardDemo } from "./components/CardDemo";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import { BackgroundBoxesDemo } from "./components/ColorsBackground";
import { GridBackgroundDemo } from "./components/GridBackgroundDemo";
import { HeroHighlightDemo } from "./components/HeroHighlightDemo";
import { LampDemo } from "./components/LampDemo";
import { SpotlightPreview } from "./components/SpotLightPreview";
import { TabsDemo } from "./components/TabsDemo";
import { ThreeDCardDemo } from "./components/ThreeDCardDemo";
import { TypewriterEffectSmoothDemo } from "./components/TypewriterEffectSmoothDemo";

export default function Home() {
  return (
    <div className="">
      <BackgroundBoxesDemo />
      <TypewriterEffectSmoothDemo />
      <div className="w-full">
        <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 bg-black">Projects</h1>
      </div>
      <TabsDemo/>
      <div className="w-full">
        <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 bg-black">Skills</h1>
      </div>
      {/* <div className="flex flex-wrap">
      <CardDemo/> <CardDemo/>
      </div> */}
      <CardHoverEffectDemo/>
      <LampDemo/>
      {/* <GridBackgroundDemo/> */}
      <HeroHighlightDemo/>
      {/* <AuroraBackgroundDemo/> */}
    </div>
  );
}
