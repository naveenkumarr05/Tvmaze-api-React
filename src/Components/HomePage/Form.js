import React from "react";

export default ({ handleChange, handleSubmit, inputValue }) => {
    return (
        <div className="form-container">
            <div variant="title" color="inherit" style={{ flex: 1 }} align="center">
                TV Series
            </div>
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
