import React from 'react'

const Test = () => {
  const test = ['is', 'blocking', 'you']

  test.map((el) => {
    console.log('testing' + el)
  })
  return <div>Test</div>
}

export default Test
