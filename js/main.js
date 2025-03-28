// Enhanced Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('button[class*="md:hidden"]');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu fixed inset-0 bg-white z-50 hidden';
    mobileMenu.innerHTML = `
        <div class="p-4">
            <button class="absolute top-4 right-4 p-2">
                <i class="fas fa-times text-2xl"></i>
            </button>
            <div class="flex flex-col space-y-6 mt-16 px-4">
                <a href="#model-s" class="text-lg font-medium py-2 border-b border-gray-100">Model S</a>
                <a href="#model-3" class="text-lg font-medium py-2 border-b border-gray-100">Model 3</a>
                <a href="#model-x" class="text-lg font-medium py-2 border-b border-gray-100">Model X</a>
                <a href="#model-y" class="text-lg font-medium py-2 border-b border-gray-100">Model Y</a>
                <a href="#cybertruck" class="text-lg font-medium py-2 border-b border-gray-100">Cybertruck</a>
                <a href="#" class="text-lg font-medium py-2 border-b border-gray-100">Shop</a>
                <a href="#" class="text-lg font-medium py-2">Account</a>
            </div>
        </div>
    `;

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        document.body.appendChild(mobileMenu);
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    // Close mobile menu
    mobileMenu.querySelector('button').addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});