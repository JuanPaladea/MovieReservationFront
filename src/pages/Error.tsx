import ErrorComponent from "../components/ErrorComponent"

const Error = () => {
  return (
    <ErrorComponent error_number={404} error_title="Page not found" error_message="Cannot find the page you're looking for" />
  )
}

export default Error;