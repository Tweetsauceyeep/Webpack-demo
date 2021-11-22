// import _, {multiply} from 'lodash'
import myName from './myName';

function component() {
  const element = document.createElement('div');

  // lodash is needed for this line in the script to work (was included before using a link in the html file )
  //element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.innerHTML = myName('ethan')
  return element;
}

document.body.appendChild(component());
