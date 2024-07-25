import ClientComponent from "./ClientComponent";
import { heading1, section2 } from "./ServerComponent";

const HeroSection = () => {
  return <ClientComponent heading1={heading1} section2={section2} />;
};

export default HeroSection;
