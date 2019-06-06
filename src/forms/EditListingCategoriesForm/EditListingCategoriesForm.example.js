import EditListingCategoriesForm from './EditListingCategoriesForm';

const NAME = 'amenities';

const initialValueArray = ['towels', 'jacuzzi', 'bathroom'];
const initialValues = { [NAME]: initialValueArray };

export const Amenities = {
  component: EditListingCategoriesForm,
  props: {
    name: NAME,
    onSubmit: values => console.log('EditListingCategoriesForm submit:', values),
    initialValues: initialValues,
    saveActionMsg: 'Save amenities',
    updated: false,
    updateInProgress: false,
  },
  group: 'forms',
};
