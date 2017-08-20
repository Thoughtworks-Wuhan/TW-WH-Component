import service from '../component/MultipleSelect/Service';

// The assertion for a promise must be returned.
it('works with promises', () => {
    expect.assertions(1);
    const result = ["Microsoft", "Google", "IBM", "Oracle", "Facebook", "Intel", "Apple", "Adobe"];
    return service.getItems().then(data => expect(data).toEqual(result));
});