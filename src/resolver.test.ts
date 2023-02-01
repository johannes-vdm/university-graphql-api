import { universities } from './universities-data';
import { resolvers } from './resolvers';


describe('Universities', () => {
  it('should have at least one university', () => {
    expect(universities.length).toBeGreaterThan(0);
  });

  it('should have the correct information for each university', () => {
    universities.forEach(university => {
      expect(university).toHaveProperty('country');
      expect(university).toHaveProperty('domains');
      expect(university).toHaveProperty('alpha_two_code');
      expect(university).toHaveProperty('state_province');
      expect(university).toHaveProperty('name');
      expect(university).toHaveProperty('web_pages');
    });
  });
});

describe('Universities resolver', () => {
  it('filters universities based on name', () => {
    const result = resolvers.Query.universities({ name: 'Cape Peninsula University of Technology' });
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      name: 'Cape Peninsula University of Technology',
      state_province: 'Western Cape Province',
    });
  });

  it('filters universities based on state_province', () => {
    const result = resolvers.Query.universities({ state_province: 'Eastern Cape Province' });
    expect(result[0]).toEqual({
      name: 'Nelson Mandela University',
      state_province: 'Eastern Cape Province',
    });
  });
})