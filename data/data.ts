import { qaData as qaData } from './qaData';
import { prodData as prodData } from './prodData';

const environment = process.env.TEST_ENV || 'qa';

export const testData =
    environment === 'prod' ? prodData : qaData;