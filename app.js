//Define UI
const form = document.querySelector('#pro-form');
const velocity = document.querySelector('#velocity');
const angle = document.querySelector('#angle');
const gravity = document.querySelector('#gravity');
const range = document.querySelector('#range');
const height = document.querySelector('#height');
const time = document.querySelector('#time');

//listen to submit;

form.addEventListener('submit', function(e){

//show loader
document.querySelector('#loader').style.display = 'block';
//hide result
document.querySelector('#results').style.display = 'none';

setTimeout(calculateResults, 2000)
e.preventDefault()
}) 
    


function calculateResults(e) {
    const titai = angle.value*Math.PI/180;
    const calAngle = parseFloat(Math.sin(titai));
    const u = parseFloat(velocity.value)
    const g = parseFloat(gravity.value)

    const t =(2 * u *calAngle)/(g);
  const r =  ((u*u)*(Math.sin(2*titai)))/(g)
    const h = ((u*u)*(calAngle*calAngle))/(2*g)

    if (isFinite(g)) {
        time.value = t.toFixed(2);
        range.value = r.toFixed(2);
       height.value = h.toFixed(2);
       //show loader
document.querySelector('#loader').style.display = 'none';
//hide result
document.querySelector('#results').style.display = 'block';
    } else {
        showError('please check your numbers')
    }

    velocity.value ='';
    angle.value ='';
    gravity.value ='';
   

}

function showError(error) {
    //show loader
document.querySelector('#loader').style.display = 'none';
//hide result
document.querySelector('#results').style.display = 'none';
   const errorDiv =document.createElement('div');
   errorDiv.className = 'alert alert-danger';
    const card = document.querySelector('.card-title');
    const heading = document.querySelector('#heading');
   errorDiv.appendChild(document.createTextNode(error));
   card.insertBefore(errorDiv,heading)

   setTimeout(clearAlert, 2000)
}

function clearAlert() {
    document.querySelector('.alert').remove()
}