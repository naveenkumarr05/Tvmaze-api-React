import React from "react";

export default ({ handleChange, handleSubmit, inputValue }) => {
    return (
        <div className="form-container">
            <h1>TV Shows</h1>
            <form onClick={handleSubmit}>
                <input
                    className="form-control input_form"
                    onChange={handleChange}
                    type="text"
                    value={inputValue}
                    placeholder="Search Here"
                />
            </form>
        </div>
    );
};
