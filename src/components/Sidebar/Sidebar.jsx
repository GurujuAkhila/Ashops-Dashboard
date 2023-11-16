import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { useState } from 'react';
import { motion } from "framer-motion";

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);

    const sidebarVariants = {
        true: {
          left : '0'
        },
        false:{
          left : '-60%'
        }
      }

    return (
        <>
            <div className='bars' onClick={()=>setExpanded(!expanded)} style={expanded?{left: '60%'} : {left:'5%'}}>
                <UilBars />
            </div>
            <motion.div className="Sidebar" variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''} >
                <div className="logo">
                    <img src={Logo} alt="" />
                    <span>
                        <span>A</span>shops
                    </span>
                </div>

                {/* menu */}

                <div className="menu">
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <div className={selected === index ? 'menuItem active' : "menuItem"}
                                    key={index}
                                    onClick={() => setSelected(index)}

                                >
                                    <item.icon />
                                    <span>
                                        {item.heading}
                                    </span>
                                </div>
                            )
                        })
                    }
                    <div className="menuItem">
                        <UilSignOutAlt />
                        <span>Sign Out</span>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Sidebar