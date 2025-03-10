import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Elegant clinic reception"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            {`We're here to answer your questions and help you book your
            consultation`}
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-serif text-gray-800 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif text-gray-800 mb-2">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Elegance Aesthetics Clinic
                  </p>
                  <p className="text-gray-600 mb-1">
                    42 Harmony Gardens, Jubilee Hills
                  </p>
                  <p className="text-gray-600">Hyderabad, Telangana 500033</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-gray-800 mb-2">
                    Opening Hours
                  </h3>
                  <p className="text-gray-600 mb-1">
                    Monday - Friday: 10:00 AM - 7:00 PM
                  </p>
                  <p className="text-gray-600 mb-1">
                    Saturday: 10:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-gray-800 mb-2">
                    Contact Details
                  </h3>
                  <p className="text-gray-600 mb-1">Phone: +91 40 1234 5678</p>
                  <p className="text-gray-600 mb-1">
                    Email: info@eleganceaesthetics.in
                  </p>
                  <p className="text-gray-600">WhatsApp: +91 98765 43210</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-gray-800 mb-2">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-2/3 bg-gray-50 p-8">
              <h2 className="text-3xl font-serif text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                  >
                    <option value="">Select a service</option>
                    <option value="facial-treatments">Facial Treatments</option>
                    <option value="injectables">Injectables & Fillers</option>
                    <option value="laser-treatments">Laser Treatments</option>
                    <option value="body-contouring">Body Contouring</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition duration-300 font-light tracking-wide"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">
            Find Us
          </h2>
          <div className="w-full h-[400px] bg-gray-200 relative">
            {/* Replace with actual map component or iframe */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">
                Map will be displayed here. You can integrate Google Maps or any
                other map service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I schedule a consultation?",
                answer:
                  "You can schedule a consultation by filling out our contact form, calling our clinic directly, or sending us an email. Our team will get back to you within 24 hours to confirm your appointment.",
              },
              {
                question: "How do I schedule a consultation?",
                answer:
                  "You can schedule a consultation by filling out our contact form, calling our clinic directly, or sending us an email. Our team will get back to you within 24 hours to confirm your appointment.",
              },
              {
                question: "Do you offer virtual consultations?",
                answer:
                  "Yes, we offer virtual consultations for clients who are unable to visit our clinic in person. These consultations are conducted via secure video conferencing and provide an opportunity to discuss your concerns and treatment options with our specialists.",
              },
              {
                question: "What should I expect during my first visit?",
                answer:
                  "During your first visit, you'll meet with one of our specialists who will discuss your aesthetic goals and concerns. We'll perform a thorough assessment of your skin or areas of concern, review your medical history, and recommend a personalized treatment plan. The consultation typically takes 45-60 minutes.",
              },
              {
                question: "Is there parking available at the clinic?",
                answer:
                  "Yes, we offer complimentary parking for all our clients in the designated parking area adjacent to our clinic building. Additionally, there is ample street parking available in the vicinity.",
              },
              {
                question: "Do you accept insurance for treatments?",
                answer:
                  "As most aesthetic procedures are considered elective, they are typically not covered by insurance. However, we offer various financing options and payment plans to make our treatments more accessible. Our team can provide detailed information during your consultation.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">
            Ready to Begin Your Transformation?
          </h2>
          <p className="mb-8 text-gray-300">
            Our team of experts is ready to guide you through your aesthetic
            journey. Contact us today to schedule your personalized
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services"
              className="bg-transparent border border-white text-white px-8 py-3 hover:bg-white hover:text-gray-900 transition duration-300 font-light tracking-wide inline-block"
            >
              Explore Our Services
            </Link>
            <a
              href="tel:+914012345678"
              className="bg-white text-gray-900 px-8 py-3 hover:bg-opacity-90 transition duration-300 font-light tracking-wide inline-block"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
