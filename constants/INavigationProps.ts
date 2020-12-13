import { RouteProp } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import IProductDetailScreen from './IProductDetailScreen';

export type RootStackParamList = {
    ProductDetail: {id: string
                    ownerId: string
                    title: string
                    imageUrl: string
                    description: string
                    price: number
                    }
}

export  type ProductDetailScreenProp = StackScreenProps<RootStackParamList, 'ProductDetail'>

export type Props = {
    ProductDetail: ProductDetailScreenProp
}