const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
      <div id="wd-conditional-output-inline">
        { loggedIn && <h2>Welcome Inline<hr></hr></h2>      }
        {!loggedIn && <h2>Please login Inline<hr></hr></h2> }
      </div>
    );
   };
   export default ConditionalOutputInline;