let thumb = document.querySelector('.thumb')

thumb.addEventListener('click', (e) => {
  if(!thumb.classList.contains('up') && !thumb.classList.contains('sideways')) {
    console.log('Do you seriously have the console open?')
    //thanks for a brutal and amazing six months. -Kyle Braden
    thumb.classList.add('up')
  } else if (thumb.classList.contains('up')) {
    thumb.classList.remove('up')
    thumb.classList.add('sideways')
  } else {
    thumb.classList.remove('sideways')
    thumb.classList.add('up')
  }
})
