import './Banner.css'

interface BannerProps {
    title?: string;
    page: "home" | "about";
}

function Banner(props: BannerProps) {
    const bannerPage = "banner-" + props.page;

    return (
        <div className={`banner ${bannerPage}`}>
            {props.title && <h1>{props.title}</h1>}
        </div>
    )
}

export default Banner