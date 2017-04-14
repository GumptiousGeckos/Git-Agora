import React from 'react';

export default (props) => {
  const { full_name, hooks_url } = props.repo
  return (
    <div>
      {full_name}
    </div>
  )
}