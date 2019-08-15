
let initial = `I know an old lady who swallowed a `;
let mid = `She swallowed the`;
let mid1 = `to catch the`
let call;
let things = {
  1 : {
    name: 'fly',
    phrase: `I don\'t know why she swallowed the fly. Perhaps she\'ll die.`
  },
  2 : {
    name: 'spider',
    phrase: 'wriggled and jiggled and tickled inside her.'
  },
  3: {
    name: 'bird',
    phrase: 'How absurd to swallow a bird!'
  },
  4: {
    name: 'cat',
    phrase: 'Imagine that, to swallow a cat!'
  },
  5: {
    name: 'dog',
    phrase: 'What a hog, to swallow a dog!'
  },
  6: {
    name: 'goat',
    phrase: 'Just opened her throat and swallowed a goat!'
  },
  7: {
    name: 'cow',
    phrase: 'I don\'t know how she swallowed a cow!'
  },
  8: {
    name: 'horse',
    phrase: 'She\'s dead, of course!'
  }
}
let fullSong = {
  1: `I know an old lady who swallowed a fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`,

  2: `I know an old lady who swallowed a spider.
It wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`,
3: `I know an old lady who swallowed a bird.
How absurd to swallow a bird!
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`,
4: `I know an old lady who swallowed a cat.
Imagine that, to swallow a cat!
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`,
5: `I know an old lady who swallowed a dog.
What a hog, to swallow a dog!
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`,
6: `I know an old lady who swallowed a goat.
Just opened her throat and swallowed a goat!
She swallowed the goat to catch the dog.
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`,
7: `I know an old lady who swallowed a cow.
I don't know how she swallowed a cow!
She swallowed the cow to catch the goat.
She swallowed the goat to catch the dog.
She swallowed the dog to catch the cat.
She swallowed the cat to catch the bird.
She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`,
8: `I know an old lady who swallowed a horse.
She's dead, of course!

`
}

export class Song {
  verse(input, dos) {
    if(input === 1) {
      call = `${initial}${things[input].name}.
${things[input].phrase}
`;
      return call;
    }  
    else if(input === 8) {
      call = `${initial}${things[input].name}.
${things[input].phrase}
`;
return call;
    }
    else {
      if(input === 2) {
      call = `${initial}${things[input].name}.
It ${things[input].phrase}
`;
}
else {
  call = `${initial}${things[input].name}.
${things[input].phrase}
`;
}
      for (let i = input; i > 0; i--) {
        if(i === 1) {
          call += `${things[i].phrase}
`;
        }
        else if(i === 3) {
          call += `${mid} ${things[i].name} ${mid1} ${things[i - 1].name} that ${things[i - 1].phrase}
`;
        }
        else {
        call += `${mid} ${things[i].name} ${mid1} ${things[i - 1].name}.
`;
        }
      }
      return call;
    }
  }

  verses(start, finish) {
    if(finish === 2) {
let all = `${fullSong[start]}
`;
all += `${fullSong[finish]}
`;
return all;
    }
    else {
      let all = `${fullSong[start]}
${fullSong[2]}
${fullSong[3]}
${fullSong[4]}
${fullSong[5]}
${fullSong[6]}
${fullSong[7]}
${fullSong[8]}`;
return all;
    }
// else {
// let all = ``;
// for(let i = start; i <= finish; i++) {
//   all += `${fullSong[i]}`;
// }
// return all;
// }
  }
}
