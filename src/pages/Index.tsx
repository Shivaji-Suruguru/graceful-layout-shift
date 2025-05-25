
import React from 'react';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="relative">
          {/* First Section - About Us */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-16 text-2xl md:text-3xl font-bold relative flex justify-center items-center">
              <h4>About Us</h4>
            </div>    
            <div className="w-full md:w-1/2 relative p-6 md:p-12 px-6 sm:px-12 md:px-16 lg:px-32 xl:px-64">
              <h4 className="text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis enim molestiae aspernatur ab tempora perferendis dolorum rem a cum. Repudiandae laudantium illo eligendi error quidem doloribus rem deleniti nam mollitia quo! Enim tenetur nihil doloremque recusandae.
              </h4>
            </div>
          </div>

          {/* Second Section - Video and Content */}
          <div className="relative mt-12 md:mt-20 z-20">
            <div className="flex flex-col md:flex-row md:h-[70dvh]">
              {/* Video Section */}
              <div className="relative w-full md:w-auto">
                <div className="w-full md:w-3/4 p-8 md:p-16 text-xl md:text-3xl font-bold relative flex justify-center bg-emerald-600 md:px-20 lg:px-40 xl:px-80 flex-col">
                  <h4>Our customers have trusted in us for over thirty years</h4>
                </div>    
                <div className="bg-emerald-600 w-full relative md:absolute z-10">
                  <iframe
                    className="px-4 sm:px-8 md:px-16 lg:px-32 shadow-lg w-full md:w-[80dvw] h-[300px] sm:h-[400px] md:h-[70dvh] pb-4 md:pb-8"
                    src="https://www.youtube.com/embed/XJ9fq-PYCWk?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* What We Give Section */}
              <div className="flex flex-col w-full md:w-2/4 relative p-8 md:p-12 mt-4 md:mt-0 z-20">
                <h4 className="text-xl font-semibold mb-4">
                  What we give
                </h4>
                <h4 className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis enim molestiae aspernatur ab tempora perferendis dolorum rem a cum. Repudiandae laudantium illo eligendi error quidem doloribus rem deleniti nam mollitia quo! Enim tenetur nihil doloremque recusandae.
                </h4>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="relative mt-12 md:mt-0 flex hidden md:block">
            <div className="w-full flex justify-center md:justify-end md:absolute md:-mt-24 md:pt-0 lg:pt-80 z-10 md:h-[80dvh]">
              <div className="w-1/2 mt-40 pl-24 md:pl-0 pr-24">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officiis repellat similique dolorum rem quam consequatur velit, qui laboriosam ut quod tempore numquam suscipit tenetur ullam repellendus sint molestias unde assumenda quae! Aliquam pariatur quasi veritatis quidem. Ipsam quia tempore dolores. Consequuntur similique aperiam a sunt rerum eius soluta praesentium qui beatae laboriosam velit, impedit voluptate, nihil quasi commodi. Pariatur est nostrum ea, optio tempora suscipit at? Accusamus ut eligendi fuga explicabo voluptate fugit unde doloribus voluptatibus esse aut reiciendis necessitatibus dicta aperiam quis, illo aliquid optio repellat. Numquam veritatis saepe aut quidem voluptatum doloremque iusto eaque obcaecati tempore ea doloribus quo alias impedit culpa voluptatibus, repudiandae in nemo accusamus ad officia corporis illum? Eum praesentium iure accusamus consequatur laudantium enim pariatur repellendus expedita iste ullam temporibus rerum quisquam soluta quos, magnam quo beatae doloribus facilis, ipsam officiis repudiandae asperiores odit. Quod, harum delectus itaque veniam nisi molestiae quae, vitae nam placeat quam ipsum odio inventore? Facere officia ipsa temporibus ullam molestiae eos facilis eligendi voluptate, hic itaque et aspernatur voluptas blanditiis asperiores dolorem omnis exercitationem, delectus nihil. Eveniet at amet, vero est rem iste dolorum accusamus, voluptas eos similique animi perferendis. Non quam ab nisi animi ipsum laboriosam sit?
                </p>
                <div className="w-full md:w-auto flex justify-start p-12">
                  <button className="bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition w-full sm:w-auto">
                    Apply Today
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 px-6 sm:px-12 py-12 md:py-16 lg:py-24 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center w-full max-w-lg sm:max-w-xl md:max-w-none md:w-[60%] lg:w-[50%] xl:w-[40dvw] mx-4 md:mx-0 shadow-sm">
                <div className="flex-1">
                  <p className="text-lg md:text-xl lg:text-2xl italic text-emerald-800 mb-4 leading-relaxed">
                    &ldquo;The secret of life is honesty and fair dealing. If you can fake that, you&apos;ve got it made.&rdquo;
                  </p>
                  <p className="text-gray-500 text-sm font-semibold">— Jane Customer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="block md:hidden">
            <div className="flex flex-col">
              {/* Testimonial card first on mobile */}
              <div className="bg-gray-100 px-6 py-8 flex flex-col gap-6 items-start w-full shadow-sm">
                <div className="flex-1">
                  <p className="text-lg italic text-emerald-800 mb-4 leading-relaxed">
                    &ldquo;The secret of life is honesty and fair dealing. If you can fake that, you&apos;ve got it made.&rdquo;
                  </p>
                  <p className="text-gray-500 text-sm font-semibold">— Jane Customer</p>
                </div>
              </div>
              
              {/* Main content second on mobile */}
              <div className="w-full px-6 py-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed officiis repellat similique dolorem rem quam consequatur velit, qui laboriosam ut quod tempore numquam suscipit tenetur ullam repellendus sint molestias unde assumenda quae! Aliquam pariatur quasi veritatis quidem. Ipsam quia tempore dolores. Consequuntur similique aperiam a sunt rerum eius soluta praesentium qui beatae laboriosam velit, impedit voluptate, nihil quasi commodi. Pariatur est nostrum ea, optio tempora suscipit at? Accusamus ut eligendi fuga explicabo voluptate fugit unde doloribus voluptatibus esse aut reiciendis necessitatibus dicta aperiam quis, illo aliquid optio repellat. Numquam veritatis saepe aut quidem voluptatum doloremque iusto eaque obcaecati tempore ea doloribus quo alias impedit culpa voluptatibus, repudiandae in nemo accusamus ad officia corporis illum? Eum praesentium iure accusamus consequatur laudantium enim pariatur repellendus expedita iste ullam temporibus rerum quisquam soluta quos, magnam quo beatae doloribus facilis, ipsam officiis repudiandae asperiores odit. Quod, harum delectus itaque veniam nisi molestiae quae, vitae nam placeat quam ipsum odio inventore? Facere officia ipsa temporibus ullam molestiae eos facilis eligendi voluptate, hic itaque et aspernatur voluptas blanditiis asperiores dolorem omnis exercitationem, delectus nihil. Eveniet at amet, vero est rem iste dolorum accusamus, voluptas eos similique animi perferendis. Non quam ab nisi animi ipsum laboriosam sit?
                </p>
                <div className="w-full flex justify-start mt-6">
                  <button className="bg-emerald-700 text-white px-6 py-3 rounded-full hover:bg-emerald-800 transition w-full">
                    Apply Today
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Spacing */}
          <div className="h-[20vh] sm:h-[10vh] md:h-[90vh]"></div>
        </div>
        
        <ServicesSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
