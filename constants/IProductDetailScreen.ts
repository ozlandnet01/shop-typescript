import { StackNavigationProp } from '@react-navigation/stack';

export default interface IProductDetailScreen{
    id: string
    ownerId: string
    title: string
    imageUrl: string
    description: string
    price: number
}