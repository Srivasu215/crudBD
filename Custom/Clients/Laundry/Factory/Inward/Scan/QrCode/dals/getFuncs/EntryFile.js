// import { StartFunc as ApplyFilter } from '../../kLowDb/ReadFromFile/ApplyFilter/getFunc.js';
import HomeJson from './home.json' with {type: 'json'};

let GetFunc = () => {
    // let LocalFromLowDb = ApplyFilter({ inFilterObject });

    return HomeJson;
};

export {
    GetFunc
};