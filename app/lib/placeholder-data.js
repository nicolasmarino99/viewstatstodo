// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const tasks = [
  {
    customer_id: users[0].id,
    text: 'todo task',
    date: '2022-12-06',
    status: 'complete',
  },
  {
    customer_id: users[0].id,
    text: 'todo task',
    date: '2022-12-06',
    status: 'pending',
  },
];

module.exports = {
  users,
  tasks,
};
