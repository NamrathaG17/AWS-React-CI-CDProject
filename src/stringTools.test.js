import { STRING_TOOLS } from './stringTools';

const run = (id, text) => STRING_TOOLS.find((t) => t.id === id).run(text);

describe('string tools', () => {
  it('uppercase', () => expect(run('uppercase', 'Hello')).toBe('HELLO'));
  it('lowercase', () => expect(run('lowercase', 'Hello')).toBe('hello'));
  it('reverse', () => expect(run('reverse', 'abc def')).toBe('fed cba'));
  it('reverse keeps emoji intact', () => expect(run('reverse', 'a😀b')).toBe('b😀a'));
  it('title case', () => expect(run('titlecase', 'hELLO wORLD')).toBe('Hello World'));
  it('counts vowels', () => expect(run('vowels', 'Education')).toBe('5 vowel(s)'));
  it('counts zero vowels', () => expect(run('vowels', 'rhythm')).toBe('0 vowel(s)'));

  it('palindrome: yes, ignoring case and punctuation', () =>
    expect(run('palindrome', 'A man, a plan, a canal: Panama')).toBe('Yes, it is a palindrome.'));
  it('palindrome: no', () =>
    expect(run('palindrome', 'hello')).toBe('No, it is not a palindrome.'));
  it('palindrome: asks for input when there are no letters or numbers', () =>
    expect(run('palindrome', '!!!')).toBe('Enter some letters or numbers first.'));
});
