import React from "react";

import './Search.css';
import Input from "../../Form/Input";
import {Button} from "../../Form";

function Search({searchHandle, searchValue, clearSearch, searchChange}) {
    return (
        <div>
            <Input label="Search user " onKeyDown={searchHandle} value={searchValue} onChange={(e) => searchChange(e)}/>
            <Button handleClick={clearSearch} margin="0 10px" padding="0 5px">
                <span>Clear</span>
            </Button>
        </div>
    )
}

export default Search;