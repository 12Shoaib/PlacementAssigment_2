import { atom } from "recoil";


export const isClickedValue = atom({
    key:'isClicked',
    default: []
})

export const SearchValue = atom({
    key:'Search',
    default : []
})

export const atomState = atom({
    key: 'Shoaib',
    default: [
        {
            Name: 'Mathew Jones',
            firstName: 'Mathew',
            lastName: 'Jones',
            gender: 'Male',
            Dob: '02.04.1945',
            Email:'matt@gmial.com',
            isLogIn : false,
            userName: 'Mathew90',
            phone: 7856483822,
            country: 'Usa',
            city : 'Washington',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 1656,
            Adress: '1656 Newton Street Northwest, Washington AR 20010'
        },
        {
            Name: 'Robert Kawasaki',
            Email:'Kawsaaki1@gmial.com',
            firstName: 'Robert',
            lastName: 'Kawasaki',
            gender: 'Male',
            Dob: '30.06.1950',
            isLogIn : false,
            userName: 'Rober34',
            phone: 9086483822,
            country: 'Usa',
            city : 'Arizona',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 1101,
            Adress: '1101 West 48th Street, Arizona GA 31405'

        },
        {
            Name: 'Gennie Watson',
            Email:'gennie@gmail.com',
            firstName: 'Gennie',
            lastName: 'Watson',
            gender: 'female',
            Dob: '20.09.1990',
            isLogIn : false,
            userName: 'Gennie234',
            phone: 8896483822,
            country: 'Usa',
            city : 'Fayetteville',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 604567,
            Adress: '4960 Maple Grove Drive, Fayetteville AR 72764+'

        },
        {
            Name: 'Freddy Chris',
            Email:'chris@gmail.com',
            firstName: 'Freddy',
            lastName: 'Chris',
            gender: 'Male',
            Dob: '03.12.1995',
            isLogIn : false,
            userName: 'Chris234',
            phone: 5656483822,
            country: 'Usa',
            city : 'Needham',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 233423 ,
            Adress: '20 Garfield Street, Needham MA 02492'

        },
        {
            Name: 'Ellina Cruez',
            Email:'elina@gmail.com',
            firstName: 'Ellina',
            lastName: 'Cruez',
            gender: 'Female',
            Dob: '09.09.1990',
            isLogIn : false,
            userName: 'Ellina12',
            phone: 8766483822,
            country: 'Usa',
            city : 'Arvada',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 164423 ,
            Adress: '16031 West 63rd Lane, Arvada CO 80403'

        },
        {
            Name: 'Mathew Jones',
            Email:'matt@gmial.com',
            firstName: 'Mathew',
            lastName: 'Jones',
            gender: 'Male',
            Dob: '02.04.1945',
            isLogIn : false,
            userName: 'Mathew90',
            phone: 7856483822,
            country: 'Usa',
            city : 'Washington',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 1656,
            Adress: '1656 Newton Street Northwest, Washington AR 20010'

        },
        {
            Name: 'Robert Kawasaki',
            Email:'Kawsaaki1@gmial.com',
            firstName: 'Robert',
            lastName: 'Kawasaki',
            gender: 'Male',
            Dob: '30.06.1950',
            isLogIn : false,
            userName: 'Rober34',
            phone: 9086483822,
            country: 'Usa',
            city : 'Arizona',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 1101,
            Adress: '1101 West 48th Street, Arizona GA 31405'

        },
        {
            Name: 'Gennie Watson',
            Email:'gennie@gmail.com',
            isLogIn : false,
            firstName: 'Gennie',
            lastName: 'Watson',
            gender: 'female',
            Dob: '20.09.1990',
            userName: 'Gennie234',
            phone: 8896483822,
            country: 'Usa',
            city : 'Fayetteville',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 604567,
            Adress: '4960 Maple Grove Drive, Fayetteville AR 72764+'


        },
        {
            Name: 'Freddy Chris',
            Email:'chris@gmail.com',
            firstName: 'Freddy',
            lastName: 'Chris',
            gender: 'Male',
            Dob: '03.12.1995',
            isLogIn : false,
            userName: 'Chris234',
            phone: 5656483822,
            country: 'Usa',
            city : 'Needham',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 233423 ,
            Adress: '20 Garfield Street, Needham MA 02492'

        },
        {
            Name: 'Ellina Cruez',
            Email:'elina@gmail.com',
            firstName: 'Ellina',
            lastName: 'Cruez',
            gender: 'Female',
            Dob: '09.09.1990',
            isLogIn : false,
            userName: 'Ellina12',
            phone: 8766483822,
            country: 'Usa',
            city : 'Arvada',
            street: 'Loream Epsum Is The Industry Standard',
            zipcode: 164423 ,
            Adress: '16031 West 63rd Lane, Arvada CO 80403'

        },
    ],
})

export const clickedIndexValue = atom({
    key:'index',
    default:null,
})