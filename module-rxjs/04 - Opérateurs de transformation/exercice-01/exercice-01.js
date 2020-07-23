import {of} from 'rxjs';
import {pluck} from 'rxjs/operators';

of({
  e: () => {
    alert(this.t);
  },
  r: true,
  t: 'Ceci est un texte dans un objet',
  y: [{
    u: {
      ' ': {
        ar: {
          e: {
            tho: false,
            the: {
              ' best': 'Bravo !'
            },
            thi: true
          }
        },
        ab: 150
      }
    }
  },{
    e: [() => {
        alert('Vous êtes ici !');
    }, true],
    r: false,
    t: function(){
        this.y = {
            e:() => {
                alert('Ou suis je ? Qui suis je ?');
            }
        };
        alert('Desormais ma propriété y contient un objet');
    }
  },{
    nothing: 'here'
  }]
})
.pipe(
  pluck('y', 0, 'u', ' ', 'ar', 'e', 'the', ' best')
).subscribe((value) => {

  console.log(value);

})