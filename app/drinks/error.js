'use client'

const error = error => {
  console.log(error)
  return <div>Error Message: {error.error.message}</div>
}

export default error
