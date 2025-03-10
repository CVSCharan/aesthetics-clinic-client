import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "facial-treatments",
      title: "Facial Treatments",
      description:
        "Our facial treatments are customized to address your specific skin concerns, from anti-aging to acne management.",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      treatments: [
        { name: "Signature Facial", duration: "60 min", price: "₹9,500" },
        { name: "Hydrating Facial", duration: "75 min", price: "₹12,000" },
        { name: "Anti-Aging Facial", duration: "90 min", price: "₹15,000" },
        { name: "Acne Treatment", duration: "60 min", price: "₹10,500" },
      ],
    },
    {
      id: "injectables",
      title: "Injectables & Fillers",
      description:
        "Subtle enhancements to restore volume and reduce the appearance of fine lines and wrinkles.",
      image:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      treatments: [
        { name: "Botox", duration: "30 min", price: "From ₹25,000" },
        { name: "Dermal Fillers", duration: "45 min", price: "From ₹35,000" },
        { name: "Lip Enhancement", duration: "30 min", price: "From ₹28,000" },
        {
          name: "Jawline Contouring",
          duration: "45 min",
          price: "From ₹40,000",
        },
      ],
    },
    {
      id: "laser-treatments",
      title: "Laser Treatments",
      description:
        "Advanced laser technology to address skin texture, tone, and unwanted hair.",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      treatments: [
        {
          name: "Laser Skin Resurfacing",
          duration: "60 min",
          price: "₹28,000",
        },
        { name: "IPL Photofacial", duration: "45 min", price: "₹20,000" },
        {
          name: "Laser Hair Removal",
          duration: "Varies",
          price: "From ₹12,000",
        },
        {
          name: "Vascular Lesion Treatment",
          duration: "30 min",
          price: "₹16,000",
        },
      ],
    },
    {
      id: "body-contouring",
      title: "Body Contouring",
      description:
        "Non-invasive procedures to sculpt and define your body contours.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      treatments: [
        { name: "CoolSculpting", duration: "60 min", price: "From ₹50,000" },
        {
          name: "Ultrasound Fat Reduction",
          duration: "45 min",
          price: "₹32,000",
        },
        { name: "Cellulite Treatment", duration: "60 min", price: "₹24,000" },
        { name: "Skin Tightening", duration: "45 min", price: "₹28,000" },
      ],
    },
  ];

  // Rest of the component remains unchanged
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Elegant spa treatment"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Discover our comprehensive range of premium aesthetic treatments
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-12`}
              >
                <div className="w-full md:w-1/2 relative h-[300px] md:h-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-serif text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="bg-gray-50 p-6">
                    <h3 className="text-xl font-serif text-gray-800 mb-4">
                      Available Treatments
                    </h3>
                    <div className="space-y-3">
                      {service.treatments.map((treatment, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center border-b border-gray-200 pb-2"
                        >
                          <div>
                            <p className="font-medium text-gray-800">
                              {treatment.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {treatment.duration}
                            </p>
                          </div>
                          <p className="text-gray-800">{treatment.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="mb-8 text-gray-300">
            Our expert team is ready to create a personalized treatment plan
            tailored to your unique needs and goals.
          </p>
          <Link
            href="/contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-sm hover:bg-opacity-90 transition duration-300 font-light tracking-wide inline-block"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
