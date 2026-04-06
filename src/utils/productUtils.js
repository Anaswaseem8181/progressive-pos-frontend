export const filterProducts = (products, searchTerm) => {
    if (!searchTerm) return products;
    const term = searchTerm.toLowerCase();
    return products.filter(
        (p) =>
            p.name.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term)
    );
};
