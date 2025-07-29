import Footer from '@/components/common/Footer';

const SponsorsPage = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white ">

            <div className="relative pb-20  z-10 min-h-screen flex flex-col">
                <h1 className="text-center text-4xl md:text-6xl lg:text-6xl font-light text-black mb-2 leading-tight  mt-26 md:mt-32 lg:mt-32"> Sponsorship Program </h1>

                {/* Sponsorship Tier Details */}
                <div className="container mx-auto px-4 mt-4 md:mt-8 lg:mt-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
                            {/* Bronze Tier */}
                            <div className="bg-white border-[#247F4A] p-8 text-center">
                                <h3 className="text-2xl font-bold text-amber-700 mb-4">BRONZE</h3>
                                <div className="text-4xl font-bold text-amber-700 mb-6">$300 – $999</div>
                                <p className="text-black mb-6 leading-relaxed">
                                    Ideal for local businesses and emerging brands. Enjoy branding opportunities and recognition while supporting student-driven engineering.
                                </p>
                                <ul className="text-left text-black space-y-2">
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Small logo on promotional materials and team apparel</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Acknowledgment during team events and competition presentations</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Recognition on UA‑RAD’s website and social media</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Access to team resume bank</li>
                                </ul>
                            </div>

                            {/* Vertical Separator 1 */}
                            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-black"></div>

                            {/* Silver Tier */}
                            <div className="bg-white border-[#247F4A] p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-600 mb-4">SILVER</h3>
                                <div className="text-4xl font-bold text-gray-600 mb-6">$1,000 – $2,499</div>
                                <p className="text-black mb-6 leading-relaxed">
                                    Designed for companies committed to student advancement, with premium visibility and access to talent.
                                </p>
                                <ul className="text-left text-black space-y-2">
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Medium logo on team apparel and promotional materials</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Acknowledgment during competition presentations and team events</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> One invitation to showcase events and demo days</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Group thank-you post on website and social media</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Opportunity to share promotional materials at events</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Access to team resume bank</li>
                                </ul>
                            </div>

                            {/* Vertical Separator 2 */}
                            <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-black"></div>

                            {/* Gold Tier */}
                            <div className="bg-white border-[#247F4A] p-8 text-center">
                                <h3 className="text-2xl font-bold text-yellow-600 mb-4">GOLD</h3>
                                <div className="text-4xl font-bold text-yellow-600 mb-6">$2,500+</div>
                                <p className="text-black mb-6 leading-relaxed">
                                    Our premier sponsorship level offering maximum exposure, exclusivity, and unmatched recruiting opportunities.
                                </p>
                                <ul className="text-left text-black space-y-2">
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Prominent logo on UAVs, team apparel, and all promotional materials</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Featured acknowledgment at competitions and events</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Two invitations to showcase events and demo days</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Dedicated sponsor spotlight post on social media</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Opportunity to display booth or banner at UA‑RAD events</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> First right of renewal for exclusive Gold tier</li>
                                    <li className="flex items-center"><span className="text-green-600 mr-2">✓</span> Access to team resume bank</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Current Sponsors Section */}
                <div className="container mx-auto px-4 mt-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white  p-8">
                            <div className="flex items-center justify-center mb-12">
                                <div className="flex-1 border-t border-black mr-4"></div>
                                <h2 className="text-3xl font-light text-black whitespace-nowrap">Our Sponsors</h2>
                                <div className="flex-1 border-t border-black ml-4"></div>
                            </div>
                            
                            {/* Gold Sponsors */}
                            <div className="mb-12">
                                <div className="flex items-center justify-center mb-6">
                                    <h3 className="text-2xl font-bold text-yellow-600 whitespace-nowrap">GOLD SPONSORS</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Example Gold Sponsor - Replace with actual sponsors */}
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-32 h-32 mx-auto mb-4 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-3 text-lg">Company Name</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            A leading aerospace engineering company specializing in drone technology and autonomous systems. 
                                            Committed to advancing student innovation and engineering education.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-32 h-32 mx-auto mb-4 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-3 text-lg">Company Name</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            A leading aerospace engineering company specializing in drone technology and autonomous systems. 
                                            Committed to advancing student innovation and engineering education.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-32 h-32 mx-auto mb-4 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-3 text-lg">Company Name</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Global technology leader in robotics and automation solutions. 
                                            Supporting the next generation of engineering talent through strategic partnerships.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Silver Sponsors */}
                            <div className="mb-12">
                                <div className="flex items-center pt-10 justify-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-600 whitespace-nowrap">SILVER SPONSORS</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {/* Example Silver Sponsor - Replace with actual sponsors */}
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-28 h-28 mx-auto mb-4 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-3 text-lg">Company Name</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Innovative software solutions provider for the aerospace industry. 
                                            Dedicated to fostering student engineering excellence and technological advancement.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-28 h-28 mx-auto mb-4 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-3 text-lg">Company Name</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Manufacturing leader in precision engineering components. 
                                            Supporting student competitions to develop future industry professionals.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-28 h-28 mx-auto mb-4 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-3 text-lg">Company Name</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Research and development firm focused on cutting-edge aerospace technologies. 
                                            Committed to educational partnerships and student mentorship programs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bronze Sponsors */}
                            <div>
                                <div className="flex items-center pt-10 justify-center mb-6">
                                    <h3 className="text-2xl font-bold text-amber-700 whitespace-nowrap">BRONZE SPONSORS</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {/* Example Bronze Sponsors - Replace with actual sponsors */}
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-20 h-20 mx-auto mb-3 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-2 text-sm">Company Name</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Local engineering firm supporting student innovation and community development.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-20 h-20 mx-auto mb-3 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-2 text-sm">Company Name</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Technology startup focused on sustainable aerospace solutions and student partnerships.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-20 h-20 mx-auto mb-3 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-2 text-sm">Company Name</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Educational technology provider committed to advancing engineering education.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <img 
                                            src="/branding/UARAD_LOGO_DARK.png" 
                                            alt="Company Logo" 
                                            className="w-20 h-20 mx-auto mb-3 object-contain"
                                        />
                                        <h4 className="font-semibold text-black mb-2 text-sm">Company Name</h4>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            Consulting firm specializing in aerospace engineering and student development programs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="text-center mt-12 pt-8 ">
                                <div className="bg-white border-2 border-[#247F4A] p-8 rounded-lg">
                                    <p className="text-lg text-black mb-8 leading-relaxed max-w-4xl mx-auto">
                                        Supporting UA‑RAD is an investment in the future of engineering talent. Our members gain hands-on experience in UAV design, electronics, and systems integration, while sponsors connect early with highly skilled students solving real-world challenges. Your brand will be prominently displayed on our UAVs, at national competitions, and across our digital platforms, reaching thousands of students and professionals annually. We welcome both in-kind contributions and financial support, with custom partnerships available.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a href="mailto:UARAD@gmail.ca?subject=Sponsorship Inquiry" className="inline-block bg-[#247F4A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a5f3a] transition-colors">
                                            Support Us Today
                                        </a>
                                        <a href="/sponsors/contact" className="inline-block bg-white text-[#247F4A] border-2 border-[#247F4A] px-8 py-3 rounded-lg font-semibold hover:bg-[#247F4A] hover:text-white transition-colors">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default SponsorsPage;