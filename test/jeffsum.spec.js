/* global describe, it */

const { assert } = require('chai');

const jeffsum = require('../index.js');

describe('jeffsum', () => {
  it('should return 5 characters on jeffsum(5, "characters")', () => {
    const text = jeffsum(5, 'characters');
    assert.lengthOf(text, 5);
  });
});
