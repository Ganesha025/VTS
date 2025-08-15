window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('HeaderData').innerHTML = `
      <div class="container-width px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
              <img src="https://www.vetritechnologysolutions.in/assets/vtslogo-zrKmCM12.jpg" alt="VTS Logo" class="w-full h-full object-cover">
            </div>
            <div>
              <h1 class="text-xl font-bold text-gray-900">Vetri Technology</h1>
              <p class="text-sm text-brandNeutral font-medium">Solutions</p>
            </div>
          </div>
          
          <nav class="hidden lg:flex items-center space-x-8">
            <a href="#programs" class="text-gray-700 hover:text-brandGreen font-medium transition-colors">Programs</a>
            <a href="pages/about.html" class="text-gray-700 hover:text-brandGreen font-medium transition-colors">About</a>
            <a href="#contact" class="bg-gradient-to-r from-brandGreen to-brandLightGreen text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all">
              Get Started
            </a>
          </nav>
          
          <button class="lg:hidden p-2" id="mobile-toggle" aria-label="Toggle menu">
            <!-- Hamburger icon (shown by default) -->
            <svg class="w-6 h-6" id="mobile-open-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <!-- Close icon (hidden by default) -->
            <svg class="w-6 h-6 hidden" id="mobile-close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white shadow-lg rounded-lg mt-4 p-6 absolute left-6 right-6 z-50">
          <div class="flex flex-col space-y-4">
            <a href="#programs" class="text-gray-700 hover:text-brandGreen font-medium transition-colors py-2">Programs</a>
            <a href="pages/about.html" class="text-gray-700 hover:text-brandGreen font-medium transition-colors py-2">About</a>
            <a href="#contact" class="bg-gradient-to-r from-brandGreen to-brandLightGreen text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all text-center">
              Get Started
            </a>
          </div>
        </div>
      </div>
    `;

    // Mobile menu toggle functionality
    const toggleBtn = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('mobile-open-icon');
    const closeIcon = document.getElementById('mobile-close-icon');
    
    let menuOpen = false;
    
    toggleBtn.addEventListener('click', () => {
      menuOpen = !menuOpen;
      
      // Toggle menu visibility
      mobileMenu.classList.toggle('hidden');
      
      // Toggle icons
      openIcon.classList.toggle('hidden', menuOpen);
      closeIcon.classList.toggle('hidden', !menuOpen);
      
      // Optional: prevent body scroll when menu is open
      document.body.style.overflow = menuOpen ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link (optional)
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
        menuOpen = false;
      });
    });

    // Footer remains the same as your original
    document.getElementById('FooterData').innerHTML = `
      <div class="container-width px-6">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-12 h-12 rounded-xl overflow-hidden">
                <img src="https://www.vetritechnologysolutions.in/assets/vtslogo-zrKmCM12.jpg" alt="VTS Logo" class="w-full h-full object-cover">
              </div>
              <div>
                <h3 class="text-xl font-bold">Vetri Technology Solutions</h3>
                <p class="text-gray-400 text-sm">Empowering careers through technology</p>
              </div>
            </div>
            <p class="text-gray-400 leading-relaxed mb-6">
              India's premier IT training institute offering comprehensive programs with 100% placement assurance. 
              Transform your career with industry-relevant skills and expert mentorship.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brandGreen transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brandGreen transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold text-lg mb-4">Programs</h4>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Cloud Computing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold text-lg mb-4">Contact</h4>
            <ul class="space-y-2 text-gray-400">
              <li>Surandai, Tamil Nadu</li>
              <li>info@vetritechnology.com</li>
              <li>+91 12345 67890</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Vetri Technology Solutions. All rights reserved.</p>
        </div>
      </div>
    `;
});