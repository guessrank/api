import { Game } from 'src/schemas/game.schema';
import { rocketLeagueData } from './rocketleague.data';
import { valorantData } from './valorant.data';

export const gamesData: Game[] = [rocketLeagueData, valorantData];
