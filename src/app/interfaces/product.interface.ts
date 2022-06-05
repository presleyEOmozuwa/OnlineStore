export interface Product 
{
    id: string;
    name: string;
    images: string[];
    description: string;
}

export interface SelectedProduct
{
    stripeProductId: string
    priceId: string;
    prodName: string;
    price: number
    description: string;
    imageUrl: string;
}

export interface CourseInfo
{
    courseId: string
    courseName: string;
    description: string;
    image: string;
}

export interface CourseModel
{
    courseId: string
    priceId: string;
    courseName: string;
    price: number
    description: string;
    image: string;
}

export interface CartModel
{
    itemCount: number;
    courses: CourseModel[];
}

export interface StoreData
{
    courseCount: number;
}




