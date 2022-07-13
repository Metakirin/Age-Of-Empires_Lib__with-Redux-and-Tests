import loading from './Loading.gif'

const LoaderSecondary = () => {
  return (
    <div className="small_loader">
      <img src={loading} alt="loading..." style={{ width: '300px' }} />
    </div>
  )
}

export default LoaderSecondary
