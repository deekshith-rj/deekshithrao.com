const Footer = props => {

  const { isHome } = props;

  const iconClass = "w-7 h-full fill-slate-400 transition duration-500 hover:fill-green-sidc md:w-8 md:h-8 xl:w-9 xl:h-9";

  const homeClass = "fixed left-0 right-0 bottom-0 mx-auto pb-4 pr-4 sm:pr-6 sm:pb-6 md:pr-10 md:pb-10 xl:pr-14 xl:pb-14";
  const otherClass = "w-full max-w-sm mx-auto border-t border-slate-300 flex-shrink pb-8 mt-6 sm:mt-9 sm:py-12 md:py-16 md:mt-12"

  return (
    <footer className={`${isHome ? homeClass : otherClass}`}>
      <div className={`flex gap-3.5 md:gap-4 lg:gap-5 xl:gap-6 ${isHome ? "w-full max-w-[100rem] justify-end mx-auto" : "w-full justify-center"}`}>
        <a href="https://github.com/samirelanduk">
          <svg
            viewBox="0 0 176 176"
            className={iconClass}
          >
            <path d="M152 0H24A24 24 0 0 0 0 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V24a24 24 0 0 0-24-24zm-46.75 140.55c-2.82.54-3.78-1.16-3.78-2.57 0-1.76.07-7.57.07-14.8 0-5.07-1.79-8.38-3.71-10 12.23-1.33 25.09-5.9 25.09-26.66A20.71 20.71 0 0 0 117.28 72c.55-1.37 2.41-6.87-.55-14.31 0 0-4.6-1.45-15 5.54a52.85 52.85 0 0 0-27.5 0c-10.52-7-15.13-5.54-15.13-5.54-3 7.46-1.1 12.96-.53 14.31a20.64 20.64 0 0 0-5.66 14.5c0 20.7 12.84 25.35 25 26.7a11.45 11.45 0 0 0-3.48 7.23c-3.15 1.38-11.12 3.77-16-4.49 0 0-2.9-5.2-8.42-5.57 0 0-5.37-.07-.39 3.28 0 0 3.62 1.67 6.12 7.9 0 0 3.23 10.51 18.53 7.26 0 4.5.06 7.9.06 9.19s-1 3.1-3.75 2.59C48.76 133.47 33 113.22 33 89.34c0-29.85 24.61-54 55-54s55 24.2 55 54.05c0 23.79-15.74 44.06-37.75 51.16z" />
          </svg>
        </a>
        <a href="https://twitter.com/samirelanduk">
          <svg
            xmlSpace="preserve"
            className={iconClass}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}
            viewBox="0 0 512 512"
          >
            <path d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892ZM195.519 424.544c135.939 0 210.268-112.643 210.268-210.268 0-3.218 0-6.437-.153-9.502 14.406-10.421 26.973-23.448 36.935-38.314-13.18 5.824-27.433 9.809-42.452 11.648 15.326-9.196 26.973-23.602 32.49-40.92-14.252 8.429-30.038 14.56-46.896 17.931-13.487-14.406-32.644-23.295-53.946-23.295-40.767 0-73.87 33.104-73.87 73.87 0 5.824.613 11.494 1.992 16.858-61.456-3.065-115.862-32.49-152.337-77.241-6.284 10.881-9.962 23.601-9.962 37.088a73.57 73.57 0 0 0 32.95 61.456c-12.107-.307-23.448-3.678-33.41-9.196v.92c0 35.862 25.441 65.594 59.311 72.49a73.66 73.66 0 0 1-19.464 2.606c-4.751 0-9.348-.46-13.946-1.38 9.349 29.426 36.628 50.728 68.965 51.341-25.287 19.771-57.164 31.571-91.8 31.571-5.977 0-11.801-.306-17.625-1.073 32.337 21.15 71.264 33.41 112.95 33.41Z" />
          </svg>
        </a>
        <a href="https://instagram.com/samirelanduk">
          <svg
            xmlSpace="preserve"
            className={iconClass}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}
            viewBox="0 0 512 512"
          >
            <path d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892ZM256 81c-47.527 0-53.487.201-72.152 1.053-18.627.85-31.348 3.808-42.48 8.135-11.508 4.472-21.267 10.456-30.996 20.184-9.729 9.729-15.713 19.489-20.185 30.996-4.326 11.132-7.284 23.853-8.135 42.48C81.201 202.513 81 208.473 81 256s.201 53.487 1.052 72.152c.851 18.627 3.809 31.348 8.135 42.48 4.472 11.507 10.456 21.267 20.185 30.996s19.488 15.713 30.996 20.185c11.132 4.326 23.853 7.284 42.48 8.134C202.513 430.799 208.473 431 256 431s53.487-.201 72.152-1.053c18.627-.85 31.348-3.808 42.48-8.134 11.507-4.472 21.267-10.456 30.996-20.185s15.713-19.489 20.185-30.996c4.326-11.132 7.284-23.853 8.134-42.48C430.799 309.487 431 303.527 431 256s-.201-53.487-1.053-72.152c-.85-18.627-3.808-31.348-8.134-42.48-4.472-11.507-10.456-21.267-20.185-30.996-9.729-9.728-19.489-15.712-30.996-20.184-11.132-4.327-23.853-7.285-42.48-8.135C309.487 81.201 303.527 81 256 81Zm0 31.532c46.727 0 52.262.178 70.715 1.02 17.062.779 26.328 3.63 32.495 6.025 8.169 3.175 13.998 6.968 20.122 13.091 6.124 6.124 9.916 11.954 13.091 20.122 2.396 6.167 5.247 15.433 6.025 32.495.842 18.453 1.021 23.988 1.021 70.715 0 46.727-.179 52.262-1.021 70.715-.778 17.062-3.629 26.328-6.025 32.495-3.175 8.169-6.967 13.998-13.091 20.122-6.124 6.124-11.953 9.916-20.122 13.091-6.167 2.396-15.433 5.247-32.495 6.025-18.45.842-23.985 1.021-70.715 1.021-46.73 0-52.264-.179-70.715-1.021-17.062-.778-26.328-3.629-32.495-6.025-8.169-3.175-13.998-6.967-20.122-13.091-6.124-6.124-9.917-11.953-13.091-20.122-2.396-6.167-5.247-15.433-6.026-32.495-.842-18.453-1.02-23.988-1.02-70.715 0-46.727.178-52.262 1.02-70.715.779-17.062 3.63-26.328 6.026-32.495 3.174-8.168 6.967-13.998 13.091-20.122 6.124-6.123 11.953-9.916 20.122-13.091 6.167-2.395 15.433-5.246 32.495-6.025 18.453-.842 23.988-1.02 70.715-1.02Zm0 53.603c-49.631 0-89.865 40.234-89.865 89.865 0 49.631 40.234 89.865 89.865 89.865 49.631 0 89.865-40.234 89.865-89.865 0-49.631-40.234-89.865-89.865-89.865Zm0 148.198c-32.217 0-58.333-26.116-58.333-58.333s26.116-58.333 58.333-58.333 58.333 26.116 58.333 58.333-26.116 58.333-58.333 58.333Zm114.416-151.748c0 11.598-9.403 20.999-21.001 20.999-11.597 0-20.999-9.401-20.999-20.999 0-11.598 9.402-21 20.999-21 11.598 0 21.001 9.402 21.001 21Z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/samirelanduk/">
          <svg
            xmlSpace="preserve"
            className={iconClass}
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}
            viewBox="0 0 512 512"
          >
            <path d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892ZM160.461 423.278V197.561h-75.04v225.717h75.04Zm270.539 0V293.839c0-69.333-37.018-101.586-86.381-101.586-39.804 0-57.634 21.891-67.617 37.266v-31.958h-75.021c.995 21.181 0 225.717 0 225.717h75.02V297.222c0-6.748.486-13.492 2.474-18.315 5.414-13.475 17.767-27.434 38.494-27.434 27.135 0 38.007 20.707 38.007 51.037v120.768H431ZM123.448 88.722C97.774 88.722 81 105.601 81 127.724c0 21.658 16.264 39.002 41.455 39.002h.484c26.165 0 42.452-17.344 42.452-39.002-.485-22.092-16.241-38.954-41.943-39.002Z" />
          </svg>
        </a>
        <a href="/rss" title="Subscribe to RSS feed">
          <svg
            xmlSpace="preserve"
            className={iconClass}
            style={{enableBackground: "new 0 0 512 512"}}
            viewBox="0 0 512 512"
          >
            <path d="M428.522 0H83.478C37.446 0 0 37.446 0 83.478v345.043C0 474.554 37.446 512 83.478 512h345.043C474.554 512 512 474.554 512 428.522V83.478C512 37.446 474.554 0 428.522 0zM122.435 439.652c-27.619 0-50.087-22.468-50.087-50.087 0-27.619 22.468-50.087 50.087-50.087 27.619 0 50.087 22.468 50.087 50.087 0 27.619-22.468 50.087-50.087 50.087zM256 422.957c-18.413 0-33.391-14.978-33.391-33.391 0-55.234-44.935-100.174-100.174-100.174-18.413 0-33.391-14.978-33.391-33.391s14.978-33.391 33.391-33.391c92.065 0 166.956 74.897 166.956 166.956 0 18.412-14.978 33.391-33.391 33.391zm133.565 0c-18.413 0-33.391-14.978-33.391-33.391 0-128.886-104.859-233.739-233.739-233.739-18.413 0-33.391-14.978-33.391-33.391 0-18.413 14.978-33.391 33.391-33.391 165.707 0 300.522 134.815 300.522 300.522 0 18.411-14.979 33.39-33.392 33.39z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  
};

export default Footer;