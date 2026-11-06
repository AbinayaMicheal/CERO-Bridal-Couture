
const products = [
    {
        id: 1,
        name: 'Aabroo - Glaze Mustard Short Kurta With Sharara And Dupatta',
        category: 'Sharara',
        occasion: ['Sangeet','Engagement'],
        price: '₹45,000',
        image: '/images/p1.jpg',
        description: 'An exquisite bridal lehenga crafted for the bride who loves timeless elegance. Beautiful detailing and traditional craftsmanship make it perfect for your special day.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Red', 'Maroon']
    },
    {
        id: 2,
        name: 'Aashina - Dabka Zardozi Embroidered Pure Tissue Carrot Pink Lehenga Set',
        category: 'Bridal Lehenga',
        occasion: ['Wedding'],
        price: '₹25,000',
        image: '/images/p2.jpg',
        description: 'A graceful silk saree that celebrates traditional beauty with an elegant finish.',
        sizes: ['Free Size'],
        colors: ['Gold', 'Pink']
    },
    {
        id: 3,
        name: 'Afsa - Misty Green Lehenga With Blouse And Dupatta',
        category: 'Indo-Western',
        occasion: ['Sangeet'],
        price: '₹32,000',
        image: '/images/p3.jpg',
        description: 'A beautiful blush pink sharara designed with delicate details for a sophisticated celebration look.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Blush Pink', 'Peach']
    },
    {
        id: 4,
        name: 'Aasmaa - Purple Lehenga With Choli And Dupatta',
        category: 'Bridal Lehenga',
        occasion: ['Sangeet'],
        price: '₹38,000',
        image: '/images/p4.jpg',
        description: 'An elegant ivory gown designed to bring a touch of modern sophistication to your reception.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Ivory', 'Champagne']
    },
    {
        id: 5,
        name: 'Aaira - Rani Hotpink Short Kurta With Garara And Dupatta',
        category: 'Sharara',
        occasion: [],
        price: '₹18,000',
        image: '/images/p5.jpg',
        description: 'A timeless Anarkali ensemble combining traditional charm and graceful styling.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Wine', 'Navy Blue']
    },
    {
        id: 6,
        name: 'Designer Indo-Western Outfit',
        category: 'Indo-Western',
        occasion: [],
        price: '₹29,000',
        image: '/images/p6.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 7,
        name: 'Maliha - Rosepink Saree Set',
        category: 'Sarees',
        occasion: ['Haldi','Reception','Engagement','Sangeet'],
        price: '₹29,000',
        image: '/images/p7.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
       
        sizes: ['Free size'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 8,
        name: 'Alina - Dabka Zardozi Embroidered Silk Daisy Ivory Sharara Set',
        category: 'Sharara',
        occasion: ['Sangeet','Engagement'],
        price: '₹29,000',
        image: '/images/p8.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 9,
        name: 'Amara - Daisy Ivory Lehenga',
        category: 'Bridal Lehenga',
        occasion: ['Reception','Engagement','Sangeet'],
        price: '₹29,000',
        image: '/images/p9.jpg',
        description: 'Crafted in pure raw silk, this exquisite lehenga features intricate Kashmiri Tilla.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 10,
        name:' Afsa - Rani Hotpink Saree Set',
        category: 'Sarees',
        occasion: ['Sangeet'],
        price: '₹29,000',
        image: '/images/p10.jpg',
        description: `Saree & Blouse 
        Our Afsa Saree is crafted from luxurious Silk Organza threads, adorned with detailed Dabka Zardozi embroidery. It comes with a matching Raw Silk blouse, also intricately embroidered.`,

        sizes: ['Free size'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 11,
        name: 'Ayda - Misty Green Kurta With Sharara And Dupatta',
        category: 'Sharara',
        occasion: ['Sangeet','Engagement'],
        price: '₹29,000',
        image: '/images/p11.jpg',
        description: 'Material/Fabric: Kurta & Bottom - Silk Chanderi; Dupatta - Silk Organza.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 12,
        name: 'Farah - Dabka Zardozi Embroidered Pure Silk Daisy Ivory Lehenga Set',
        category: 'Bridal Lehenga',
        occasion: ['Engagement','Reception','Sangeet'],
        price: '₹29,000',
        image: '/images/p12.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 13,
        name: 'Kashish Dadhwal In Amna - Glaze Mustard',

        category: 'Indo-Western',
        occasion: ['Haldi','Bridal Lehenga'],
        price: '₹29,000',
        image: '/images/p13.jpg',
        description: 'The lehenga is made in pure raw silk fabric and adorned with exquisite kirandori with sitaara embroidery.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 14,
        name: 'Amara - Rani Hotpink Lehenga',
        category:'Bridal Lehenga',
        occasion: ['Sangeet','Reception','Wedding'],
        price: '₹29,000',
        image: '/images/p14.jpg',
        description: 'Crafted in pure raw silk, this exquisite lehenga features intricate Kashmiri Tilla and Gota Patti embroidery, beautifully highlighted with delicate pearls. ',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 15,
        name: 'Mahanoor - Dabka Zardozi Embroidered Pure Silk Red Bridal Lehenga Set',

        category: 'Bridal Lehenga',
        occasion: 'Wedding',
        price: '₹29,000',
        image: '/images/p15.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 16,
        name: 'Naila - Rani Hotpink Anarkali With Lehenga And Dupatta',
        category: 'Indo-Western',
        occasion: ['Wedding','Reception'],
        price: '₹9,999',
        image: '/images/p16.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 17,
        name: 'Amara - Heirloom Mustard Lehenga',
        category:'Bridal Lehenga',
        occasion: ['Haldi'],
        price: '₹9,500',
        image: '/images/p17.jpg',
        description: 'Crafted in pure raw silk, this exquisite lehenga features intricate Kashmiri Tilla ',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 18,
        name: 'Naazila - Dabka Zardozi Embroidered Raw Silk Rani Hotpink Lehenga Set',
        category: 'Bridal Lehenga',
        occasion: ['Wedding','Reception'],
        price: '₹22,000',
        image: '/images/p18.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['Free Size'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 19,
        name: 'Mahima Chawla In Taarini - Glaze Mustard Tilla Embroidered Anarkali Set',
        category: 'Indo-Western',
        occasion: ['Haldi','Sangeet'],
        price: '₹21,000',
        image: '/images/p19.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 20,
        name: 'Amna - Glaze Mustard',
        category: 'Bridal Lehenga',
        occasion: ['Haldi','Wedding','Reception'],
        price: '₹32,000',
        image: '/images/p20.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 21,
        name: 'Ziva collection',
        category: 'Gowns',
        occasion: 'Haldi',
        price: '₹9,000',
        image: '/images/p21.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 22,
        name: 'Jaya',
        category: 'Bridal Lehenga',
        occasion: ['Haldi','Engagement','Reception'],
        price: '₹18,000',
        image: '/images/p22.jpg',
        description: 'Crafted in luxurious premium tissue fabric, the blouse is adorned with delicate hand embroidery featuring sequins and floral motifs',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 23,
        name: 'M.s Blue Zari Butta Vasundhara Silk Saree',
        category: 'Sarees',
        occasion: ['Engagement','Wedding','Reception'],
        price: '₹15,500',
        image: '/images/p23.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['Free size'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 24,
        name: 'Borderless Red Tissue Saree',
        category: 'Sarees',
        occasion: ['Haldi','Wedding','Reception','Engagement'],
        price: '₹10,000',
        image: '/images/p24.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['Free size'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 25,
        name: 'Gold Tissue Linen Saree',
        category: 'Sarees',
        occasion: ['Haldi','Wedding','Bride-to-Be'],
        price: '₹13,000',
        image: '/images/p25.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['Free size'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 26,
        name: 'Navy Blue Plain Chettinad',
        category: 'Sarees',
        occasion: ['Haldi','Engagement','Reception','Bride-to-Be','Bridesmaids'],
        price: '₹20,000',
        image: '/images/p26.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['Free size'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 27,
        name: 'Sultana',
        category: 'Bridal Lehenga',
        occasion: ['Haldi','Wedding','Reception'],
        price: '₹19,999',
        image: '/images/p27.jpg',
        description: 'This exquisite lehenga set is a celebration of traditional Banarasi craftsmanship, rendered in a regal golden olive tone.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 28,
        name: 'Firoza',
        category: 'Gowns',
        occasion: ['Sangeet','Braidsmaids','Reception'],
        price: '₹29,000',
        image: '/images/p28.jpg',
        description: 'Exude timeless elegance in this stunning pastel green lehenga set, perfect for intimate celebrations and festive occasions.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 29,
        name: 'Eloise',
        category: 'Gowns',
        occasion: ['Sangeet','Reception','Engagement'],
        price: '₹34,000',
        image: '/images/p29.jpg',
        description: 'Showcasing this breathtaking Eloise mermaid gown with fine pearls and tonal hand embroidery',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 30,
        name: 'White Train Gown Satin',
        category: 'Gowns',
        occasion: ['Christian Bride','Wedding'],
        price: '₹9,000',
        image: '/images/p30.jpg',
        description: 'Specially created for Christian and Catholic brides, this wedding gown carries the modest grace and formal sophistication ideal for church ceremonies.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['white']
    },
    {
        id: 31,
        name: 'white Mermaid with royal train',
        category: 'Gowns',
        occasion: ['Christian Bride','Wedding'],
        price: '₹11,800',
        image: '/images/p31.jpg',
        description: 'Elegant white mermaid wedding gown with royal train for Christian brides. Flattering silhouette, custom fit, ships worldwide.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['White']
    },
    {
        id: 32,
        name: 'Pink Velvet Half-Saree',
        category: 'Anarkali',
        occasion: ['Haldi','Bridesmaids','Mehendi'],
        price: '₹29,000',
        image: '/images/p32.jpg',
        description: 'Pink Velvet Half-Saree, gleamed up with Swarovski Stonework Skirt, Matching Stonework Blouse, and Net Stonework Dhavani',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 33,
        name: 'White Bridal Gown with Long Sleeve',
        category: 'Gowns',
        occasion: ['Christian Bride','Wedding'],
        price: '₹29,000',
        image: '/images/p33.jpg',
        description: 'A contemporary Indo-Western outfit that blends modern silhouettes with traditional inspiration.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 34,
        name: 'Orange Vasundhara Silk Saree,',
        category: 'Sarees',
        occasion: ['Traditional Sarees','Wedding','Reception'],
        price: '₹12,000',
        image: '/images/p34.jpg',
        description: 'Origin Kancheepuram',
        sizes: ['Free size'],
        colors: ['Lavender', 'Rose']
    },
    {
        id: 35,
        name: 'Cream Semi-Banarasi Anarkali',
        category: 'Anarkalis',
        occasion: ['Bridemaids','Bride-to-Be'],
        price: '₹8,000',
        image: '/images/p35.jpg',
        description: 'Cream Semi-Banarasi Half-Saree Featuring Zari Buttas Skirt, Traditional Zari Border, Matching Blouse, Zari Buttas Dhavani',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['half-White', 'Rose']
    }
]

export default products
