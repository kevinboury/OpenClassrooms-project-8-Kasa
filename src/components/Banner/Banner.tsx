import './Banner.css'

function Banner( {title, page} : {title?: string, page: 'home' | 'about'} ) {
    const bannerPage = "banner-" + page;

    return (
        <div className={`banner ${bannerPage}`}>
            {title && <h1>{title}</h1>}
        </div>
    )
}

export default Banner