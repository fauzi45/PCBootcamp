import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import registerReducer, { storedKey as storedUser} from '@pages/Register/reducer';

import languageReducer from '@containers/Language/reducer';

import { mapWithPersistor } from './persistence';
import homeReducer,{storedKey as storedJourney} from '@pages/Home/reducer';
import detailReducer,{storedKey as storedDetailJourney} from '@pages/Detail/reducer';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  register: {reducer: registerReducer, whitelist: storedUser},
  home: {reducer: homeReducer, whitelist: storedJourney},
  detail: {reducer: detailReducer, whitelist: storedDetailJourney}
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
