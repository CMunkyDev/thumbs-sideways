let thumb = document.querySelector('.thumb')

thumb.addEventListener('click', (e) => {
  if(!thumb.classList.contains('up') && !thumb.classList.contains('sideways')) {
    thumb.classList.add('up')
  } else if (thumb.classList.contains('up')) {
    thumb.classList.remove('up')
    thumb.classList.add('sideways')
  } else {
    thumb.classList.remove('sideways')
    thumb.classList.add('up')
  }
})
