import { Link, routes } from '@redwoodjs/router'

const LoggedinPage = () => {
  return (
    <>
      <h1>LoggedinPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoggedinPage/LoggedinPage.js</code>
      </p>
      <p>
        My default route is named <code>loggedin</code>, link to me with `
        <Link to={routes.loggedin()}>Loggedin</Link>`
      </p>
    </>
  )
}

export default LoggedinPage
