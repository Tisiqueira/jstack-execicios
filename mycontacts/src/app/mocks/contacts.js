/* eslint-disable import/no-extraneous-dependencies */
const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Tiago',
    email: 'tiago.m.siqueira@outlook.com',
    phone: '12345689',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Laura',
    email: 'laura.am.siqueira@outlook.com',
    phone: '12345689',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Luiz',
    email: 'luiz.am.siqueira@outlook.com',
    phone: '12345689',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Joyce',
    email: 'joyce.am.siqueira@outlook.com',
    phone: '12345689',
    category_id: v4(),
  },
];

module.exports = contacts;
