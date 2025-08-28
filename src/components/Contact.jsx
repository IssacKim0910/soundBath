const InstagramIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
  </svg>
);

export default function Contact() {
  return (
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 items-center p-8">
        {/* Left: Map */}
        <div className="w-full h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.14229379501!2d-73.98784668459308!3d40.75889497932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c64801b9%3A0x42473925845545b3!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1614973045222!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Cafe Location"
          ></iframe> */}
        </div>

        {/* Right: Info */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Find Us</h2>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-amber-400">Operating Hours</h3>
            <p>Mon - Fri: 7:00 AM - 7:00 PM</p>
            <p>Sat - Sun: 8:00 AM - 8:00 PM</p>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2 text-amber-400">Address</h3>
            <p>123 Coffee Bean Lane, Roastville, CA 90210</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="hover:text-amber-400 transition-colors"><InstagramIcon /></a>
              <a href="#" className="hover:text-amber-400 transition-colors"><FacebookIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
