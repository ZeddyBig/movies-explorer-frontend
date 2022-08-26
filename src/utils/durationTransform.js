const durationTransform = (duration) => {
    return (
        duration > 60 ? `${Math.floor(duration/60)}ч ${Math.floor(duration%60)}м` : `${duration}м`
    )
}

export default durationTransform;