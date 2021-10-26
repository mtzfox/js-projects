function updateVariable() {
  let myImage = document.querySelector('.controls ~ img')
  let hl = document.querySelector('.hl')

  //spacing, blur, base
  document.querySelector('.controls').addEventListener('mouseup', (event) => {
    myImage.classList.add('change')
    hl.classList.add('change')
    setClass = () => {
      let vars = document.querySelector(':root')
      let target = event.target.id
      let targetValue = event.target.value

      if (target == 'spacing') {
        vars.style.setProperty('--spacingChange', `${targetValue}px`)
      } else if (target == 'blur') {
        vars.style.setProperty('--blurChange', `blur(${targetValue}px)`)
      }
    }
    setClass()
    event.stopPropagation()
  })

  // input event
  document.querySelector('#base').addEventListener('input', (event) => {
    myImage.classList.add('.change')

    setClass = () => {
      let vars = document.querySelector(':root')
      let targetValue = event.target.value

      vars.style.setProperty('--baseChange', `${targetValue}`)
      hl.style.setProperty('--baseChange', `${targetValue}`)
    }
    setClass()
    event.stopPropagation()
  })
}

updateVariable()
//export { updateVariable }
