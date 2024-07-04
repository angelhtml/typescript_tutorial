"use client"
import { useEffect, useState } from "react"
import NavbarStyle from "./navbar.module.css"

type Props = {
    onProductTypeChange?: (newType: number) => void;
  };

export default function Navbar({onProductTypeChange} : Props){

    return(
        <div className={NavbarStyle.navbar}>
            <div className={NavbarStyle.box1}>
                <div className={NavbarStyle.space_invader}></div>
            </div>
            <ul className={NavbarStyle.box2}>
              <li onClick={() => onProductTypeChange?.(1)}>signup</li>
              <li onClick={() => onProductTypeChange?.(2)}>signup</li>
              <li onClick={() => onProductTypeChange?.(3)}>signup</li>
              <li onClick={() => onProductTypeChange?.(4)}>signup</li>  
            </ul>
        </div>
    )
}