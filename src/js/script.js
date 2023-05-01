// document.addEventListener('keydown', function pressKeyDown(event){
//   console.log(event)
// })
// first alphabet for english keyboard
const englishAlphabet = [
  ['esc','f1','f2','f3','f4','f5','f6','f7','f8','f9','f10','f11','f12','off'],
  ['§','1','2','3','4','5','6','7','8','9','0','-','=','delete'],
  ['tab','Q','W','E','R','T','Y','U','I','O','P','[',']',`\\`],
  ['tab','A','S','D','F','G','H','J','K','L',';',"'","return"],
  ['shift','`','Z','X','C','V','B','N','M',',','.','/','shift'],
  ['fn','ctrl','ait','cmd','','cmd','alt']
]

const basicAlphabet = [[
  {
    'name':'ecs',
    'id':'Escape',
    'class':'key key_esc key_left'
  },
  {
    'name':'f1',
    'id':'F1',
    'class':'key key_lower key_center'
  },
  {
    'name':'f2',
    'id':'F2',
    'class':'key key_lower key_center'
  },
  {
    'name':'f3',
    'id':'F3',
    'class':'key key_lower key_center'
  },
  {
    'name':'f4',
    'id':'F4',
    'class':'key key_lower key_center'
  },
  {
    'name':'f5',
    'id':'F5',
    'class':'key key_lower key_center'
  },
  {
    'name':'f6',
    'id':'F6',
    'class':'key key_lower key_center'
  },
  {
    'name':'f7',
    'id':'F7',
    'class':'key key_lower key_center'
  },
  {
    'name':'f8',
    'id':'F8',
    'class':'key key_lower key_center'
  },
  {
    'name':'f9',
    'id':'F9',
    'class':'key key_lower key_center'
  },
  {
    'name':'f10',
    'id':'F10',
    'class':'key key_lower key_center'
  },
  {
    'name':'f11',
    'id':'F11',
    'class':'key key_lower key_center'
  },
  {
    'name':'f12',
    'id':'F12',
    'class':'key key_lower key_center'
  },
  {
    'name':'off',
    'id':'off',
    'class':'key key_lower key_right'
  }],
  [
    {
      'name':'§',
      'id':'Backquote',
      'class':'key key_s key_center'
    },
    {
      'name':'1',
      'id':'Digit1',
      'class':'key key_s key_center'
    },
    {
      'name':'2',
      'id':'Digit2',
      'class':'key key_s key_center'
    },
    {
      'name':'3',
      'id':'Digit3',
      'class':'key key_s key_center'
    },
    {
      'name':'4',
      'id':'Digit4',
      'class':'key key_s key_center'
    },
    {
      'name':'5',
      'id':'Digit5',
      'class':'key key_s key_center'
    },
    {
      'name':'6',
      'id':'Digit6',
      'class':'key key_s key_center'
    },
    {
      'name':'7',
      'id':'Digit7',
      'class':'key key_s key_center'
    },
    {
      'name':'8',
      'id':'Digit8',
      'class':'key key_s key_center'
    },
    {
      'name':'9',
      'id':'Digit9',
      'class':'key key_s key_center'
    },
    {
      'name':'0',
      'id':'Digit0',
      'class':'key key_s key_center'
    },
    {
      'name':'-',
      'id':'Minus',
      'class':'key key_s key_center'
    },
    {
      'name':'=',
      'id':'Equal',
      'class':'key key_s key_center'
    },
    {
      'name':'delete',
      'id':'Backspace',
      'class':'key key_l key_right'
    },
  ],

  
]
//classes alphabet
const escClasses = ['key','key_esc','key_left'];
//esc button
const topClasses = ['key','key_lower','key_center'];
// top buttons like f1, f2, off
const standartClasses = ['key','key_s','key_center'];
//like 1, F
const deleteClasses = ['key', 'key_l', 'key_right'];
//delete button
const tabClasses = ['key', 'key_l', 'key_left'];
//tab button
const capslockClasses = ['key', 'key_xl', 'key_left'];
//capslok button
const returnClasses = ['key', 'key_xl', 'key_right'];
//return button
const leftShiftClasses = ['key', 'key_xxl', 'key_left'];
const rightShiftClasses = ['key', 'key_xxl', 'key_right'];
//shift buttons
const standartBottomLeftClasses = ['key','key_s','key_Left'];
const standartBottomRightClasses = ['key','key_s','key_right'];
// bottom buttons fn, alt
const cmdLeftClasses = ['key','key_m','key_Left'];
const cmdRightClasses = ['key','key_m','key_right'];
// cmd buttons
const spaceClasses = ['key','key_xxxl','key_right'];
// space button


// function createBasicKeyboard(alphabet){
//   const body = document.querySelector('#body');
//   body.classList.add('body')
//   const keyboard = document.createElement('section')
//   keyboard.classList.add('keyboard')
//   const keyboardWrapper = document.createElement('div')
//   keyboardWrapper.classList.add('keyboard__wrapper', 'container')
//   body.prepend(keyboard);
//   keyboard.prepend(keyboardWrapper);
//   for(i=0;i<6;i++){
//     let keyboardLine = 0;
//     keyboardLine = document.createElement('ul')
//     keyboardLine.classList.add('keyboard__line')
//     for(y=0;y<alphabet[i].length;y++){
//       let keyboardElement = 0;
//       keyboardElement = document.createElement('li');
//       keyboardElement.textContent = alphabet[i][y];
//       keyboardLine.append(keyboardElement)
//     }
//     keyboardWrapper.append(keyboardLine);
    
//   }

  // for(i=0;i<6;i++){
  //   keyboardLine = document.createElement('ul');
  //   keyboardLine.classList.add('keyboard__line'); 
  //   keyboardLine.prepend(...keyboardLine[i])
  //   keyboardWrapper.prepend[keyboardLine]
  // }
// }
function createBasicKeyboard(alphabet){
  const body = document.querySelector('#body');
  body.classList.add('body','container')
  const keyboard = document.createElement('section')
  keyboard.classList.add('keyboard')
  const keyboardWrapper = document.createElement('div')
  keyboardWrapper.classList.add('keyboard__wrapper', 'container')
  body.prepend(keyboard);
  keyboard.prepend(keyboardWrapper);
  for(i=0;i<2;i++){

    //TODO change 2 for 6


    let keyboardLine = 0;
    keyboardLine = document.createElement('ul')
    keyboardLine.classList.add('keyboard__line')
    for(y=0;y<14;y++){
      let keyboardElement = 0;
      keyboardElement = document.createElement('li');
      keyboardElement.textContent = alphabet[i][y].name;
      keyboardElement.className = alphabet[i][y].class;
      keyboardElement.id = alphabet[i][y].id;
      keyboardLine.append(keyboardElement)
    }
    keyboardWrapper.append(keyboardLine);
    
  }
}
createBasicKeyboard(basicAlphabet)
// createBasicKeyboard(englishAlphabet)
function addKeyboard(alphabet){
  const keyboardWrapper = document.querySelector('.keyboard__wrapper')
  let keyboardLine;
  let currentKey;
  //todo change for add all html elements
  for(i=0;i<6;i++){
    keyboardLine = document.createElement('ul');
    keyboardLine.classList.add('keyboard__line');
    alphabet.forEach(element => {
      for(y=0;y<element.length;y++){
        currentKey = document.createElement('li');
        // currentKey.innerHTML = '';
        currentKey.innerHTML = element[y];
        keyboardLine.prepend(currentKey);
      }

      if(element==='esc'){
      }
      
    });
    keyboardWrapper.prepend(keyboardLine);
  }
  console.log(keyboardLine)
  
}
// addKeyboard(englishAlphabet)

function addTextArea(){
  const body = document.querySelector('#body');
  const textArea = document.createElement('section')
  textArea.classList.add('text-area')
  body.prepend(textArea);
}
addTextArea()
let textAreaContent = '';
document.addEventListener('keydown', function pressKeyDown(event){
  const preesedKey = document.querySelector(`#${event.code}`)
  console.log(preesedKey)
  preesedKey.classList.add('key_active')
  textAreaContent+= event.key;
  const textArea = document.querySelector('.text-area');
  textArea.textContent = textAreaContent;
  console.log(event.code, event.key)
})
document.addEventListener('keyup', function pressKeyup(event){
  const preesedKey = document.querySelector(`#${event.code}`)
  console.log(preesedKey)
  preesedKey.classList.remove('key_active')
  console.log(event.code, event.key)
})