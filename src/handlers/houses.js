// @flow
import _ from 'lodash';
import type { House } from '../types';

const houses = ['Arryn', 'Frey', 'GreyJoy', 'Lannister', 'Stark', 'Targaryen'];
const kingdoms = [
  'Vale of Arryn',
  'The Riverlands',
  'Iron Islands',
  'Westerlands',
  'Winterfell',
  'Dragonstone',
];

const greatHouses = async (): Promise<Array<House>> =>
  _.zip(houses, kingdoms).map(pair => ({
    house: pair[0],
    kingdom: pair[1],
  }));

export const handler = async (event: Object, context: Object, cb: Function) => {
  // make sure async / await are working
  const res = await greatHouses();
  // makes sure source maps are working
  console.error(new Error('The error log shoud point to line #25')); // eslint-disable-line
  // makes sure spread is working
  cb(null, [...res]);
};
