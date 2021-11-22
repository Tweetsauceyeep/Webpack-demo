// import _, {multiply} from 'lodash'
import myName from './myName';
import './styles.css'
import damnDaniel from './damnDaniel.jpg'
import data from './data.xml'
import notes from './data.csv'
function component() {
  const element = document.createElement('div');

  // lodash is needed for this line in the script to work (was included before using a link in the html file )
  //element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.innerHTML = myName('ethan')
  element.classList.add('textBlue')

  const myIcon = new Image();
  myIcon.src = damnDaniel
  element.appendChild(myIcon);
  
  console.log(data);
  console.log(notes);
  return element;
}

document.body.appendChild(component());
