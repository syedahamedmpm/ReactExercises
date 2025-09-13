import React from "react";

// Step 1: Create the HOC
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Logging props:", props);
    return <WrappedComponent {...props} greeting="How are u" />;
  };
}

// Step 2: Create your original component
const Examble1 = (props) => {
  return (
    <p>
      Examble1 - Hello {props.name} {props.greeting}
    </p>
  );
};

// Step 3: Export the HOC-wrapped component
export default withLogger(Examble1);
