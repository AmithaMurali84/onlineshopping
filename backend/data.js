import bcrypt from 'bcryptjs';
const data={
    users: [
        {
          name: 'amitha',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'murali',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [
        {
            
            name: 'Elenor',
            category:'dress',
            image:'/images/p1.jpg',
            price:135,
            countInStock:10,
            brand:'AZAZIE',
            rating:5,
            numReview:16,
            description:'high quality product',
        },
        {
    
            name: 'Tutu BD',
            category:'dress',
            image:'/images/p2.jpg',
            price:205,
            countInStock:11,
            brand:'AZAZIE',
            rating:4,
            numReview:26,
            description:'high quality product',
        },
        {
            
            name: 'Yarrow BD',
            category: 'dress',
            image:'/images/p3.jpg',
            price:215,
            countInStock:6,
            brand:'AZAZIE',
            rating:4,
            numReview:21,
            description:'high quality product',
        },

        {
            
            name: 'Florida',
            category:'Jumpsuit',
            image:'/images/p4.jpg',
            price:185,
            countInStock:8,
            brand:'AZAZIE',
            rating:4.5,
            numReview:9,
            description:'high quality product',
        },
        {
           
            name: 'EMarchioness BD',
            category:'dress',
            image:'/images/p5.jpg',
            price:156,
            countInStock:0,
            brand:'AZAZIE',
            rating:5,
            numReview:22,
            description:'high quality product',
        },
        {
           
            name: 'Sparrow BD',
            category:'dress',
            image:'/images/p6.jpg',
            price:185,
            countInStock:15,
            brand:'AZAZIE',
            rating:4.5,
            numReview:19,
            description:'high quality product',
        },
        {
           
            name: 'Madrid BD',
            category:'dress',
            image:'/images/p7.jpg',
            price:195,
            countInStock:5,
            brand:'AZAZIE',
            rating:4,
            numReview:34,
            description:'high quality product',
        },
        {
           
            name: 'KESIA BLOUSE AND CAMI',
            category:'skirt',
            image:'/images/p8.jpg',
            price:96,
            countInStock:20,
            brand:'AZAZIE',
            rating:4.5,
            numReview:18,
            description:'high quality product',
        },
        {
           
            name: 'BellaDonna',
            category:'dress',
            image:'/images/p9.jpg',
            price:216,
            countInStock:10,
            brand:'AZAZIE',
            rating:5,
            numReview:30,
            description:'high quality product',
        },
        {
           
            name: 'Shirley',
            category:'dress',
            image:'/images/p10.jpg',
            price:186,
            countInStock:3,
            brand:'AZAZIE',
            rating:4,
            numReview:40,
            description:'high quality product',
        },
        {
           
            name: 'Erma',
            category:'dress',
            image:'/images/p11.jpg',
            price:265,
            countInStock:8,
            brand:'AZAZIE',
            rating:4,
            numReview:15,
            description:'high quality product',
        },
        {
           
            name: 'Marianne',
            category:'dress',
            image:'/images/p12.jpg',
            price:185,
            countInStock:7,
            brand:'AZAZIE',
            rating:4.5,
            numReview:14,
            description:'high quality product',
        },
        
    ],
};
export default data;