// import _, {multiply} from 'lodash'
import myName from './myName';
import './styles.css'

function component() {
  const element = document.createElement('div');

  // lodash is needed for this line in the script to work (was included before using a link in the html file )
  //element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.innerHTML = myName('ethan')
  element.classList.add('textBlue')
  return element;
}

document.body.appendChild(component());
