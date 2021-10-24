function updateVariable() {
  let myImage = document.querySelector('.controls ~ img')

  //spacing, blur, base
  document.querySelector('.controls').addEventListener('mouseup', (event) => {
    myImage.classList.add('change')
    setClass = () => {
      let vars = document.querySelector(':root')
      let target = event.target.id
      let targetValue = event.target.value

      if (target == 'spacing') {
        vars.style.setProperty('--spacingChange', `${targetValue}px`)
      } else if (target == 'blur') {
        vars.style.setProperty('--blurChange', `blur(${targetValue}px)`)
      } else if (target == 'base') {
        vars.style.setProperty('--baseChange', `${targetValue}`)
      }
      console.log(target, targetValue)
    }
    setClass()
    event.stopPropagation()
  })
}

updateVariable()
//export { updateVariable }
