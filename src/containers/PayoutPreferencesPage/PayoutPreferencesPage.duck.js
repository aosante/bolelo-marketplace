import { createStripeAccount } from '../../ducks/stripe.duck';
import { fetchCurrentUser } from '../../ducks/user.duck';
import axios from 'axios';

// ================ Action types ================ //

export const SET_INITIAL_STATE = 'app/PayoutPreferencesPage/SET_INITIAL_STATE';
export const SAVE_PAYOUT_DETAILS_REQUEST = 'app/PayoutPreferencesPage/SAVE_PAYOUT_DETAILS_REQUEST';
export const SAVE_PAYOUT_DETAILS_SUCCESS = 'app/PayoutPreferencesPage/SAVE_PAYOUT_DETAILS_SUCCESS';
export const SAVE_PAYOUT_DETAILS_ERROR = 'app/PayoutPreferencesPage/SAVE_PAYOUT_DETAILS_ERROR';

// ================ Reducer ================ //

const initialState = {
  payoutDetailsSaveInProgress: false,
  payoutDetailsSaved: false,
};

export default function payoutPreferencesPageReducer(state = initialState, action = {}) {
  const { type } = action;
  switch (type) {
    case SET_INITIAL_STATE:
      return initialState;

    case SAVE_PAYOUT_DETAILS_REQUEST:
      return { ...state, payoutDetailsSaveInProgress: true };
    case SAVE_PAYOUT_DETAILS_ERROR:
      return { ...state, payoutDetailsSaveInProgress: false };
    case SAVE_PAYOUT_DETAILS_SUCCESS:
      return { ...state, payoutDetailsSaveInProgress: false, payoutDetailsSaved: true };

    default:
      return state;
  }
}

// ================ Action creators ================ //

export const setInitialState = () => ({
  type: SET_INITIAL_STATE,
});

export const savePayoutDetailsRequest = () => ({
  type: SAVE_PAYOUT_DETAILS_REQUEST,
});
export const savePayoutDetailsError = () => ({
  type: SAVE_PAYOUT_DETAILS_ERROR,
});
export const savePayoutDetailsSuccess = () => ({
  type: SAVE_PAYOUT_DETAILS_SUCCESS,
});

// ================ Thunks ================ //

export const savePayoutDetails = values => (dispatch, getState, sdk) => {
  dispatch(savePayoutDetailsRequest());
  var insurance_id;
  var birthDate = values.individual.birthDate;
  const customer = {
    email: values.individual.email,
    legalEntity: {
      type: values.accountType,
      firstName: values.individual.fname,
      lastName: values.individual.lname,
      birthdate: new Date(`${birthDate.month}/${birthDate.day}/${birthDate.year}`).getTime(),
      ssnLast4: values.individual.personalIdNumber,
      address: {
        city: values.individual.address.state,
        country: values.country,
        line1: values.individual.address.city,
        line2: values.individual.address.state,
        postalCode: values.individual.address.postalCode,
        state: values.individual.address.state,
      },
    },
  };
  axios
    .post('/api/createSTUser', customer)
    .then(res => {
      insurance_id = res.data.id;
      sdk.currentUser
        .updateProfile({
          publicData: {
            idInsurance: insurance_id,
          },
        })
        .then(res => {
          console.log(JSON.stringify(res));
        });
    })
    .catch(err => console.error(err));
  return console.log('lalsdlasd');
  return dispatch(createStripeAccount(values))
    .then(() => dispatch(savePayoutDetailsSuccess()))
    .catch(() => dispatch(savePayoutDetailsError()));
};

export const loadData = () => (dispatch, getState, sdk) => {
  // Clear state so that previously loaded data is not visible
  // in case this page load fails.
  dispatch(setInitialState());
  return dispatch(fetchCurrentUser());
};
