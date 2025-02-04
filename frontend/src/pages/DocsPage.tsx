import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import openapi from '../../public/openapi.json'

function DocsPage() {
  return <SwaggerUI spec={openapi} />
}

export default DocsPage
