import React from 'react'
import ErrorPageContent from '@/components/pages/ErrorPageContent'

const Error = () => {
  return (
    <div><ErrorPageContent code={503} /></div>
  )
}

export default Error