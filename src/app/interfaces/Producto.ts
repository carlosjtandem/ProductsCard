export interface Producto {
    id: number,
    title: string,
    description: string,
    price: number,
    images: string[],
    category: Category
}

interface Category {
    name: string
}
