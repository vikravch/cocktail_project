import React from 'react';

type Props = {
    categoryText: string,
    categoryTitle: string,
    isActive?: boolean,
}
const MobileNavItem: React.FC<Props> = ({categoryText, categoryTitle, isActive}) => {
    return (
        <div className={"mobile-nav-item"+(isActive ? " active" : "")}>
          <span className={"material-symbols-outlined"+(isActive ? " fill" : "")}>{categoryText}</span>
          <span>{categoryTitle}</span>
        </div>
    );
}

export default MobileNavItem;
