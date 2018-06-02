import React from 'react';
import {connect} from "react-redux";

export function Stories(props) {
  return <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
}

function mapState(state) {
  return state;
}

export default connect(mapState)(Stories);
