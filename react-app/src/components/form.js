import React from "react";

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="City" />
        <button>Getting weather</button>
    </form>
);

export default Form;