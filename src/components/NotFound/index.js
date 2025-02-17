import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="Not Found"
      className="notfoundImg"
    />
    <h1 className="page-heading">Page Not Found</h1>
    <p className="page-para">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
