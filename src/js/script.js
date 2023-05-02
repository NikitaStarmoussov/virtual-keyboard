// document.addEventListener('keydown', function pressKeyDown(event){
//   console.log(event)
// })
// first alphabet for english keyboard
let currentLang = 0;

const letterAlphabet = [
  [
    {
      bigEn: 'Q',
      smallEn: 'q',
      bigRu: 'Й',
      smallRu: 'й',
      id: 'KeyQ',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'W',
      smallEn: 'w',
      bigRu: 'Ц',
      smallRu: 'ц',
      id: 'KeyW',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'E',
      smallEn: 'e',
      bigRu: 'У',
      smallRu: 'у',
      id: 'KeyE',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'R',
      smallEn: 'r',
      bigRu: 'К',
      smallRu: 'к',
      id: 'KeyR',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'T',
      smallEn: 't',
      bigRu: 'Е',
      smallRu: 'е',
      id: 'KeyT',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'Y',
      smallEn: 'y',
      bigRu: 'Н',
      smallRu: 'н',
      id: 'KeyY',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'U',
      smallEn: 'u',
      bigRu: 'Г',
      smallRu: 'г',
      id: 'KeyU',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'I',
      smallEn: 'i',
      bigRu: 'Ш',
      smallRu: 'ш',
      id: 'KeyI',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'O',
      smallEn: 'o',
      bigRu: 'Щ',
      smallRu: 'щ',
      id: 'KeyO',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'P',
      smallEn: 'p',
      bigRu: 'З',
      smallRu: 'з',
      id: 'KeyP',
      class: 'key key_s key_center',
    },
    {
      bigEn: '{',
      smallEn: '[',
      bigRu: 'Х',
      smallRu: 'х',
      id: 'BracketLeft',
      class: 'key key_s key_center',
    },
    {
      bigEn: '}',
      smallEn: ']',
      bigRu: 'Ъ',
      smallRu: 'ъ',
      id: 'BracketRight',
      class: 'key key_s key_center',
    },
  ],
  [
    {
      bigEn: 'A',
      smallEn: 'a',
      bigRu: 'Ф',
      smallRu: 'ф',
      id: 'KeyA',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'S',
      smallEn: 's',
      bigRu: 'Ы',
      smallRu: 'ы',
      id: 'KeyS',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'D',
      smallEn: 'd',
      bigRu: 'В',
      smallRu: 'в',
      id: 'KeyD',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'F',
      smallEn: 'f',
      bigRu: 'А',
      smallRu: 'а',
      id: 'KeyF',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'G',
      smallEn: 'g',
      bigRu: 'П',
      smallRu: 'п',
      id: 'KeyG',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'H',
      smallEn: 'h',
      bigRu: 'Р',
      smallRu: 'р',
      id: 'KeyH',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'J',
      smallEn: 'j',
      bigRu: 'О',
      smallRu: 'о',
      id: 'KeyJ',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'K',
      smallEn: 'k',
      bigRu: 'Л',
      smallRu: 'л',
      id: 'KeyK',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'L',
      smallEn: 'l',
      bigRu: 'Д',
      smallRu: 'д',
      id: 'KeyL',
      class: 'key key_s key_center',
    },
    {
      bigEn: ':',
      smallEn: ';',
      bigRu: 'Ж',
      smallRu: 'ж',
      id: 'Semicolon',
      class: 'key key_s key_center',
    },
    {
      bigEn: '"',
      smallEn: "'",
      bigRu: 'Э',
      smallRu: 'э',
      id: 'Quote',
      class: 'key key_s key_center',
    },
    {
      bigEn: '\\',
      smallEn: '|',
      bigRu: '/',
      smallRu: '\\',
      id: 'Backslash',
      class: 'key key_s key_center',
    },
  ],
  [
    {
      bigEn: '~',
      smallEn: '`',
      bigRu: '[',
      smallRu: ']',
      id: 'Backquote',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'Z',
      smallEn: 'z',
      bigRu: 'Я',
      smallRu: 'я',
      id: 'KeyZ',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'X',
      smallEn: 'x',
      bigRu: 'Ч',
      smallRu: 'ч',
      id: 'KeyX',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'C',
      smallEn: 'c',
      bigRu: 'С',
      smallRu: 'с',
      id: 'KeyC',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'V',
      smallEn: 'v',
      bigRu: 'М',
      smallRu: 'м',
      id: 'KeyV',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'B',
      smallEn: 'b',
      bigRu: 'И',
      smallRu: 'и',
      id: 'KeyB',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'N',
      smallEn: 'n',
      bigRu: 'Т',
      smallRu: 'т',
      id: 'KeyN',
      class: 'key key_s key_center',
    },
    {
      bigEn: 'M',
      smallEn: 'm',
      bigRu: 'Ь',
      smallRu: 'ь',
      id: 'KeyM',
      class: 'key key_s key_center',
    },
    {
      bigEn: '<',
      smallEn: ',',
      bigRu: 'Б',
      smallRu: 'б',
      id: 'Comma',
      class: 'key key_s key_center',
    },
    {
      bigEn: '>',
      smallEn: '.',
      bigRu: 'Ю',
      smallRu: 'ю',
      id: 'Period',
      class: 'key key_s key_center',
    },
    {
      bigEn: ',',
      smallEn: '.',
      bigRu: '?',
      smallRu: '/',
      id: 'Slash',
      class: 'key key_s key_center',
    },
  ],
];
const basicAlphabet = [
  [
    {
      name: 'ecs',
      id: 'Escape',
      class: 'key key_esc key_left',
    },
    {
      name: 'f1',
      id: 'F1',
      class: 'key key_lower key_center',
    },
    {
      name: 'f2',
      id: 'F2',
      class: 'key key_lower key_center',
    },
    {
      name: 'f3',
      id: 'F3',
      class: 'key key_lower key_center',
    },
    {
      name: 'f4',
      id: 'F4',
      class: 'key key_lower key_center',
    },
    {
      name: 'f5',
      id: 'F5',
      class: 'key key_lower key_center',
    },
    {
      name: 'f6',
      id: 'F6',
      class: 'key key_lower key_center',
    },
    {
      name: 'f7',
      id: 'F7',
      class: 'key key_lower key_center',
    },
    {
      name: 'f8',
      id: 'F8',
      class: 'key key_lower key_center',
    },
    {
      name: 'f9',
      id: 'F9',
      class: 'key key_lower key_center',
    },
    {
      name: 'f10',
      id: 'F10',
      class: 'key key_lower key_center',
    },
    {
      name: 'f11',
      id: 'F11',
      class: 'key key_lower key_center',
    },
    {
      name: 'f12',
      id: 'F12',
      class: 'key key_lower key_center',
    },
    {
      name: 'off',
      id: 'off',
      class: 'key key_lower key_right',
    },
  ],
  [
    {
      name: '§',
      id: 'Backquote',
      class: 'key key_s key_center',
    },
    {
      name: '1',
      id: 'Digit1',
      class: 'key key_s key_center',
    },
    {
      name: '2',
      id: 'Digit2',
      class: 'key key_s key_center',
    },
    {
      name: '3',
      id: 'Digit3',
      class: 'key key_s key_center',
    },
    {
      name: '4',
      id: 'Digit4',
      class: 'key key_s key_center',
    },
    {
      name: '5',
      id: 'Digit5',
      class: 'key key_s key_center',
    },
    {
      name: '6',
      id: 'Digit6',
      class: 'key key_s key_center',
    },
    {
      name: '7',
      id: 'Digit7',
      class: 'key key_s key_center',
    },
    {
      name: '8',
      id: 'Digit8',
      class: 'key key_s key_center',
    },
    {
      name: '9',
      id: 'Digit9',
      class: 'key key_s key_center',
    },
    {
      name: '0',
      id: 'Digit0',
      class: 'key key_s key_center',
    },
    {
      name: '-',
      id: 'Minus',
      class: 'key key_s key_center',
    },
    {
      name: '=',
      id: 'Equal',
      class: 'key key_s key_center',
    },
    {
      name: 'delete',
      id: 'Backspace',
      class: 'key key_l key_right',
    },
  ],
  [
    {
      name: 'tab',
      id: 'Tab',
      class: 'key key_xl key_left',
    },
  ],
  [
    {
      name: 'capslock',
      id: 'CapsLock',
      class: 'key key_xl key_left',
    },
    {
      name: 'return',
      id: 'Enter',
      class: 'key key_xl key_right',
    },
  ],
  [
    {
      name: 'shift',
      id: 'ShiftLeft',
      class: 'key key_xxl key_left',
    },
    {
      name: 'shift',
      id: 'ShiftRight',
      class: 'key key_xxl key_right',
    },
  ],
  [
    {
      name: 'fn',
      id: 'fn',
      class: 'key key_s key_left',
    },
    {
      name: 'ctrl',
      id: 'ControlLeft',
      class: 'key key_s key_left',
    },
    {
      name: 'alt',
      id: 'AltLeft',
      class: 'key key_s key_left',
    },
    {
      name: 'cmd',
      id: 'MetaLeft',
      class: 'key key_m key_left',
    },
    {
      name: ' ',
      id: 'Space',
      class: 'key key_xxxl key_center',
    },
    {
      name: 'cmd',
      id: 'MetaRight',
      class: 'key key_m key_right',
    },
    {
      name: 'alt',
      id: 'AltRight',
      class: 'key key_s key_right',
    },
    {
      name: '◄',
      id: 'ArrowLeft',
      class: 'key key_lower key_center',
    },
    {
      name: '',
      id: 'arrow-wrapper',
      class: 'keyboard__wrapper',
    },
    {
      name: '►',
      id: 'ArrowRight',
      class: 'key key_lower key_center',
    },
  ],
];

const bodyWapper = document.querySelector('#body');
bodyWapper.classList.add('body', 'container');
const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
bodyWapper.prepend(keyboard);
function createBasicKeyboard(alphabet) {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard__wrapper', 'container');
  keyboard.prepend(keyboardWrapper);
  for (let i = 0; i < 6; i += 1) {
    // TODO change 2 for 6

    let keyboardLine = 0;
    keyboardLine = document.createElement('ul');
    keyboardLine.classList.add('keyboard__line');
    for (let y = 0; y < alphabet[i].length; y += 1) {
      let keyboardElement = 0;
      keyboardElement = document.createElement('li');
      keyboardElement.innerText = alphabet[i][y].name;
      keyboardElement.className = alphabet[i][y].class;
      keyboardElement.id = alphabet[i][y].id;
      keyboardLine.append(keyboardElement);
    }
    keyboardWrapper.append(keyboardLine);
  }
  const arrowWrapper = document.querySelector('#arrow-wrapper');
  const arrowUp = document.createElement('li');
  arrowUp.className = 'key key_lower key_center';
  arrowUp.innerText = '▲';
  arrowUp.id = 'ArrowUp';
  arrowWrapper.append(arrowUp);
  const arrowDown = document.createElement('li');
  arrowDown.className = 'key key_lower key_center';
  arrowDown.innerText = '▼';
  arrowDown.id = 'ArrowDown';
  arrowWrapper.append(arrowDown);
}
// createBasicKeyboard(basicAlphabet);
// createBasicKeyboard(englishAlphabet)
// function addKeyboard(alphabet){
//   const keyboardWrapper = document.querySelector('.keyboard__wrapper')
//   let keyboardLine;
//   let currentKey;
//   //todo change for add all html elements
//   for(i=0;i<6;i+=1){
//     keyboardLine = document.createElement('ul');
//     keyboardLine.classList.add('keyboard__line');
//     alphabet.forEach(element => {
//       for(y=0;y<element.length;y+=1){
//         currentKey = document.createElement('li');
//         // currentKey.innerHTML = '';
//         currentKey.innerHTML = element[y];
//         keyboardLine.prepend(currentKey);
//       }

//       if(element==='esc'){
//       }

//     });
//     keyboardWrapper.prepend(keyboardLine);
//   }

// console.log(keyboardLine)

// }
// addKeyboard(englishAlphabet)
createBasicKeyboard(basicAlphabet);
const tab = document.querySelector('#Tab');
const capsLock = document.querySelector('#CapsLock');
const leftShift = document.querySelector('#ShiftLeft');
const firstLine = document.createElement('li');
const secondLine = document.createElement('li');
const thirdLine = document.createElement('li');
firstLine.classList.add('keyboard__line');
secondLine.classList.add('keyboard__line');
thirdLine.classList.add('keyboard__line');
tab.after(firstLine);
capsLock.after(secondLine);
leftShift.after(thirdLine);
function addLetters(lang) {
  firstLine.replaceChildren();
  secondLine.replaceChildren();
  thirdLine.replaceChildren();
  console.log(firstLine.childNodes);

  const lines = [firstLine, secondLine, thirdLine];
  // const  = document.querySelector('.keyboard');
  for (let i = 0; i < lines.length; i += 1) {
    // console.log(letterAlphabet[i])
    for (let y = letterAlphabet[i].length - 1; y > -1; y -= 1) {
      const key = document.createElement('li');
      if (lang === 'smallEn') {
        key.innerText = letterAlphabet[i][y].smallEn;
      } else if (lang === 'bigEn') {
        key.innerText = letterAlphabet[i][y].bigEn;
      } else if (lang === 'smallRu') {
        key.innerText = letterAlphabet[i][y].smallRu;
      } else if (lang === 'bigRu') {
        key.innerText = letterAlphabet[i][y].bigRu;
      }
      key.className = letterAlphabet[i][y].class;
      key.id = letterAlphabet[i][y].id;
      lines[i].prepend(key);
    }
  }
  // console.log('del')
}
// console.log(letterAlphabet[0].length)
// addLetters(currentLang)

function addTextArea() {
  // const bodyWapper = document.querySelector('#body');
  const textArea = document.createElement('textarea');
  textArea.classList.add('text-area');
  textArea.setAttribute('tabindex', '-1');
  // textArea.preventDefault();
  // tabindex="-1"
  bodyWapper.prepend(textArea);
}
addTextArea();
let textAreaContent = '';
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const pressedKey = document.querySelector(`#${event.code}`);
  // console.log(pressedKey)
  pressedKey.classList.toggle('key_active');

  const textArea = document.querySelector('.text-area');
  if (event.key === 'Backspace') {
    textAreaContent = textAreaContent.slice(0, -1);
    textArea.value = textAreaContent;
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault();
    textAreaContent += '◄';
    textArea.value = textAreaContent;
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    textAreaContent += '▲';
    textArea.value = textAreaContent;
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    textAreaContent += '▼';
    textArea.value = textAreaContent;
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    textAreaContent += '►';
    textArea.value = textAreaContent;
  } else if (event.code === 'Space') {
    event.preventDefault();
    textAreaContent += ' ';
    textArea.value = textAreaContent;
  } else if (event.key === 'Tab') {
    event.preventDefault();
    textAreaContent += '\t';
    textArea.value = textAreaContent;
  } else if (event.key === 'CapsLock') {
    if (currentLang === 'smallEn') {
      currentLang = 'bigEn';
      addLetters(currentLang);
    } else {
      currentLang = 'bigRu';
      addLetters(currentLang);
    }
  } else if (event.shiftKey && event.ctrlKey) {
    // console.log('change lang')
    if (currentLang === 'smallEn') {
      currentLang = 'smallRu';
      addLetters(currentLang);
    } else if (currentLang === 'smallRu') {
      currentLang = 'smallEn';
      addLetters(currentLang);
    } else if (currentLang === 'bigEn') {
      currentLang = 'bigRu';
      addLetters(currentLang);
    } else if (currentLang === 'bigRu') {
      currentLang = 'bigEn';
      addLetters(currentLang);
    }
  } else if (event.shiftKey) {
    event.preventDefault();
    if (currentLang === 'smallEn') {
      currentLang = 'bigEn';
      addLetters(currentLang);
    } else if (currentLang === 'smallRu') {
      currentLang = 'bigRu';
      addLetters(currentLang);
    }
    if (event.key !== 'Shift') {
      textAreaContent += pressedKey.innerHTML;
      textArea.value = textAreaContent;
    }
  } else if (event.key === 'meta') {
    // console.log('meta');
    event.preventDefault();
  } else if (event.key === 'Escape') {
    /* empty */
  } else if (event.key === 'Alt') {
    /* empty */
  } else if (event.key === 'Meta') {
    /* empty */
  } else if (event.key === 'Control') {
    /* empty */
  } else if (event.key === 'Enter') {
    // textAreaContent+= pressedKey.innerHTML;
    // const br = document.createElement('br');
    //  textArea.append(br);
    // = textAreaContent;

    textAreaContent += '\b\r';
    textArea.value = textAreaContent;
    // area.value =
    // area.value.substring(0, area.selectionStart) +
    // "\n" +
    // area.value.substring(area.selectionEnd, area.value.length);
  } else {
    textAreaContent += pressedKey.innerHTML;
    textArea.value = textAreaContent;
  }
  // console.log(event.code, event.key)
  // console.log(event.shiftKey, event.ctrlKey)
});
document.addEventListener('keyup', (event) => {
  const pressedKey = document.querySelector(`#${event.code}`);
  // console.log(pressedKey)
  pressedKey.classList.remove('key_active');
  // console.log(event.code, event.key)
  if (event.key === 'CapsLock') {
    if (currentLang === 'bigEn') {
      currentLang = 'smallEn';
      addLetters(currentLang);
    } else {
      currentLang = 'smallRu';
      addLetters(currentLang);
    }
  } else if (event.key === 'Shift' && event.key !== 'Control') {
    if (currentLang === 'bigEn') {
      currentLang = 'smallEn';
      addLetters(currentLang);
    } else if (currentLang === 'bigRu') {
      currentLang = 'smallRu';
      addLetters(currentLang);
    }
  }
});
function addDescription() {
  const Line = document.createElement('span');
  Line.classList.add('keyboard__line');
  Line.innerText = 'Клавиатура создана на mac.\n Переключение ctrl + shift.';
  bodyWapper.append(Line);
}
addDescription();

keyboard.addEventListener('click', (event) => {
  const { target } = event;
  // console.log(target);

  let pressedKey = document.querySelector(`#${target.id}`);
  pressedKey.classList.add('key_active');

  const textArea = document.querySelector('.text-area');
  textArea.preventDefault();
  if (event.key === 'Backspace') {
    textAreaContent = textAreaContent.slice(0, -1);
    textArea.value = textAreaContent;
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault();
    textAreaContent += '◄';
    textArea.value = textAreaContent;
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    textAreaContent += '▲';
    textArea.value = textAreaContent;
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    textAreaContent += '▼';
    textArea.value = textAreaContent;
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    textAreaContent += '►';
    textArea.value = textAreaContent;
  } else if (event.code === 'Space') {
    event.preventDefault();
    textAreaContent += ' ';
    textArea.value = textAreaContent;
  } else if (event.key === 'Tab') {
    event.preventDefault();
    textAreaContent += '\t';
    textArea.value = textAreaContent;
  } else if (event.key === 'CapsLock') {
    if (currentLang === 'smallEn') {
      currentLang = 'bigEn';
      addLetters(currentLang);
      pressedKey.classList.add('key_active');
    } else {
      currentLang = 'bigRu';
      addLetters(currentLang);
      pressedKey.classList.add('key_active');
    }
  } else if (event.shiftKey && event.ctrlKey) {
    // console.log('change lang')
    if (currentLang === 'smallEn') {
      currentLang = 'smallRu';
      addLetters(currentLang);
      pressedKey.classList.add('key_active');
    } else if (currentLang === 'smallRu') {
      currentLang = 'smallEn';
      addLetters(currentLang);
      pressedKey.classList.add('key_active');
    } else if (currentLang === 'bigEn') {
      currentLang = 'bigRu';
      addLetters(currentLang);
      pressedKey.classList.add('key_active');
    } else if (currentLang === 'bigRu') {
      currentLang = 'bigEn';
      addLetters(currentLang);
      pressedKey.classList.add('key_active');
    }
  } else if (event.shiftKey) {
    event.preventDefault();
    if (currentLang === 'smallEn') {
      currentLang = 'bigEn';
      addLetters(currentLang);
      pressedKey = document.querySelector(`#${target.id}`);
      pressedKey.classList.add('key_active');
    } else if (currentLang === 'smallRu') {
      currentLang = 'bigRu';
      addLetters(currentLang);
      pressedKey = document.querySelector(`#${target.id}`);
      pressedKey.classList.add('key_active');
    }
    if (event.key !== 'Shift') {
      textAreaContent += pressedKey.innerHTML;
      textArea.value = textAreaContent;
    }
  } else if (event.key === 'meta') {
    // console.log('meta');
    event.preventDefault();
  } else if (event.key === 'Escape') {
    /* empty */
  } else if (event.key === 'Alt') {
    /* empty */
  } else if (event.key === 'Meta') {
    /* empty */
  } else if (event.key === 'Control') {
    /* empty */
  } else if (event.key === 'Enter') {
    // textAreaContent+= pressedKey.innerHTML;
    // const br = document.createElement('br');
    //  textArea.append(br);
    // = textAreaContent;

    textAreaContent += '\b\r';
    textArea.value = textAreaContent;
    // area.value =
    // area.value.substring(0, area.selectionStart) +
    // "\n" +
    // area.value.substring(area.selectionEnd, area.value.length);
  } else {
    textAreaContent += pressedKey.innerHTML;
    textArea.value = textAreaContent;
  }
  // console.log(event.code, event.key)
  // console.log(event.shiftKey, event.ctrlKey)
});
function setLocalStorage() {
  localStorage.setItem('lang', currentLang);
}
window.addEventListener('beforeunload', setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    currentLang = localStorage.getItem('lang');
    addLetters(currentLang);
  } else {
    currentLang = 'smallEn';
    addLetters(currentLang);
  }
}
window.addEventListener('load', getLocalStorage);
