import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  rimRoot: {
    height: '100% !important',
    width: '100% !important',
  },
  rimSmallImage: {
    height: '100% !important',
    width: '100% !important',
  },
}))

/**
 * An element that determines the proper tag to use for a media node within a
 * [`Carousel`](/apiReference/carousel/Carousel).
 */
function Media({
  magnifyProps,
  imageProps,
  videoProps,
  src,
  alt,
  magnify,
  sources,
  type = 'image',
  ImageComponent,
  ImageMagnifyComponent,
}) {
  const classes = useStyles()

  const adjustMagnifyProps = () => {
    const appliedMagnifyProps = { ...(magnifyProps || {}) }
    appliedMagnifyProps.style = {
      ...((magnifyProps && magnifyProps.style) || {}),
      display: 'block',
      objectFit: 'contain',
    }
    appliedMagnifyProps.imageStyle = {
      ...((magnifyProps && magnifyProps.imageStyle) || {}),
      objectFit: 'contain',
    }
    appliedMagnifyProps.className = clsx(magnifyProps && magnifyProps.className, classes.rimRoot)
    appliedMagnifyProps.imageClassName = clsx(
      magnifyProps && magnifyProps.imageClassName,
      classes.rimSmallImage,
    )
    appliedMagnifyProps.enlargedImageStyle = {
      ...((magnifyProps && magnifyProps.enlargedImageStyle) || {}),
      height: '100%',
    }
    return appliedMagnifyProps
  }

  if (type === 'video') {
    if (sources && sources.length) {
      return (
        <video alt={alt} {...videoProps}>
          {sources.map(source => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      )
    } else {
      return <video src={src} alt={alt} {...videoProps} />
    }
  } else if (magnify) {
    return (
      <ImageMagnifyComponent
        enlargedImagePosition="over"
        {...adjustMagnifyProps()}
        smallImage={{
          src: src,
          alt: alt,
          isFluidWidth: true,
        }}
        largeImage={magnify}
      />
    )
  } else {
    return <ImageComponent key={src} src={src} alt={alt} fill {...imageProps} />
  }
}

export default Media
