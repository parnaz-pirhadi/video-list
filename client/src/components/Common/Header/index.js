import React from 'react';
import { HeaderStyleWrapper, NameStyleWrapper} from "./styles";

function Header () {
    return (
        <HeaderStyleWrapper className="navbar navbar-expand-lg">
            <NameStyleWrapper className="navbar-brand m-3">video list</NameStyleWrapper>
        </HeaderStyleWrapper>
    );
};

export default Header
