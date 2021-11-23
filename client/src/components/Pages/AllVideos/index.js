import React, {Fragment, useEffect} from 'react';
import {connect} from 'react-redux'
import {allVideosActions, allVideosSelectors} from "../../../ducks";
import { CardList} from './partials'
import { StyledBoardsListWrapper, StyledBoardsWrapper} from './styles';
import Header from "../../Common/Header";

function AllVideos({getVideoList,videoList}) {
    useEffect(() => {
        getVideoList();
    }, [])

    return (
        <Fragment>
            <Header/>
            <StyledBoardsWrapper>
                {videoList.length > 0 &&
                <StyledBoardsListWrapper>
                    <CardList videoList={videoList}
                    />
                </StyledBoardsListWrapper>
                }
            </StyledBoardsWrapper>
        </Fragment>

    );
};


const mapStateToProps = state => ({
    videoList: allVideosSelectors.getVideosList(state),
})
export default connect(mapStateToProps, {
    getVideoList: allVideosActions.getVideoList,
})(AllVideos)
