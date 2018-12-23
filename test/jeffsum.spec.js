/* global describe, it */

const { assert } = require('chai');

const jeffsum = require('../index.js');

describe('jeffsum...', () => {
  describe('works, when...', () => {
    it('it returns 5 characters on jeffsum(5, "characters").', () => {
      const text = jeffsum(5, 'characters');
      assert.lengthOf(text, 5);
    });

    it('it returns 5 space separated words on jeffsum(5, "words").', () => {
      const text = jeffsum(5, 'words');
      const numOfSpaces = (text.match(/ /g) || []).length;
      assert.equal(numOfSpaces, 4);
    });

    it('it returns 5 sentences on jeffsum(5, "sentences").', () => {
      const text = jeffsum(5, 'sentences');
      const numOfDots = (text.match(/[^.!?]+[.!?]/g) || []).length;
      assert.equal(numOfDots, 5);
    });
  });

  describe('fails, when...', () => {
    it('first parameter is not a number.', () => {
      assert.throws(
        () => { jeffsum('five', 'sentences'); },
        Error,
      );
    });

    it('first parameter smaller than 0', () => {
      assert.throws(
        () => { jeffsum(-1, 'sentences'); },
        Error,
      );
    });
  });
});
