import { render, screen } from '@testing-library/react';
import AddressLine from './addressLine';

test('render full address with all properties', () => {

  var propertyResultWithPostcode = {
    houseNumber: 1,
    houseName: "Blenley Lodge",
    addressLine1: "Some street",
    addressLine2: "Some place",
    addressLine3: "Some where",
    town: "Someton",
    county: "Countyshire",
    postcode: "AB1 2CD"
  }

  var expectedString = 'Blenley Lodge, 1, Some street, Some place, Some where, Someton, Countyshire, AB1 2CD'

  render(<AddressLine propertyResult={propertyResultWithPostcode} />);
  const linkElement = screen.getAllByRole('address-line') //recommended to add roles to components for accessiblity reasons
  expect(linkElement[0]).toHaveTextContent(expectedString);

});
