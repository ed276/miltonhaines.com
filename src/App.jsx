
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyThisWorks from './components/WhyThisWorks';
import FeatureMosaic from './components/FeatureMosaic';
import ProcessTimeline from './components/ProcessTimeline';
import TraditionalSeo from './components/TraditionalSeo';
import SeoAiDiscovery from './components/SeoAiDiscovery';
import EfficiencyTable from './components/EfficiencyTable';
import Portfolio from './components/Portfolio';
import PricingEngine from './components/PricingEngine';
import Contact from './components/Contact';
import QnAModal from './components/QnAModal';
import Footer from './components/Footer';

function App() {
    const [isQnAOpen, setIsQnAOpen] = useState(false);

    return (
        <div className="bg-void min-h-screen text-white font-sans overflow-x-hidden selection:bg-primary-gold selection:text-void">
            <Header />

            <main>
                <Hero />
                <WhyThisWorks />
                <EfficiencyTable />
                <FeatureMosaic />
                <ProcessTimeline />
                <Portfolio />
                <TraditionalSeo />
                <SeoAiDiscovery />
                <PricingEngine />
                <Contact />
            </main>

            <Footer onOpenQnA={() => setIsQnAOpen(true)} />

            <QnAModal isOpen={isQnAOpen} onClose={() => setIsQnAOpen(false)} />
        </div>
    );
}

export default App;
