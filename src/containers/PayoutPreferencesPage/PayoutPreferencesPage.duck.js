import { createStripeAccount /*, updateStripeAccount*/ } from '../../ducks/stripe.duck';
import { fetchCurrentUser } from '../../ducks/user.duck';
import axios from 'axios';
import swal from 'sweetalert';

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
    case SAVE_PAYOUT_DETAILS_SUCCESS: {
      window.location.reload();
      return { ...state, payoutDetailsSaveInProgress: false, payoutDetailsSaved: true };
    }

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
  var insurance_id;
  var customer;
  // if (values.individual) {
  var birthDate = values.individual.birthDate;
  customer = {
    email: values.individual.email,
    legalEntity: {
      type: 'individual',
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
  // } else {
  //   var birthDate = values.accountOpener.birthDate;
  //   customer = {
  //     email: values.accountOpener.email,
  //     legalEntity: {
  //       type: values.accountType,
  //       firstName: values.accountOpener.fname,
  //       lastName: values.accountOpener.lname,
  //       birthdate: new Date(`${birthDate.month}/${birthDate.day}/${birthDate.year}`).getTime(),
  //       ssnLast4: values.accountOpener.personalIdNumber,
  //       address: {
  //         city: values.company.address.state,
  //         country: values.country,
  //         line1: values.company.address.city,
  //         line2: values.company.address.state,
  //         postalCode: values.company.address.postalCode,
  //         state: values.company.address.state,
  //       },
  //     },
  //   };
  // }

  axios
    .post('/api/createSTUser', customer)
    .then(res => {
      insurance_id = res.data.id;
      console.log(res);
      if (insurance_id) {
        sdk.currentUser
          .updateProfile({
            publicData: {
              idInsurance: insurance_id,
            },
          })
          .then(res => {
            console.log(res);
          });
        dispatch(savePayoutDetailsRequest());
        dispatch(createStripeAccount(values))
          .then(() => dispatch(savePayoutDetailsSuccess()))
          .catch(() => dispatch(savePayoutDetailsError()));
        // dispatch(updateStripeAccount('000123456789'))
        //   .then(() => console.log('success'))
        //   .catch(() => console.log('not success'));
      } else {
        swal('Oops!', 'The email address already exist', 'error');
      }
      console.log('success');
    })
    .catch(console.log('error'));

  // dispatch(savePayoutDetailsRequest());
  // dispatch(createStripeAccount(values))
  //   .then(() => dispatch(savePayoutDetailsSuccess()))
  //   .catch(() => dispatch(savePayoutDetailsError()));
  // dispatch(updateStripeAccount('000123456789'))
  //   .then(() => console.log('success'))
  //   .catch(() => console.log('not success'));
};

export const loadData = () => (dispatch, getState, sdk) => {
  // Clear state so that previously loaded data is not visible
  // in case this page load fails.
  dispatch(setInitialState());
  return dispatch(fetchCurrentUser());
};
