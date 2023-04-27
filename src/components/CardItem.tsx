import React from "react";
import { Link } from "react-router-dom";

interface Props {
    path: string
    label: string
    src: string
    text: string
  }

function CardItem({path, label, src, text}:Props) {
  return (
  <>
    <li className="cards_item">
        <Link className='cards_item_link' to={path}>
            <figure className="cards_item_pic-wrap" data-category={label}>
                <img src={src} alt="Project Image" className="cards_item_img"/>
            </figure>
            <div className="cards_item_info">
                <h5 className="cards_item_text">{text}</h5>
            </div>
        </Link>
    </li>
  </>
  );
}

export default CardItem;
