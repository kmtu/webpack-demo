async function getComponent() {
  let element = document.createElement('div');
  try {
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash')
  }
  catch (error) {
    console.log('An error occurred while loading the component');
  }
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
})

