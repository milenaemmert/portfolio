import PropTypes from 'prop-types'

import s from './image.module.css'

export const Image = ({
  className,
  src,
  fallback,
  alt = '',
  width,
  height,
  isLazy = false
}) => {
  const imageClassName = className ? `${className} ${s.image}` : s.image

  return (
    <picture className={s.wrapper}>
      <source srcSet={src} type='image/webp' />

      <img
        alt={alt}
        className={imageClassName}
        height={height}
        loading={isLazy ? 'lazy' : undefined}
        src={fallback}
        width={width}
      />
    </picture>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  isLazy: PropTypes.bool,
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}
