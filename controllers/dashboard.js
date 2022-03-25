const data = [
    {
        no:1,
        userEmail: 'devi@gmail.com',
        car: 'Toyota Corolla',
        startRent: "22-2-2022",
        finishRent: "30-2-2022",
        price: "3.000.000",
        status: "Finish Rent",
    },
    {
        no:2,
        userEmail: 'devina@gmail.com',
        car: 'Toyota Corolla',
        startRent: "22-2-2022",
        finishRent: "30-2-2022",
        price: "3.000.000",
        status: "Finish Rent",
    },
    {
        no:3,
        userEmail: 'devinazhifa@gmail.com',
        car: 'Toyota Corolla',
        startRent: "22-2-2022",
        finishRent: "30-2-2022",
        price: "3.000.000",
        status: "Finish Rent",
    }
];

const dataBawah =[
    {
        no:1,
        name: 'Toyota Avanza',
        category: "Sedan",
        price: "500.000",
        startRent: "22-2-2022",
        finishRent: "30-2-2022",
        createdAt: "20-2-2022",
        updatedAt: "30-2-2022",
    },
    {
        no:2,
        name: 'Toyota Avanza',
        category: "Sedan",
        price: "500.000",
        startRent: "22-2-2022",
        finishRent: "30-2-2022",
        createdAt: "20-2-2022",
        updatedAt: "30-2-2022",
    },
    {
        no:3,
        name: 'Toyota Avanza',
        category: "Sedan",
        price: "500.000",
        startRent: "22-2-2022",
        finishRent: "30-2-2022",
        createdAt: "20-2-2022",
        updatedAt: "30-2-2022",
    }
];

module.exports = {
    index: (req, res) => res.render("dashboard", { data, dataBawah })
};
