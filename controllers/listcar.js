const cars = [
    {
        id: 1,
        name: 'Pajero Sport',
        price: 'Rp. 430.000',
        startFinish: 'Start rent - Finish rent',
        updatedAt: '4 April 2022, 09.00',
    },
    {
        id: 2,
        name: 'New Avanza',
        price: 'Rp. 430.000',
        startFinish: 'Start rent - Finish rent',
        updatedAt: '4 April 2022, 09.00',
    },
    {
        id: 3,
        name: 'Alphard',
        price: 'Rp. 430.000',
        startFinish: 'Start rent - Finish rent',
        updatedAt: '4 April 2022, 09.00',
    },
    {
        id: 4,
        name: 'Pajero Sport',
        price: 'Rp. 430.000',
        startFinish: 'Start rent - Finish rent',
        updatedAt: '4 April 2022, 09.00',
    },
    {
        id: 5,
        name: 'New Avanza',
        price: 'Rp. 430.000',
        startFinish: 'Start rent - Finish rent',
        updatedAt: '4 April 2022, 09.00',
    },
    {
        id: 6,
        name: 'Alphard',
        price: 'Rp. 430.000',
        startFinish: 'Start rent - Finish rent',
        updatedAt: '4 April 2022, 09.00',
    },
    ];
    
    module.exports = {
        index: (req, res) => res.render("listcar", {cars}),
    };