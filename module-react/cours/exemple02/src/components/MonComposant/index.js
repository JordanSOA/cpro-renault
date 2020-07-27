import React from 'react';

export function MonComposant() {
  const styleDiv = {
    border: '2px solid blue'
  };
  const classNameDiv= 'classe-css-de-la-div';
  const styleH1 = {
    color: 'puple'
  };
  const titleH1 = 'Titre des bases de React';
  const onClickH1 = function(evt) {
    window.alert('Titre Cliqué !');
  }
  const classNameH1 = 'classe-css-des-titres';
  const styleP = {
    color: 'pink'
  };
  const titleP = 'les bases de React';
  const onClickP = function(evt) {
    window.alert('Parapgraphe Cliqué !');
  };
  const classNameP = 'classe-css-des-paragraphes';

  return (<div
  style={ styleDiv }
  className={ classNameDiv }
  >
    <h1 style={ styleH1 }
        title={ titleH1 }
        onClick={ onClickH1}
        className={ classNameH1 }>Les bases</h1>
    <p style={ styleP }
      title={ titleP }
      onClick={ onClickP }
      className={ classNameP }>Etudions les bases de React</p>
  </div>)
}