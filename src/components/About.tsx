
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 bg-gray-200 rounded-lg mx-auto mb-8 md:mb-0"></div>
            </div>
            
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful designs.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while planning my next 
                creative project.
              </p>

              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-800">Location:</span>
                  <span className="text-gray-600 ml-2">San Francisco, CA</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Experience:</span>
                  <span className="text-gray-600 ml-2">5+ Years</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Availability:</span>
                  <span className="text-gray-600 ml-2">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
