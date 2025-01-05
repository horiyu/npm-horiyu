#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';

const links = [
  { label: 'Web', url: 'http://horiyu.com' },
  { label: 'X', url: 'https://x.com/horiyu_com' },
  { label: 'npm', url: 'https://www.npmjs.com/~horiyu_com' },
  { label: 'Zenn', url: 'https://zenn.dev/horiyu' },
  { label: 'GitHub', url: 'https://github.com/horiyu' },
];

const helloMessage = ' ' + chalk.bold('Hello, I am') + ' ' + chalk.green.bold.italic('horiyu') + ' ' + chalk.white('👋');

const maxLabelLength = Math.max(...links.map(link => link.label.length));
const linkMessages = links.map(link => {
  const paddedLabel = link.label.padStart(maxLabelLength);
  return `${chalk(paddedLabel)}: ${chalk.cyan.underline(link.url)}`;
}).join('\n');

const cardMessage = `${helloMessage}\n\n${linkMessages}`;

const messageBox = boxen(
  cardMessage,
  {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
  },
);

console.log(messageBox);