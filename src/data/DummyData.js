export const seedBudgets = [
  // ============================
  // 1) UTILITIES
  // ============================
  {
    id: "bgt-001",
    amount: 6000,
    categoryId: "c7",
    expenses: [
      { id: "u-01", name: "Electric Bill", cost: 145, date: "07-12-2025" },
      { id: "u-02", name: "Water Bill", cost: 95, date: "08-04-2025" },
      { id: "u-03", name: "Internet", cost: 170, date: "09-22-2025" },
      { id: "u-04", name: "Natural Gas", cost: 220, date: "10-15-2025" },
      { id: "u-05", name: "Electric Bill", cost: 150, date: "12-02-2025" },
    ],
    spent: 145 + 95 + 170 + 220 + 150,
  },

  // ============================
  // 2) ENTERTAINMENT
  // ============================
  {
    id: "bgt-002",
    amount: 5000,
    categoryId: "c6",
    expenses: [
      { id: "e-01", name: "Cinema", cost: 120, date: "07-09-2025" },
      { id: "e-02", name: "Netflix", cost: 140, date: "09-17-2025" },
      { id: "e-03", name: "Concert Ticket", cost: 380, date: "10-28-2025" },
      { id: "e-04", name: "Spotify", cost: 65, date: "11-03-2025" },
      { id: "e-05", name: "Theatre Ticket", cost: 200, date: "12-18-2025" },
    ],
    spent: 120 + 140 + 380 + 65 + 200,
  },

  // ============================
  // 3) TRANSPORT
  // ============================
  {
    id: "bgt-003",
    amount: 3000,
    categoryId: "c4",
    expenses: [
      { id: "t-01", name: "Bus Ticket", cost: 35, date: "07-05-2025" },
      { id: "t-02", name: "Metro", cost: 55, date: "08-11-2025" },
      { id: "t-03", name: "Taxi Ride", cost: 150, date: "09-06-2025" },
      { id: "t-04", name: "Gasoline", cost: 300, date: "11-20-2025" },
      { id: "t-05", name: "Bus Ticket", cost: 30, date: "12-10-2025" },
    ],
    spent: 35 + 55 + 150 + 300 + 30,
  },

  // ============================
  // 4) SHOPPING
  // ============================
  {
    id: "bgt-004",
    amount: 8000,
    categoryId: "c2",
    expenses: [
      { id: "s-01", name: "Clothes", cost: 750, date: "07-14-2025" },
      { id: "s-02", name: "Shoes", cost: 620, date: "08-01-2025" },
      { id: "s-03", name: "Home Decor", cost: 400, date: "09-22-2025" },
      { id: "s-04", name: "Electronics", cost: 1250, date: "10-05-2025" },
      { id: "s-05", name: "Gift Purchase", cost: 300, date: "12-11-2025" },
    ],
    spent: 750 + 620 + 400 + 1250 + 300,
  },

  // ============================
  // 5) DINING
  // ============================
  {
    id: "bgt-005",
    amount: 4000,
    categoryId: "c3",
    expenses: [
      { id: "d-01", name: "Fast Food", cost: 95, date: "07-09-2025" },
      { id: "d-02", name: "Coffee", cost: 45, date: "08-21-2025" },
      { id: "d-03", name: "Dinner Out", cost: 230, date: "09-19-2025" },
      { id: "d-04", name: "Lunch", cost: 110, date: "10-16-2025" },
      { id: "d-05", name: "Restaurant", cost: 260, date: "12-07-2025" },
    ],
    spent: 95 + 45 + 230 + 110 + 260,
  },
];
