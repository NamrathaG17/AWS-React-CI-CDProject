// The string functions. Add an entry here and it shows up in the dropdown.
export const STRING_TOOLS = [
  { id: 'uppercase', label: 'Uppercase', run: (s) => s.toUpperCase() },
  { id: 'lowercase', label: 'Lowercase', run: (s) => s.toLowerCase() },
  { id: 'reverse', label: 'Reverse text', run: (s) => [...s].reverse().join('') },
  {
    id: 'titlecase',
    label: 'Title Case',
    run: (s) => s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()),
  },
  {
    id: 'vowels',
    label: 'Count vowels',
    run: (s) => `${(s.match(/[aeiou]/gi) || []).length} vowel(s)`,
  },
  {
    id: 'palindrome',
    label: 'Palindrome check',
    run: (s) => {
      const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (!clean) return 'Enter some letters or numbers first.';
      return clean === [...clean].reverse().join('')
        ? 'Yes, it is a palindrome.'
        : 'No, it is not a palindrome.';
    },
  },
];
