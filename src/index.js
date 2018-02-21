import './index.css';

import numeral from 'numeral';

const proValue = numeral(4000).format('$0,0.00');
console.log(`I would pay ${proValue} for this work!`); // eslint-disable-line no-console
