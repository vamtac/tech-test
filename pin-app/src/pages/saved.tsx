import React from 'react';
import { Link } from "react-router-dom";

const Saved:React.FC = () => {
    return (
        <div>
            <h2 >Page 2</h2>
            <Link to="/">Go to Page 1</Link>
        </div>
    );
  }


export default Saved;