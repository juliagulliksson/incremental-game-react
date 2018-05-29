import React from 'react';

export default function UpgradeImage ({ Source, Alt }){
  return (
    <div className="upgrade-icon">
        <img src={ Source } alt={ Alt }/>
    </div>
  )
}