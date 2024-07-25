import { Game } from 'src/schemas/game.schema';

export const rocketLeagueData: Game = {
  uniqueId: 'rocketleague',
  name: 'Rocket League',
  imageSrc: '/images/rocket-league.webp',
  description:
    'Guess the Rank of Players in Rocket League: Can You Determine Their Skill Level?',
  ranks: [
    {
      name: 'Bronze',
      imageSrc: '/images/rocket-league/bronze-1.webp',
      level: 1,
      divisions: [
        {
          name: 'I',
          imageSrc: '/images/rocket-league/bronze-1.webp',
          level: 1,
        },
        {
          name: 'II',
          imageSrc: '/images/rocket-league/bronze-2.webp',
          level: 2,
        },
        {
          name: 'III',
          imageSrc: '/images/rocket-league/bronze-3.webp',
          level: 3,
        },
      ],
    },
    {
      name: 'Silver',
      imageSrc: '/images/rocket-league/silver-1.webp',
      level: 2,
      divisions: [
        {
          name: 'I',
          imageSrc: '/images/rocket-league/silver-1.webp',
          level: 1,
        },
        {
          name: 'II',
          imageSrc: '/images/rocket-league/silver-2.webp',
          level: 2,
        },
        {
          name: 'III',
          imageSrc: '/images/rocket-league/silver-3.webp',
          level: 3,
        },
      ],
    },
    {
      name: 'Gold',
      imageSrc: '/images/rocket-league/gold-1.webp',
      level: 3,
      divisions: [
        {
          name: 'I',
          imageSrc: '/images/rocket-league/gold-1.webp',
          level: 1,
        },
        {
          name: 'II',
          imageSrc: '/images/rocket-league/gold-2.webp',
          level: 2,
        },
        {
          name: 'III',
          imageSrc: '/images/rocket-league/gold-3.webp',
          level: 3,
        },
      ],
    },
    {
      name: 'Platinum',
      imageSrc: '/images/rocket-league/platinum-1.webp',
      level: 4,
      divisions: [
        {
          name: 'I',
          imageSrc: '/images/rocket-league/platinum-1.webp',
          level: 1,
        },
        {
          name: 'II',
          imageSrc: '/images/rocket-league/platinum-2.webp',
          level: 2,
        },
        {
          name: 'III',
          imageSrc: '/images/rocket-league/platinum-3.webp',
          level: 3,
        },
      ],
    },
    {
      name: 'Diamond',
      imageSrc: '/images/rocket-league/diamond-1.webp',
      level: 5,
      divisions: [
        {
          name: 'I',
          imageSrc: '/images/rocket-league/diamond-1.webp',
          level: 1,
        },
        {
          name: 'II',
          imageSrc: '/images/rocket-league/diamond-2.webp',
          level: 2,
        },
        {
          name: 'III',
          imageSrc: '/images/rocket-league/diamond-3.webp',
          level: 3,
        },
      ],
    },
    {
      name: 'Champion',
      imageSrc: '/images/rocket-league/champion-1.webp',
      level: 6,
      divisions: [
        {
          name: 'I',
          imageSrc: '/images/rocket-league/champion-1.webp',
          level: 1,
        },
        {
          name: 'II',
          imageSrc: '/images/rocket-league/champion-2.webp',
          level: 2,
        },
        {
          name: 'III',
          imageSrc: '/images/rocket-league/champion-3.webp',
          level: 3,
        },
      ],
    },
    {
      name: 'Grand Champion',
      imageSrc: '/images/rocket-league/grand-champion-1.webp',
      level: 7,
      divisions: [
        {
          name: 'I',
          imageSrc: '/images/rocket-league/grand-champion-1.webp',
          level: 1,
        },
        {
          name: 'II',
          imageSrc: '/images/rocket-league/grand-champion-2.webp',
          level: 2,
        },
        {
          name: 'III',
          imageSrc: '/images/rocket-league/grand-champion-3.webp',
          level: 3,
        },
      ],
    },
    {
      name: 'Supersonic Legend',
      imageSrc: '/images/rocket-league/supersonic-legend.webp',
      level: 8,
      divisions: [],
    },
  ],
};
