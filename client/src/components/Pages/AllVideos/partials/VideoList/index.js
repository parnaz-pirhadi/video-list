import React from 'react'
import {StyledBoardItem, StyledBoardsList} from './styles'
import "./style.css"

function VideoList({videoList}) {

    window.addEventListener('load', videoScroll);
    window.addEventListener('scroll', videoScroll);

    function videoScroll() {
        if (document.querySelectorAll('video[autoplay]').length > 0) {
            var windowHeight = window.innerHeight,
                videoEl = document.querySelectorAll('video[autoplay]');

            for (var i = 0; i < videoEl.length; i++) {
                var thisVideoEl = videoEl[i],
                    videoHeight = thisVideoEl.clientHeight,
                    videoClientRect = thisVideoEl.getBoundingClientRect().top;
                if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
                    thisVideoEl.play();
                } else {
                    thisVideoEl.pause();
                }

            }
        }

    }

    return (
        <StyledBoardsList>
            {videoList.map((video,i) =>
                <StyledBoardItem key={i}>
                    <video autoPlay muted playsInline loop poster="http://placehold.it/350x350">
                        <source src={video.attributes.preview_src} type="video/mp4"/>
                    </video>
                    <span>{video.attributes.description}</span>
                </StyledBoardItem>
            )
            }
        </StyledBoardsList>
    )
}

export default VideoList
