


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


  const checks = webTechs.includes('SASS')

  if (checks){
    console.log('SASS is a CSS preprocessor')
  }else{
    console.log(webTechs.push('SASS'))
    console.log(webTechs)
  }
  
  