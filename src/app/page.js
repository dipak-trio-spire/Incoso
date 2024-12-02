import HeroBanner from '../component/HeroBanner';
import AnalyticsSection from '../component/AnalyticsSection';
import ServiceSection from '../component/ServiceSection';

export default function Home() {
  return (
    <>
        <HeroBanner />
        <AnalyticsSection />
        <ServiceSection />
        {/* <ReviewSection/> */}
        {/* <Newsletter /> */}
    </>
  );
}
