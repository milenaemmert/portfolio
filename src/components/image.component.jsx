import PropTypes from 'prop-types'

export const Image = ({
  className,
  src,
  fallback,
  alt = '',
  width,
  height,
  isLazy = false
}) => {
  return (
    <picture>
      <source srcSet={src} type='image/webp' />

      <img
        className={className}
        loading={isLazy ? 'lazy' : undefined}
        src={fallback}
        alt={alt}
        width={width}
        height={height}
      />
    </picture>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  isLazy: PropTypes.bool
}
