function filterProducts(type) {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        // luôn hiện nếu là all
        if (type === 'all') {
            product.style.display = 'block';
            return;
        }

        // luôn hiện nếu là threeofthem
        if (product.classList.contains('Threeofthem')) {
            product.style.display = 'block';
            return;
        }

        // hiện nếu đúng loại
        if (product.classList.contains(type)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
function handleFilter(button, type) {
    // đổi màu filter
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add(
            'bg-white',
            'dark:bg-[#3a222e]',
            'border',
            'border-[#f3e7ed]',
            'dark:border-[#4a2d3c]'
        );
    });

    button.classList.remove(
        'bg-white',
        'dark:bg-[#3a222e]',
        'border',
        'border-[#f3e7ed]',
        'dark:border-[#4a2d3c]'
    );
    button.classList.add('bg-primary', 'text-white');

    // gọi filter sản phẩm
    filterProducts(type);
}