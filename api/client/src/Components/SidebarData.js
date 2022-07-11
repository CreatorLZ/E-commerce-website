import React from 'react'
import { CardGiftcardOutlined, CategoryOutlined,  FaceRounded, FilterList, KeyboardArrowDown, KeyboardArrowUp, LocationCity, LocationSearchingRounded, PermIdentityOutlined, PermIdentityRounded, Phone, ShoppingCart, StorefrontTwoTone,   } from "@material-ui/icons";


export const SidebarData = [
    {
        title: "Account",
        path: '#',
        icon: <PermIdentityOutlined />,
        iconClosed: <KeyboardArrowDown/>,
        iconOpened: <KeyboardArrowUp/>,
        subNav: [
            {
                title: "Sign-In",
                path: 'login',
                icon: <FaceRounded />,
            },
            {
                title: "Sign-Up",
                path: 'register',
                icon: <PermIdentityRounded />,
            },
        ]
    },
    {
        title: "Categories",
        path: '#',
        icon: <CategoryOutlined />,
        iconClosed: <KeyboardArrowDown/>,
        iconOpened: <KeyboardArrowUp/>,
        subNav: [
            {
                title: "Phones",
                path: "products/phones",
                
            },
            {
                title: "Laptops",
                path: 'products/laptops',
                
            },
            {
                title: "Kitchen",
                path:"products/kitchen" 
                
            },
            {
                title: "Caps",
                path: 'products/caps',
                
            },
            {
                title: "Belts",
                path: 'products/belts',
                
            },
            {
                title: "Shoes",
                path: 'products/shoes',
                
            },
            {
                title: "Bags",
                path: 'products/bags',
                
            },
            {
                title: "Accessories",
                path: 'products/accessories',
                
            },
            {
                title: "Jewelries",
                path: 'products/jewelries',
                
            },
            {
                title: "Perfumes",
                path: 'products/perfumes',
                
            },
        ]
    },

    {
        title: 'Cart',
        path: 'cart',
        icon: <ShoppingCart />,
    },
    {
        title: 'Order tracking',
        path: '#',
        icon: <LocationSearchingRounded />,
    },
    {
        title: 'Wishlist',
        path: '#',
        icon: <FilterList />,
    },
    {
        title: 'Customer Service',
        path: '#',
        icon: <Phone />,
    },
    {
        title: 'Sell',
        path: '#',
        icon: <StorefrontTwoTone />,
    },
    {
        title: 'Gift cards',
        path: '#',
        icon: <CardGiftcardOutlined />,

    },
    {
        title: 'Delivery Location',
        path: '#',
        icon: <LocationCity />,
    },
]