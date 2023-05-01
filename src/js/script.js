document.addEventListener('keydown', function pressKeyDown(event){
  console.log(event)
})
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
    'id':'27',
    'class':'key key_esc key_left'
  },
  {
    'name':'f1',
    'id':'112',
    'class':'key key_lower key_center'
  },
  {
    'name':'f2',
    'id':'113',
    'class':'key key_lower key_center'
  },
  {
    'name':'f3',
    'id':'114',
    'class':'key key_lower key_center'
  },
  {
    'name':'f4',
    'id':'115',
    'class':'key key_lower key_center'
  },
  {
    'name':'f5',
    'id':'116',
    'class':'key key_lower key_center'
  },
  {
    'name':'f6',
    'id':'117',
    'class':'key key_lower key_center'
  },
  {
    'name':'f7',
    'id':'118',
    'class':'key key_lower key_center'
  },
  {
    'name':'f8',
    'id':'119',
    'class':'key key_lower key_center'
  },
  {
    'name':'f9',
    'id':'120',
    'class':'key key_lower key_center'
  },
  {
    'name':'f10',
    'id':'121',
    'class':'key key_lower key_center'
  },
  {
    'name':'f11',
    'id':'122',
    'class':'key key_lower key_center'
  },
  {
    'name':'f12',
    'id':'123',
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
      'id':'192',
      'class':'key key_s key_center'
    },
    {
      'name':'1',
      'id':'49',
      'class':'key key_s key_center'
    },
    {
      'name':'2',
      'id':'50',
      'class':'key key_s key_center'
    },
    {
      'name':'3',
      'id':'51',
      'class':'key key_s key_center'
    },
    {
      'name':'4',
      'id':'52',
      'class':'key key_s key_center'
    },
    {
      'name':'5',
      'id':'53',
      'class':'key key_s key_center'
    },
    {
      'name':'6',
      'id':'54',
      'class':'key key_s key_center'
    },
    {
      'name':'7',
      'id':'55',
      'class':'key key_s key_center'
    },
    {
      'name':'8',
      'id':'56',
      'class':'key key_s key_center'
    },
    {
      'name':'9',
      'id':'57',
      'class':'key key_s key_center'
    },
    {
      'name':'0',
      'id':'48',
      'class':'key key_s key_center'
    },
    {
      'name':'-',
      'id':'189',
      'class':'key key_s key_center'
    },
    {
      'name':'=',
      'id':'187',
      'class':'key key_s key_center'
    },
    {
      'name':'delete',
      'id':'8',
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
  body.classList.add('body')
  const keyboard = document.createElement('section')
  keyboard.classList.add('keyboard')
  const keyboardWrapper = document.createElement('div')
  keyboardWrapper.classList.add('keyboard__wrapper', 'container')
  body.prepend(keyboard);
  keyboard.prepend(keyboardWrapper);
  for(i=0;i<6;i++){
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
