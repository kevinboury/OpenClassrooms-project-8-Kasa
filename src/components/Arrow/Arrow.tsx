function Arrow({className, direction} : {className: string, direction: "UP" | "DOWN" | "LEFT" | "RIGHT"}) {
    switch(direction) {
        case "UP":
            return <svg className={className} width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white"/></svg>
        case "DOWN":
            return <svg className={className} width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2103 21.2103C16.5409 21.8798 15.4538 21.8798 14.7843 21.2103L4.50207 10.9281C3.83265 10.2586 3.83265 9.17151 4.50207 8.50209C5.17148 7.83267 6.25862 7.83267 6.92804 8.50209L16 17.5741L25.072 8.50745C25.7414 7.83803 26.8285 7.83803 27.4979 8.50745C28.1674 9.17686 28.1674 10.264 27.4979 10.9334L17.2157 21.2157L17.2103 21.2103Z" fill="white"/></svg>
        case "LEFT":
            return <svg className={className} width={32} height={32} viewBox="0 0 47 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M46.68 7.08L39.56 0L0 39.6L39.6 79.2L46.68 72.12L14.16 39.6L46.68 7.08Z" fill="white"/></svg>
        case "RIGHT":
            return <svg className={className} width={32} height={32} viewBox="0 0 47 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 72.12L7.08 79.2L46.68 39.6L7.08 0L0 7.08L32.52 39.6L0 72.12Z" fill="white"/></svg>
    }
}

export default Arrow;